import { env } from 'node:process'
import { createClient } from '@vercel/kv'

export default defineEventHandler(async (event) => {
  try {
    const { v } = getQuery(event)

    const KV_REST_API_URL = env.KV_REST_API_URL
    const KV_REST_API_TOKEN = env.KV_REST_API_TOKEN

    if (!KV_REST_API_URL || !KV_REST_API_TOKEN)
      throw new Error('missing env')

    const client = createClient({
      url: KV_REST_API_URL,
      token: KV_REST_API_TOKEN,
    })

    const count = await client.incr(`PV_${v}`)

    return {
      state: 'ok',
      message: count,
    }
  }
  catch (error) {
    return {
      state: 'error',
      message: String(error),
    }
  }
})
