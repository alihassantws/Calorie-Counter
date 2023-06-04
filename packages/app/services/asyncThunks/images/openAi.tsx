import { OPEN_AI_KEY } from 'app/constants/keys.local'
import { Configuration, OpenAIApi } from 'openai'

interface GenerateImageTypes {
  prompt: string
  numberOfImg?: number
  resolution?: '256x256' | '512x512' | '1024x1024'
}

class OpenAI {
  configuration: Configuration
  openai: OpenAIApi
  constructor() {
    this.configuration = new Configuration({
      apiKey: OPEN_AI_KEY,
    })
    this.openai = new OpenAIApi(this.configuration)
  }

  async generateImage({
    prompt,
    numberOfImg = 1,
    resolution = '512x512',
  }: GenerateImageTypes) {
    try {
      const res = await this.openai.createImage({
        prompt: prompt,
        n: numberOfImg,
        size: resolution,
      })
      return res?.data
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  generatePresets(ids, data) {
    const rawKeywords = data
      .filter(({ id }) => {
        return ids.includes(id)
      })
      .map(({ keywords }) => keywords?.toString())
    return rawKeywords.toString()
  }
}

export default new OpenAI()
