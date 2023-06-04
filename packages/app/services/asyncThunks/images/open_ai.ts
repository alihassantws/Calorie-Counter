import { createAsyncThunk } from '@reduxjs/toolkit'
import openAi from './openAi'

interface generateQueryType {
  prompt: string
  presetString?: string
  resolution?: '256x256' | '512x512' | '1024x1024'
}

export const generateImagesThunk = createAsyncThunk(
  'images/generate',
  async (generateQuery: generateQueryType, { rejectWithValue }) => {
    const { prompt, presetString, resolution } = generateQuery

    try {
      const response = await openAi.generateImage({
        prompt: `${prompt} ,${presetString}`,
        resolution,
      })
      return { data: response.data, prompt }
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  }
)
