DROP schema if EXISTS public cascade;

CREATE schema if NOT EXISTS public;

CREATE TABLE
    users (
        id uuid PRIMARY key,
        email text NOT NULL UNIQUE,
        password text NOT NULL,
        created timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        modified timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
