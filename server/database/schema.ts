import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const jellyfinUsers = sqliteTable('users', {
  id: text('id').primaryKey(),
  userName: text('user_name').notNull(),
  avatarUrl: text('avatar_url'),
  enableAutoLogin: integer('enable_auto_login', { mode: 'boolean' }).notNull(),
  lastLoginDate: text('last_login_date'),
  lastActivityDate: text('last_activity_date'),
  lastSynced: integer('last_synced')
})
