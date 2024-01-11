import { allowedChars } from "~/consts"

export async function randomUrl(customShort: string | undefined = undefined) {
  let short = customShort ? customShort : getRandomString(5)
  let searchUrlModel = await UrlModel.findOne({ short }).exec()

  if (customShort && searchUrlModel != null) {
    throw createError({
      statusCode: 409,
      statusMessage: "Custom URL already exists, please try another one",
    })
  }

  while (searchUrlModel != null) {
    short = getRandomString(5)
    searchUrlModel = await UrlModel.findOne({ short }).exec()
  }

  return short
}

function getRandomString(length: number = 5) {
  return [...Array(length)].map(() => allowedChars[Math.floor(Math.random() * allowedChars.length)]).join("")
}
