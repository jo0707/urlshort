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
  }
  if (!isValidUrl(body.url)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid URL",
    })
  }

  let url: IUrl = {
    url: body.url,
    short: await randomUrl(),
  }

  const urlDocument = await UrlModel.create(url)
  urlDocument.save()

  return url as GenerateResponse
})
