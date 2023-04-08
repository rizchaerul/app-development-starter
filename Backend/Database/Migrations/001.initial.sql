DROP schema if EXISTS master cascade;

CREATE schema if NOT EXISTS master;

CREATE TABLE
    master.blobs (
        id uuid PRIMARY key,
        path text,
        base_64 text,
        content_type text NOT NULL,
        created timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        modified timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    master.users (
        id uuid PRIMARY key,
        blob_id uuid REFERENCES master.blobs,
        name text NOT NULL,
        email text NOT NULL UNIQUE,
        password text NOT NULL,
        created timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        modified timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
