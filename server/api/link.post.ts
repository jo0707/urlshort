import { UrlModel } from "../models/url"
import { LinkResponse } from "~/types/response/linkResponse"
import { LinkRequest } from "~/types/request/linkRequest"

export default defineEventHandler(async (event) => {
  const body: LinkRequest = await readBody(event)

  if (!body.short) {
    throw createError({
      statusCode: 400,
      statusMessage: "No URL provided",
    })
  }

  let findResult = await UrlModel.findOne({ short: body.short }).exec()

  if (findResult == null) {
    throw createError({
      statusCode: 404,
      statusMessage: "Short URL not found",
    })
  }

  const response: LinkResponse = {
    url: findResult.url,
    short: findResult.short,
  }

  return response
})
