import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import axiosTauriApiAdapter from 'axios-tauri-api-adapter'

class Asker {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create({ ...config, adapter: axiosTauriApiAdapter })
  }

  request(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: 'POST' })
  }
}

export default Asker
