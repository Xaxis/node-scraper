CREATE TABLE IF NOT EXISTS `Channels` (
    `id`            INTEGER NOT NULL PRIMARY KEY,
    `profile`       TEXT NOT NULL UNIQUE,
    `status`        TEXT DEFAULT 'active'
);