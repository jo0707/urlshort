import { GenerateRequest } from "~/types/request/generateRequest"
import { UrlModel } from "../models/url"
import { randomUrl } from "../utils/shortGenerator"
import { GenerateResponse } from "~/types/response/generateResponse"
import { isValidUrl } from "~/utils/validator"

export default defineEventHandler(async (event) => {
  const body: GenerateRequest = await readBody(event)

  if (!body.url) {
    throw createError({
      statusCode: 400,
      statusMessage: "No URL provided",
    })
  } else if (!isValidUrl(body.url)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid URL",
    })
  } else if (body.short && body.short.length > 32) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid short length",
    })
  }

  let url: IUrl = {
    url: body.url,
    short: await randomUrl(body.short),
  }

  const urlDocument = await UrlModel.create(url)
  urlDocument.save()

  return url as GenerateResponse
})
