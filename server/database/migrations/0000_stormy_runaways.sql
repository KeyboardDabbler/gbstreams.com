CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`user_name` text NOT NULL,
	`avatar_url` text,
	`enable_auto_login` integer NOT NULL,
	`last_login_date` text,
	`last_activity_date` text,
	`last_synced` integer
);
