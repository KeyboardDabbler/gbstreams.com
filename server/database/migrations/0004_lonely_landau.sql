CREATE TABLE `messages` (
	`id` text PRIMARY KEY NOT NULL,
	`sender_id` text NOT NULL,
	`receiver_id` text NOT NULL,
	`content` text NOT NULL,
	`timestamp` text NOT NULL,
	`is_read` integer DEFAULT false NOT NULL,
	`is_deleted` integer DEFAULT false NOT NULL
);
