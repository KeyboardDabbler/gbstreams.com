export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  if (!session?.user?.id) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  const body = await readBody(event)
  const { name, email, bio, avatar } = body

  const db = useDrizzle()

  if (email) {
    const existing = await db.select().from(tables.jellyfinUsers)
      .where(
        eq(tables.jellyfinUsers.email, email),
        (tables.jellyfinUsers.id !== session.user.id)
      ).get()
    if (existing) {
      throw createError({ statusCode: 409, message: 'Email already in use' })
    }
  }

  await db.update(tables.jellyfinUsers)
    .set({
      userName: name,
      email,
      bio,
      avatar
    })
    .where(eq(tables.jellyfinUsers.id, session.user.id))

  const user = await db.select().from(tables.jellyfinUsers)
    .where(eq(tables.jellyfinUsers.id, session.user.id)).get()
  return user
})
