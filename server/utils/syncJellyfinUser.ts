import { useDrizzle, tables, eq } from './drizzle'

export async function getUserPaymentRole(userId: string): Promise<string | null> {
  const db = useDrizzle()
  const user = await db.select().from(tables.jellyfinUsers)
    .where(eq(tables.jellyfinUsers.id, userId)).get()
  return user?.paymentRole || null
}

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
    let paymentRole = localUser?.paymentRole || null
    const isAdmin = jellyfinUser.Policy?.IsAdministrator ? 1 : 0
    // If user is admin and paymentRole is not Admin, set to Admin
    if (isAdmin) {
      if (paymentRole !== 'Admin') paymentRole = 'Admin'
    } else {
      // If paymentRole is not set, set to Free
      if (!paymentRole) paymentRole = 'Free'
    }
    const userData = {
      id: userId,
      userName: jellyfinUser.Name,
      avatarUrl: jellyfinUser.PrimaryImageTag
        ? `/Users/${userId}/Images/Primary?tag=${jellyfinUser.PrimaryImageTag}`
        : null,
      enableAutoLogin: !!jellyfinUser.EnableAutoLogin,
      lastLoginDate: jellyfinUser.LastLoginDate,
      lastActivityDate: jellyfinUser.LastActivityDate,
      lastSynced: now,
      isAdmin: isAdmin,
      isDisabled: jellyfinUser.Policy?.IsDisabled ? 1 : 0,
      paymentRole
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
