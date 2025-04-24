import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'

export { sql, eq, and, or } from 'drizzle-orm'

import * as schema from '../database/schema'

export const tables = schema

const sqlite = new Database('./sqlite.db')

export function useDrizzle() {
  return drizzle(sqlite, { schema })
}

export type User = typeof schema.jellyfinUsers.$inferSelect
