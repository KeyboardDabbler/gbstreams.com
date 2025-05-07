import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const jellyfinUsers = sqliteTable('users', {
  id: text('id').primaryKey(),
  userName: text('user_name').notNull(),
  email: text('email'),
  avatar: text('avatar'),
  bio: text('bio'),
  enableAutoLogin: integer('enable_auto_login', { mode: 'boolean' }).notNull(),
  lastLoginDate: text('last_login_date'),
  lastActivityDate: text('last_activity_date'),
  lastSynced: integer('last_synced'),
  isAdmin: integer('is_admin', { mode: 'boolean' }).notNull().default(false),
  isDisabled: integer('is_disabled', { mode: 'boolean' }).notNull().default(false),
  paymentRole: text('payment_role').notNull().default('Free')
})

export const messages = sqliteTable('messages', {
  id: text('id').primaryKey(),
  sender_id: text('sender_id').notNull(),
  receiver_id: text('receiver_id').notNull(),
  content: text('content').notNull(),
  timestamp: text('timestamp').notNull(),
  is_read: integer('is_read', { mode: 'boolean' }).notNull().default(false),
  is_deleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(false)
})
