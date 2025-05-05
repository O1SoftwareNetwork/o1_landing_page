-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

COMMENT ON SCHEMA public IS 'standard public schema';

-- DROP SEQUENCE public.project_id_seq;

CREATE SEQUENCE public.project_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.project_id_seq OWNER TO postgres;
GRANT ALL ON SEQUENCE public.project_id_seq TO postgres;

-- DROP SEQUENCE public.testimonials_id_seq;

CREATE SEQUENCE public.testimonials_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.testimonials_id_seq OWNER TO postgres;
GRANT ALL ON SEQUENCE public.testimonials_id_seq TO postgres;
-- public.projects definition

-- Drop table

-- DROP TABLE public.projects;

CREATE TABLE public.projects (
	id int4 DEFAULT nextval('project_id_seq'::regclass) NOT NULL,
	title varchar(150) NOT NULL,
	github_url varchar(300) NULL,
	description varchar(500) NULL,
	status int4 DEFAULT 1 NULL,
	CONSTRAINT project_pk PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.projects OWNER TO postgres;
GRANT ALL ON TABLE public.projects TO postgres;


-- public.testimonials definition

-- Drop table

-- DROP TABLE public.testimonials;

CREATE TABLE public.testimonials (
	id serial4 NOT NULL,
	"text" varchar(500) NULL,
	topic varchar(100) NULL,
	email varchar(100) NULL,
	projectid int4 NULL,
	CONSTRAINT testimonials_pk PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.testimonials OWNER TO postgres;
GRANT ALL ON TABLE public.testimonials TO postgres;




-- Permissions

GRANT ALL ON SCHEMA public TO pg_database_owner;
GRANT USAGE ON SCHEMA public TO public;