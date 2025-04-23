ALTER TABLE `users` ADD `last_synced` integer;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `access_token`;