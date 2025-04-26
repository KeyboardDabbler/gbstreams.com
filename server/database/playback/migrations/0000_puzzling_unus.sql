-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `PlaybackActivity` (
	`DateCreated` numeric NOT NULL,
	`UserId` text,
	`ItemId` text,
	`ItemType` text,
	`ItemName` text,
	`PlaybackMethod` text,
	`ClientName` text,
	`DeviceName` text,
	`PlayDuration` integer
);
--> statement-breakpoint
CREATE TABLE `UserList` (
	`UserId` text
);

*/