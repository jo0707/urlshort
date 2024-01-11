import { allowedChars } from "~/consts"

export function isValidUrl(s?: string) {
  if (!s) return false

  try {
    new URL(s)
    return true
  } catch (err) {
    return false
  }
}

export function isValidShort(s?: string) {
  if (!s) return false

  for (const c of s) {
    console.log(allowedChars.includes(c))

    if (!allowedChars.includes(c)) return false
  }

  return true
}
