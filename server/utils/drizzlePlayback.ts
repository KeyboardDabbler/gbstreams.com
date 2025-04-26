import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import * as schema from '../database/playback/migrations/schema'

const sqlite = new Database('./playback_reporting.db')

export function usePlaybackDrizzle() {
  return drizzle(sqlite, { schema })
}

export { sql, eq, and, or } from 'drizzle-orm'
export const tables = schema
