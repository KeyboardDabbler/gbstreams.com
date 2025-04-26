import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import * as schema from '../database/playback/migrations/schema'

const sqlite = new Database('./playback_reporting.db')

export function usePlaybackDrizzle() {
  return drizzle(sqlite, { schema })
}

export { sql as playbackSql, eq as playbackEq, and as playbackAnd, or as playbackOr } from 'drizzle-orm'
export const playbackTables = schema
