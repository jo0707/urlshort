import { defineMongooseModel } from "#nuxt/mongoose"

export const UrlModel = defineMongooseModel<IUrl>("Url", {
  url: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
  },
})
