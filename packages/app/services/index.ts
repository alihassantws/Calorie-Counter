import axios from 'axios'

import { Config } from 'app/constants/config'

export const Axios = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
