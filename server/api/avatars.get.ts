import { promises as fs } from 'fs'
import { join } from 'path'

const AVATAR_CATEGORIES = [
  'Netflix',
  'Playstation',
  'Pop Culture',
  'Steam',
  'Xbox 360',
  'Xbox One'
]

export default defineEventHandler(async (event) => {
  const avatarsDir = join(process.cwd(), 'public', 'avatars')
  let avatars: { category: string, filename: string, url: string }[] = []

  for (const category of AVATAR_CATEGORIES) {
    const categoryDir = join(avatarsDir, category)
    let files: string[] = []
    try {
      files = await fs.readdir(categoryDir)
    } catch (e) {
      continue
    }
    for (const filename of files) {
      if (!/\.(png|jpe?g|gif)$/i.test(filename)) continue
      avatars.push({
        category,
        filename,
        url: `/avatars/${encodeURIComponent(category)}/${encodeURIComponent(filename)}`
      })
    }
  }
  return avatars
})
