-- SCRIPT SQL donné à titre indicatif. Les scripts JS ont le même effet --

BEGIN;

DROP TABLE IF EXISTS "pokemon", "type", "team", "pokemon_type", "team_pokemon";

CREATE TABLE "pokemon" (
  "id" INT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  "name" VARCHAR(255) NOT NULL UNIQUE,
  "hp" INT NOT NULL,
  "atk" INT NOT NULL,
  "def" INT NOT NULL,
  "atk_spe" INT NOT NULL,
  "def_spe" INT NOT NULL,
  "speed" INT NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);


CREATE TABLE "type" (
  "id" int PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  "name" VARCHAR(255) NOT NULL,
  "color" VARCHAR(7) NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);


CREATE TABLE "team" (
  "id" int PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ 
);


CREATE TABLE "pokemon_type" (
  "id" int PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  "pokemon_id" int NOT NULL REFERENCES "pokemon"("id"),
  "type_id" int NOT NULL REFERENCES "type"("id"),
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);


CREATE TABLE "team_pokemon" (
  "id" int PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  "pokemon_id" int NOT NULL REFERENCES "pokemon"("id"),
  "team_id" int NOT NULL REFERENCES "team"("id"),
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ
);


COMMIT;