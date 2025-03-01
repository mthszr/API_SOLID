import type { Environment } from 'vitest'

export default (<Environment>{
  name: 'prisma',
  transformMode: 'ssr', // Add this line - required by Vitest
  async setup() {
    console.log('Setup')

    return {
      teardown() {
        console.log('Teardown')
      },
    }
  },
})
