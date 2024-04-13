import { ref, computed } from 'vue'
import { SpaceProviderType, SpaceProvider } from './ZodTypes'
import { useFetch } from '@vueuse/core'

export async function fetchData(q: string | null): Promise<SpaceProviderType | null> {
  if (!q) q = ''
  const { data } = await useFetch<string>(
    `https://spaceprovider.up.railway.app/api/v1?q=${q}&page=1&limit=10`
  ).get()
  // if (!data) throw new Error('No data found')
  return SpaceProvider.parse(JSON.parse(data.value ?? ''))
}
