DROP schema if EXISTS master cascade;

CREATE schema if NOT EXISTS master;

CREATE TABLE
    master.users (
        id uuid PRIMARY key,
        email text NOT NULL UNIQUE,
        password text NOT NULL,
        created timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        modified timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
