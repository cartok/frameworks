CREATE TABLE IF NOT EXISTS seed_history (
    file_name TEXT PRIMARY KEY,
    applied_at TIMESTAMP DEFAULT NOW()
);
