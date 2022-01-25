import axios from 'axios'
import { IResponse } from '~/models/common/response'

interface IPayloadJoin {
  classId: number
  attendeeFullName: string
  attendeeEmail: string
}

const client = () => axios.create({
  baseURL: process.env.API_URL
})

class Classes {
  static async available(): Promise<IResponse> {
    const res: IResponse = {
      status: false,
      data: null,
      message: ''
    }

    try {
      const { status, data, statusText } = await client().get('/available-classes')
      if (status === 200) {
        res.status = true
        res.data = data
      } else {
        res.message = statusText
      }

      return Promise.resolve(res)
    } catch (error: any) {
      res.message = error?.response?.data?.message
      return Promise.resolve(res)
    }
  }

  static async detail(id: number): Promise<IResponse> {
    const res: IResponse = {
      status: false,
      data: null,
      message: ''
    }

    try {
      const { status, data, statusText } = await client().get('/learning-class?id=' + id)
      if (status === 200) {
        res.status = true
        res.data = data
      } else {
        res.message = statusText
      }

      return Promise.resolve(res)
    } catch (error: any) {
      res.message = error?.response?.data?.message
      return Promise.resolve(res)
    }
  }

  static async join(payload: IPayloadJoin): Promise<IResponse> {
    const res: IResponse = {
      status: false,
      data: null,
      message: ''
    }

    try {
      const { status, data, statusText } = await client().post('/join-class', payload, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      })
      if (status === 200) {
        res.status = true
        res.data = data
      } else {
        res.message = statusText
      }

      return Promise.resolve(res)
    } catch (error: any) {
      res.message = error?.response?.data?.message
      return Promise.resolve(res)
    }
  }

}

export default Classes