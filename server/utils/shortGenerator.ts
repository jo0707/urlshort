const chars = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"]

export async function randomUrl() {
  let short = getRandomString(5)
  let searchUrlModel = await UrlModel.findOne({ short }).exec()

  while (searchUrlModel != null) {
    short = getRandomString(5)
    searchUrlModel = await UrlModel.findOne({ short }).exec()
  }

  return short
}

function getRandomString(length: number = 5) {
  return [...Array(length)].map(() => chars[Math.floor(Math.random() * chars.length)]).join("")
}
