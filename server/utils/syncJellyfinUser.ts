import { useDrizzle, tables, eq } from './drizzle'

export async function syncJellyfinUser(jellyfinUser: any) {
  const db = useDrizzle()
  const userId = jellyfinUser.Id
  const now = Date.now()
  const SYNC_INTERVAL_HOURS = 6
  const SYNC_INTERVAL_MS = SYNC_INTERVAL_HOURS * 60 * 60 * 1000

  const localUser = await db.select().from(tables.jellyfinUsers)
    .where(eq(tables.jellyfinUsers.id, userId)).get()

  const jellyfinLastLogin = new Date(jellyfinUser.LastLoginDate || 0).getTime()
  const jellyfinLastActivity = new Date(jellyfinUser.LastActivityDate || 0).getTime()
  const jellyfinLatest = Math.max(jellyfinLastLogin, jellyfinLastActivity)

  let needsSync = false
  if (!localUser) {
    needsSync = true
  } else {
    const lastSynced = localUser.lastSynced || 0
    if (
      now - lastSynced > SYNC_INTERVAL_MS ||
      jellyfinLatest > lastSynced
    ) {
      needsSync = true
    }
  }

  if (needsSync) {
    const userData = {
      id: userId,
      userName: jellyfinUser.Name,
      avatarUrl: jellyfinUser.PrimaryImageTag
        ? `/Users/${userId}/Images/Primary?tag=${jellyfinUser.PrimaryImageTag}`
        : null,
      enableAutoLogin: jellyfinUser.EnableAutoLogin ? 1 : 0,
      lastLoginDate: jellyfinUser.LastLoginDate,
      lastActivityDate: jellyfinUser.LastActivityDate,
      lastSynced: now,
      isAdmin: jellyfinUser.Policy?.IsAdministrator ? 1 : 0,
      isDisabled: jellyfinUser.Policy?.IsDisabled ? 1 : 0,
      paymentRole: localUser?.paymentRole || 'Free'
    }
    if (!localUser) {
      await db.insert(tables.jellyfinUsers).values(userData)
    } else {
      await db.update(tables.jellyfinUsers)
        .set(userData)
        .where(eq(tables.jellyfinUsers.id, userId))
    }
  }
}
