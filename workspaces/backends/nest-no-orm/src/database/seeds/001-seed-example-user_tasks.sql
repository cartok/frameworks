DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM seed_history WHERE file_name = '001-seed-example-user_tasks') THEN

    INSERT INTO user_tasks (text)
    VALUES
      ('Nam convallis ipsum nisi.'),
      ('Proin vulputate eget erat.'),
      ('Nulla a tellus a.');

    INSERT INTO seed_history (file_name) VALUES ('001-seed-example-user_tasks');
  END IF;
END$$;
