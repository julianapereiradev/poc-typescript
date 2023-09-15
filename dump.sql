--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.games (
    id integer NOT NULL,
    title text,
    platform text
);


--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.games VALUES (1, 'Mario Bros', 'Nintendo');
INSERT INTO public.games VALUES (2, 'Sonic', 'SEGA');
INSERT INTO public.games VALUES (3, 'FIFA 23', 'EA Sports');
INSERT INTO public.games VALUES (4, 'FIFA 22', 'EA Sports');
INSERT INTO public.games VALUES (5, 'FIFA 21', 'EA Sports');
INSERT INTO public.games VALUES (6, 'FIFA 20', 'EA Sports');
INSERT INTO public.games VALUES (7, 'FIFA 19', 'EA Sports');
INSERT INTO public.games VALUES (8, 'FIFA 18', 'EA Sports');
INSERT INTO public.games VALUES (9, 'FIFA 17', 'EA Sports');
INSERT INTO public.games VALUES (10, 'Novo jogo', 'Qualquer');
INSERT INTO public.games VALUES (13, 'Testando2', 'Testando1');
INSERT INTO public.games VALUES (12, 'atualizei', 'Platform atualizada');


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.games_id_seq', 15, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

