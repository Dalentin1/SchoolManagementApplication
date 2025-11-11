import { config as loadEnv } from 'dotenv'
// Load environment variables explicitly when a Prisma config file exists.
// When Prisma detects a `prisma.config.ts`, it skips automatic `.env` loading,
// so we load it here to make env("...") in schema.prisma work.
loadEnv({ path: '.env' })

import { defineConfig } from '@prisma/config'

export default defineConfig({
  schema: './prisma/schema.prisma'
})
