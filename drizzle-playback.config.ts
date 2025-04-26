import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/database/playback_schema.ts',
  out: './server/database/playback/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: './playback_reporting.db'
  }
})
