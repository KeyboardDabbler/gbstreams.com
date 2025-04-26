import { sqliteTable, AnySQLiteColumn, numeric, text, integer } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const playbackActivity = sqliteTable("PlaybackActivity", {
	dateCreated: numeric("DateCreated").notNull(),
	userId: text("UserId"),
	itemId: text("ItemId"),
	itemType: text("ItemType"),
	itemName: text("ItemName"),
	playbackMethod: text("PlaybackMethod"),
	clientName: text("ClientName"),
	deviceName: text("DeviceName"),
	playDuration: integer("PlayDuration"),
});

export const userList = sqliteTable("UserList", {
	userId: text("UserId"),
});

