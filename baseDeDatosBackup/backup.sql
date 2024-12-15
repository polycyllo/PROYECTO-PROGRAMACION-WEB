PGDMP  !    6                |            ezzform_ewv6    16.4 (Debian 16.4-1.pgdg120+2)    16.4 V    ~           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16389    ezzform_ewv6    DATABASE     w   CREATE DATABASE ezzform_ewv6 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF8';
    DROP DATABASE ezzform_ewv6;
                ezzform_ewv6_user    false            �           0    0    DATABASE ezzform_ewv6    ACL     0   GRANT ALL ON DATABASE ezzform_ewv6 TO postgres;
                   ezzform_ewv6_user    false    3457            �           0    0    ezzform_ewv6    DATABASE PROPERTIES     5   ALTER DATABASE ezzform_ewv6 SET "TimeZone" TO 'utc';
                     ezzform_ewv6_user    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                ezzform_ewv6_user    false            �            1259    17636 
   formulario    TABLE     �   CREATE TABLE public.formulario (
    codformulario integer NOT NULL,
    codusuario integer NOT NULL,
    nombreformulario character varying(500),
    descripcion character varying(1000),
    activo boolean DEFAULT true
);
    DROP TABLE public.formulario;
       public         heap    ezzform_ewv6_user    false    5            �            1259    17635    formulario_codformulario_seq    SEQUENCE     �   CREATE SEQUENCE public.formulario_codformulario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.formulario_codformulario_seq;
       public          ezzform_ewv6_user    false    218    5            �           0    0    formulario_codformulario_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.formulario_codformulario_seq OWNED BY public.formulario.codformulario;
          public          ezzform_ewv6_user    false    217            �            1259    17651    formulariorespondido    TABLE     	  CREATE TABLE public.formulariorespondido (
    codformulariorespondido integer NOT NULL,
    codusuario integer NOT NULL,
    codformulario integer NOT NULL,
    fecharespuesta timestamp with time zone NOT NULL,
    tokenformulariousuario character varying(100)
);
 (   DROP TABLE public.formulariorespondido;
       public         heap    ezzform_ewv6_user    false    5            �            1259    17650 0   formulariorespondido_codformulariorespondido_seq    SEQUENCE     �   CREATE SEQUENCE public.formulariorespondido_codformulariorespondido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 G   DROP SEQUENCE public.formulariorespondido_codformulariorespondido_seq;
       public          ezzform_ewv6_user    false    220    5            �           0    0 0   formulariorespondido_codformulariorespondido_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.formulariorespondido_codformulariorespondido_seq OWNED BY public.formulariorespondido.codformulariorespondido;
          public          ezzform_ewv6_user    false    219            �            1259    17663    formulariotoken    TABLE       CREATE TABLE public.formulariotoken (
    codformulariotoken integer NOT NULL,
    codformulario integer NOT NULL,
    token character varying(255) NOT NULL,
    fechainicio timestamp with time zone,
    fechafin timestamp with time zone,
    creado timestamp with time zone
);
 #   DROP TABLE public.formulariotoken;
       public         heap    ezzform_ewv6_user    false    5            �            1259    17662 &   formulariotoken_codformulariotoken_seq    SEQUENCE     �   CREATE SEQUENCE public.formulariotoken_codformulariotoken_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public.formulariotoken_codformulariotoken_seq;
       public          ezzform_ewv6_user    false    222    5            �           0    0 &   formulariotoken_codformulariotoken_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public.formulariotoken_codformulariotoken_seq OWNED BY public.formulariotoken.codformulariotoken;
          public          ezzform_ewv6_user    false    221            �            1259    17689    opcion    TABLE     �   CREATE TABLE public.opcion (
    codrespuesta integer NOT NULL,
    codpregunta integer,
    textoopcion character varying(1000),
    esrespuesta boolean DEFAULT false
);
    DROP TABLE public.opcion;
       public         heap    ezzform_ewv6_user    false    5            �            1259    17688    opcion_codrespuesta_seq    SEQUENCE     �   CREATE SEQUENCE public.opcion_codrespuesta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.opcion_codrespuesta_seq;
       public          ezzform_ewv6_user    false    5    226            �           0    0    opcion_codrespuesta_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.opcion_codrespuesta_seq OWNED BY public.opcion.codrespuesta;
          public          ezzform_ewv6_user    false    225            �            1259    17677    pregunta    TABLE     �   CREATE TABLE public.pregunta (
    codpregunta integer NOT NULL,
    codformulario integer,
    pregunta character varying(1000),
    tipopregunta character varying(100)
);
    DROP TABLE public.pregunta;
       public         heap    ezzform_ewv6_user    false    5            �            1259    17676    pregunta_codpregunta_seq    SEQUENCE     �   CREATE SEQUENCE public.pregunta_codpregunta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.pregunta_codpregunta_seq;
       public          ezzform_ewv6_user    false    5    224            �           0    0    pregunta_codpregunta_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.pregunta_codpregunta_seq OWNED BY public.pregunta.codpregunta;
          public          ezzform_ewv6_user    false    223            �            1259    17702    respuestausuario    TABLE     �   CREATE TABLE public.respuestausuario (
    codrespuesta integer NOT NULL,
    codpregunta integer NOT NULL,
    idrespuesta integer,
    codformulariorespondido integer NOT NULL,
    respuestatexto character varying(2000)
);
 $   DROP TABLE public.respuestausuario;
       public         heap    ezzform_ewv6_user    false    5            �            1259    17701 !   respuestausuario_codrespuesta_seq    SEQUENCE     �   CREATE SEQUENCE public.respuestausuario_codrespuesta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.respuestausuario_codrespuesta_seq;
       public          ezzform_ewv6_user    false    5    228            �           0    0 !   respuestausuario_codrespuesta_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.respuestausuario_codrespuesta_seq OWNED BY public.respuestausuario.codrespuesta;
          public          ezzform_ewv6_user    false    227            �            1259    17724    rol    TABLE     �   CREATE TABLE public.rol (
    codrol integer NOT NULL,
    codusuario integer NOT NULL,
    nombrerol character varying(30) NOT NULL
);
    DROP TABLE public.rol;
       public         heap    ezzform_ewv6_user    false    5            �            1259    17723    rol_codrol_seq    SEQUENCE     �   CREATE SEQUENCE public.rol_codrol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.rol_codrol_seq;
       public          ezzform_ewv6_user    false    230    5            �           0    0    rol_codrol_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.rol_codrol_seq OWNED BY public.rol.codrol;
          public          ezzform_ewv6_user    false    229            �            1259    17736    token    TABLE     �   CREATE TABLE public.token (
    id integer NOT NULL,
    token character varying(255) NOT NULL,
    iduser integer NOT NULL,
    fechacreacion timestamp with time zone,
    expiresat timestamp with time zone
);
    DROP TABLE public.token;
       public         heap    ezzform_ewv6_user    false    5            �            1259    17735    token_id_seq    SEQUENCE     �   CREATE SEQUENCE public.token_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.token_id_seq;
       public          ezzform_ewv6_user    false    5    232            �           0    0    token_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.token_id_seq OWNED BY public.token.id;
          public          ezzform_ewv6_user    false    231            �            1259    17626    usuario    TABLE     _  CREATE TABLE public.usuario (
    codusuario integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    correoelectronico character varying(100) NOT NULL,
    fechadecreaciondecuenta timestamp with time zone,
    contrasenia character varying(100) NOT NULL,
    confirmado boolean DEFAULT false
);
    DROP TABLE public.usuario;
       public         heap    ezzform_ewv6_user    false    5            �            1259    17625    usuario_codusuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_codusuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuario_codusuario_seq;
       public          ezzform_ewv6_user    false    5    216            �           0    0    usuario_codusuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.usuario_codusuario_seq OWNED BY public.usuario.codusuario;
          public          ezzform_ewv6_user    false    215            �           2604    17639    formulario codformulario    DEFAULT     �   ALTER TABLE ONLY public.formulario ALTER COLUMN codformulario SET DEFAULT nextval('public.formulario_codformulario_seq'::regclass);
 G   ALTER TABLE public.formulario ALTER COLUMN codformulario DROP DEFAULT;
       public          ezzform_ewv6_user    false    218    217    218            �           2604    17654 ,   formulariorespondido codformulariorespondido    DEFAULT     �   ALTER TABLE ONLY public.formulariorespondido ALTER COLUMN codformulariorespondido SET DEFAULT nextval('public.formulariorespondido_codformulariorespondido_seq'::regclass);
 [   ALTER TABLE public.formulariorespondido ALTER COLUMN codformulariorespondido DROP DEFAULT;
       public          ezzform_ewv6_user    false    220    219    220            �           2604    17666 "   formulariotoken codformulariotoken    DEFAULT     �   ALTER TABLE ONLY public.formulariotoken ALTER COLUMN codformulariotoken SET DEFAULT nextval('public.formulariotoken_codformulariotoken_seq'::regclass);
 Q   ALTER TABLE public.formulariotoken ALTER COLUMN codformulariotoken DROP DEFAULT;
       public          ezzform_ewv6_user    false    221    222    222            �           2604    17692    opcion codrespuesta    DEFAULT     z   ALTER TABLE ONLY public.opcion ALTER COLUMN codrespuesta SET DEFAULT nextval('public.opcion_codrespuesta_seq'::regclass);
 B   ALTER TABLE public.opcion ALTER COLUMN codrespuesta DROP DEFAULT;
       public          ezzform_ewv6_user    false    225    226    226            �           2604    17680    pregunta codpregunta    DEFAULT     |   ALTER TABLE ONLY public.pregunta ALTER COLUMN codpregunta SET DEFAULT nextval('public.pregunta_codpregunta_seq'::regclass);
 C   ALTER TABLE public.pregunta ALTER COLUMN codpregunta DROP DEFAULT;
       public          ezzform_ewv6_user    false    224    223    224            �           2604    17705    respuestausuario codrespuesta    DEFAULT     �   ALTER TABLE ONLY public.respuestausuario ALTER COLUMN codrespuesta SET DEFAULT nextval('public.respuestausuario_codrespuesta_seq'::regclass);
 L   ALTER TABLE public.respuestausuario ALTER COLUMN codrespuesta DROP DEFAULT;
       public          ezzform_ewv6_user    false    228    227    228            �           2604    17727 
   rol codrol    DEFAULT     h   ALTER TABLE ONLY public.rol ALTER COLUMN codrol SET DEFAULT nextval('public.rol_codrol_seq'::regclass);
 9   ALTER TABLE public.rol ALTER COLUMN codrol DROP DEFAULT;
       public          ezzform_ewv6_user    false    229    230    230            �           2604    17739    token id    DEFAULT     d   ALTER TABLE ONLY public.token ALTER COLUMN id SET DEFAULT nextval('public.token_id_seq'::regclass);
 7   ALTER TABLE public.token ALTER COLUMN id DROP DEFAULT;
       public          ezzform_ewv6_user    false    231    232    232            �           2604    17629    usuario codusuario    DEFAULT     x   ALTER TABLE ONLY public.usuario ALTER COLUMN codusuario SET DEFAULT nextval('public.usuario_codusuario_seq'::regclass);
 A   ALTER TABLE public.usuario ALTER COLUMN codusuario DROP DEFAULT;
       public          ezzform_ewv6_user    false    216    215    216            m          0    17636 
   formulario 
   TABLE DATA           f   COPY public.formulario (codformulario, codusuario, nombreformulario, descripcion, activo) FROM stdin;
    public          ezzform_ewv6_user    false    218   �m       o          0    17651    formulariorespondido 
   TABLE DATA           �   COPY public.formulariorespondido (codformulariorespondido, codusuario, codformulario, fecharespuesta, tokenformulariousuario) FROM stdin;
    public          ezzform_ewv6_user    false    220   �q       q          0    17663    formulariotoken 
   TABLE DATA           r   COPY public.formulariotoken (codformulariotoken, codformulario, token, fechainicio, fechafin, creado) FROM stdin;
    public          ezzform_ewv6_user    false    222   �s       u          0    17689    opcion 
   TABLE DATA           U   COPY public.opcion (codrespuesta, codpregunta, textoopcion, esrespuesta) FROM stdin;
    public          ezzform_ewv6_user    false    226   v       s          0    17677    pregunta 
   TABLE DATA           V   COPY public.pregunta (codpregunta, codformulario, pregunta, tipopregunta) FROM stdin;
    public          ezzform_ewv6_user    false    224   P|       w          0    17702    respuestausuario 
   TABLE DATA           {   COPY public.respuestausuario (codrespuesta, codpregunta, idrespuesta, codformulariorespondido, respuestatexto) FROM stdin;
    public          ezzform_ewv6_user    false    228   %�       y          0    17724    rol 
   TABLE DATA           <   COPY public.rol (codrol, codusuario, nombrerol) FROM stdin;
    public          ezzform_ewv6_user    false    230   �       {          0    17736    token 
   TABLE DATA           L   COPY public.token (id, token, iduser, fechacreacion, expiresat) FROM stdin;
    public          ezzform_ewv6_user    false    232   ��       k          0    17626    usuario 
   TABLE DATA           �   COPY public.usuario (codusuario, nombre, apellido, correoelectronico, fechadecreaciondecuenta, contrasenia, confirmado) FROM stdin;
    public          ezzform_ewv6_user    false    216   w�       �           0    0    formulario_codformulario_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.formulario_codformulario_seq', 29, true);
          public          ezzform_ewv6_user    false    217            �           0    0 0   formulariorespondido_codformulariorespondido_seq    SEQUENCE SET     _   SELECT pg_catalog.setval('public.formulariorespondido_codformulariorespondido_seq', 22, true);
          public          ezzform_ewv6_user    false    219            �           0    0 &   formulariotoken_codformulariotoken_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public.formulariotoken_codformulariotoken_seq', 21, true);
          public          ezzform_ewv6_user    false    221            �           0    0    opcion_codrespuesta_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.opcion_codrespuesta_seq', 232, true);
          public          ezzform_ewv6_user    false    225            �           0    0    pregunta_codpregunta_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.pregunta_codpregunta_seq', 80, true);
          public          ezzform_ewv6_user    false    223            �           0    0 !   respuestausuario_codrespuesta_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.respuestausuario_codrespuesta_seq', 87, true);
          public          ezzform_ewv6_user    false    227            �           0    0    rol_codrol_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.rol_codrol_seq', 20, true);
          public          ezzform_ewv6_user    false    229            �           0    0    token_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.token_id_seq', 33, true);
          public          ezzform_ewv6_user    false    231            �           0    0    usuario_codusuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuario_codusuario_seq', 29, true);
          public          ezzform_ewv6_user    false    215            �           2606    17644    formulario formulario_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.formulario
    ADD CONSTRAINT formulario_pkey PRIMARY KEY (codformulario);
 D   ALTER TABLE ONLY public.formulario DROP CONSTRAINT formulario_pkey;
       public            ezzform_ewv6_user    false    218            �           2606    17656 .   formulariorespondido formulariorespondido_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.formulariorespondido
    ADD CONSTRAINT formulariorespondido_pkey PRIMARY KEY (codformulariorespondido);
 X   ALTER TABLE ONLY public.formulariorespondido DROP CONSTRAINT formulariorespondido_pkey;
       public            ezzform_ewv6_user    false    220            �           2606    17668 $   formulariotoken formulariotoken_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.formulariotoken
    ADD CONSTRAINT formulariotoken_pkey PRIMARY KEY (codformulariotoken);
 N   ALTER TABLE ONLY public.formulariotoken DROP CONSTRAINT formulariotoken_pkey;
       public            ezzform_ewv6_user    false    222            �           2606    17670 )   formulariotoken formulariotoken_token_key 
   CONSTRAINT     e   ALTER TABLE ONLY public.formulariotoken
    ADD CONSTRAINT formulariotoken_token_key UNIQUE (token);
 S   ALTER TABLE ONLY public.formulariotoken DROP CONSTRAINT formulariotoken_token_key;
       public            ezzform_ewv6_user    false    222            �           2606    17695    opcion opcion_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.opcion
    ADD CONSTRAINT opcion_pkey PRIMARY KEY (codrespuesta);
 <   ALTER TABLE ONLY public.opcion DROP CONSTRAINT opcion_pkey;
       public            ezzform_ewv6_user    false    226            �           2606    17682    pregunta pregunta_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.pregunta
    ADD CONSTRAINT pregunta_pkey PRIMARY KEY (codpregunta);
 @   ALTER TABLE ONLY public.pregunta DROP CONSTRAINT pregunta_pkey;
       public            ezzform_ewv6_user    false    224            �           2606    17707 &   respuestausuario respuestausuario_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.respuestausuario
    ADD CONSTRAINT respuestausuario_pkey PRIMARY KEY (codrespuesta);
 P   ALTER TABLE ONLY public.respuestausuario DROP CONSTRAINT respuestausuario_pkey;
       public            ezzform_ewv6_user    false    228            �           2606    17729    rol rol_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (codrol);
 6   ALTER TABLE ONLY public.rol DROP CONSTRAINT rol_pkey;
       public            ezzform_ewv6_user    false    230            �           2606    17741    token token_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.token
    ADD CONSTRAINT token_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.token DROP CONSTRAINT token_pkey;
       public            ezzform_ewv6_user    false    232            �           2606    17755 %   usuario usuario_correoelectronico_key 
   CONSTRAINT     m   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_correoelectronico_key UNIQUE (correoelectronico);
 O   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_correoelectronico_key;
       public            ezzform_ewv6_user    false    216            �           2606    17632    usuario usuario_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (codusuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            ezzform_ewv6_user    false    216            �           2606    17645 %   formulario formulario_codusuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.formulario
    ADD CONSTRAINT formulario_codusuario_fkey FOREIGN KEY (codusuario) REFERENCES public.usuario(codusuario) ON UPDATE CASCADE;
 O   ALTER TABLE ONLY public.formulario DROP CONSTRAINT formulario_codusuario_fkey;
       public          ezzform_ewv6_user    false    3262    216    218            �           2606    17657 9   formulariorespondido formulariorespondido_codusuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.formulariorespondido
    ADD CONSTRAINT formulariorespondido_codusuario_fkey FOREIGN KEY (codusuario) REFERENCES public.usuario(codusuario) ON UPDATE CASCADE;
 c   ALTER TABLE ONLY public.formulariorespondido DROP CONSTRAINT formulariorespondido_codusuario_fkey;
       public          ezzform_ewv6_user    false    3262    220    216            �           2606    17671 2   formulariotoken formulariotoken_codformulario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.formulariotoken
    ADD CONSTRAINT formulariotoken_codformulario_fkey FOREIGN KEY (codformulario) REFERENCES public.formulario(codformulario) ON UPDATE CASCADE;
 \   ALTER TABLE ONLY public.formulariotoken DROP CONSTRAINT formulariotoken_codformulario_fkey;
       public          ezzform_ewv6_user    false    218    222    3264            �           2606    17696    opcion opcion_codpregunta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.opcion
    ADD CONSTRAINT opcion_codpregunta_fkey FOREIGN KEY (codpregunta) REFERENCES public.pregunta(codpregunta) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.opcion DROP CONSTRAINT opcion_codpregunta_fkey;
       public          ezzform_ewv6_user    false    224    3272    226            �           2606    17683 $   pregunta pregunta_codformulario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pregunta
    ADD CONSTRAINT pregunta_codformulario_fkey FOREIGN KEY (codformulario) REFERENCES public.formulario(codformulario) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.pregunta DROP CONSTRAINT pregunta_codformulario_fkey;
       public          ezzform_ewv6_user    false    3264    224    218            �           2606    17718 >   respuestausuario respuestausuario_codformulariorespondido_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.respuestausuario
    ADD CONSTRAINT respuestausuario_codformulariorespondido_fkey FOREIGN KEY (codformulariorespondido) REFERENCES public.formulariorespondido(codformulariorespondido) ON UPDATE CASCADE ON DELETE CASCADE;
 h   ALTER TABLE ONLY public.respuestausuario DROP CONSTRAINT respuestausuario_codformulariorespondido_fkey;
       public          ezzform_ewv6_user    false    3266    220    228            �           2606    17708 2   respuestausuario respuestausuario_codpregunta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.respuestausuario
    ADD CONSTRAINT respuestausuario_codpregunta_fkey FOREIGN KEY (codpregunta) REFERENCES public.pregunta(codpregunta) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public.respuestausuario DROP CONSTRAINT respuestausuario_codpregunta_fkey;
       public          ezzform_ewv6_user    false    3272    224    228            �           2606    17713 2   respuestausuario respuestausuario_idrespuesta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.respuestausuario
    ADD CONSTRAINT respuestausuario_idrespuesta_fkey FOREIGN KEY (idrespuesta) REFERENCES public.opcion(codrespuesta) ON UPDATE CASCADE ON DELETE SET NULL;
 \   ALTER TABLE ONLY public.respuestausuario DROP CONSTRAINT respuestausuario_idrespuesta_fkey;
       public          ezzform_ewv6_user    false    226    228    3274            �           2606    17730    rol rol_codusuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_codusuario_fkey FOREIGN KEY (codusuario) REFERENCES public.usuario(codusuario) ON UPDATE CASCADE ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.rol DROP CONSTRAINT rol_codusuario_fkey;
       public          ezzform_ewv6_user    false    230    3262    216            �           2606    17742    token token_iduser_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.token
    ADD CONSTRAINT token_iduser_fkey FOREIGN KEY (iduser) REFERENCES public.usuario(codusuario) ON UPDATE CASCADE;
 A   ALTER TABLE ONLY public.token DROP CONSTRAINT token_iduser_fkey;
       public          ezzform_ewv6_user    false    216    232    3262                       826    16391     DEFAULT PRIVILEGES FOR SEQUENCES    DEFAULT ACL     X   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO ezzform_ewv6_user;
                   postgres    false            !           826    16393    DEFAULT PRIVILEGES FOR TYPES    DEFAULT ACL     T   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO ezzform_ewv6_user;
                   postgres    false                        826    16392     DEFAULT PRIVILEGES FOR FUNCTIONS    DEFAULT ACL     X   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO ezzform_ewv6_user;
                   postgres    false                       826    16390    DEFAULT PRIVILEGES FOR TABLES    DEFAULT ACL     U   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES TO ezzform_ewv6_user;
                   postgres    false            m   �  x��UMoI=�Es�,�D�9��Ċ/ q�K��l:���Û�o|�C(7.H�?��zƱe\����|��y�f���_���?��D�(��5�uŚ/9k��?H�Su����Mc�5;Tk��[�Ÿ&�y��'j:U�}8����i�TMgj��:��ݭb�E��%9-�_j�珼D��Q��S�|����%F���@:�:۠��\��S𺭩T�S� �D/|�+��0ցc�^�u�N�$EG\ ���nb�Dp���R���a���0>q�F��:�����pWj�m�.���.r���� ��c5=Q�������߾~�B���!���OƇ�&��O��������uN I����&�dd�x=?#�g
և�<�QF���+�N�IR�$X~�VW�T|Kg\"
k��aV�UN�YpZ.q'�.����J���[�l[3f�5-)��AO+qMM�C�kv�L�<F��YHLte�X��@���T�1�� ��&�r���K���~z��+�t����R��0�qO���>��0��ď���l���0(��T�Y&Y�dU��{'�z6S�S5�H4ծ���5>�46mN�&�qo-u�H������m�~$��I�Ї�ʮ�hYpҧi��f'[z�z,D��_�h,�����䥧�C�} �l���q���E���SQ@_f^�g��o��/��[�m�(Eل��uB�^�"-{Q��ӀΠ.QV~S��t��8"H�Ňt�K�B5TD�ŖC��
�Ń���B�y�Cz�!�ɼ�vp�v u���~r_Hp�&��HZ�O['�SE��!����k��uQ����5�����1���n�>٘<�}��Uw�o3���n���d�w;+mz��1C�lAGJkl�����F���é      o   B  x�m�9��0c�����I|�^��Ɂ�G������CFV �҆�8.�����~�V����g(�6qq�����Jan(�G}(��6�5wU	�Q)8pX�S�C?a�Yi��	=�U��	��<f�
cê8T1����S��06�fqU���}�I��UhpM`q�*��"�UN;����B|C��c	��W�@̺a.�{�s�I��C�A�X��K��tӺ,/qM9iׇ�8�F�gC��q���7,R<�0�R�B���މ��xԪ�$�������̆x������Ұ.��'�d{�P�R�皃��Y���̢��a��A�O�;����^���'7�~yyAx�J�V��	��0�F�3t��8%}�3��אw��X`��2t_7lZ��=g��������r��	�Y���r���m�1m�\*�+;�7Z|Ն|��{匜T��:�����w�%��'Z���|��k���D��&h����c�g�d�Q�Jj�*��Ds&���sA����d�Y�����M����wP֟���ъ&2Sy��.�{ehOG4���y� ����      q     x���M��0���)޾�!R$E�,����?Bi��@��&�I�/3
SI�K��&1�dc��D<%Q&$@�B޳�9����Lx�|���w����%NN\:�����Q|���jL�����K���S�'��2�-'QRM���Mhk0p_\�8���r��N�]�>Z.�~)�2���j��2%<)�c���A��9q9�P�dٸ�IDL�ʚd밦�g�-0 R����7�	|0�$w,{�`�Ť㦱/����U(�l��1�{y"�{yNf���Dy�J�D�rnJ���[�nPu��cd.��>,�?���|�>�/fdV�9�Qb�ˢEܨB�0ۇޏ���=���'�fȼ�nHW�0�?��Ԇ�$�q&���@c�6r�Ѩ7C��/�(39�����i	=�*�L�Ȗ�*ی�J�gS�ez�I��N��Le��͌����.�|�V<@#p�N�g�:�wU�1��VN��Z���K���&�4[�C�Qs���D�f�Y[�CIQ�Y>�R/Y�!����>n���5�      u   &  x�uVMo7=ӿ�� F��^�� jǉݜz�W��`�T�\7�)Л�=�S{��X�*�ݠ� ͼr8ܙ7��\�3��{Y[�:�T���*T?v��@^�Ei�8:ߋ>��a�7v��g��2ˠ���,<�\����ם	W~�`~�����������lpⷶ���������M��b�`��"���[3tN���T�?�����;������_���7���ձ��aa5~��k3�$�z�����D���C�1n�t�כ	�y�y�{ 9�6�t�G9�A���r�$J�M�k��sը�K7X=z�PnaM�(^��y����d����K��0D���~��r�`G���K�B��G��N�����!��Y܏���ȴ�,�Gܼ٧lV�{�o�8!�Y_9?>瞥���()VS�5�b>��@,��bK\Q�+f�"��+rJ��P����t�����G�"��	T:����kC��,�7�p�PEp��B���ŧ^��eF�p��5��ήPA��������5.]��T�0-��uBnl�Z�l�MC';�L�$��'�~�2'����f$�Gn�_�'�"��Ο�S��J���*�G�Z�n/���4Tμs���:�k�K=��wf0b�N�'����ٰ"ӊ��V*O�J5�z��򲺦z�Y�bn���[���t_���.�x�����1�^:0��2LQ¡ԚB��sJU�(�U?	��(a(�~�f(b(�A.9�
�-�5S�L���Z�������P��ߑ ]�ʐ=*���>61��g����� ���#�*�).�1��^\rj	�x�O=x%y�k�ކ�Y��se��Z�4��xT��������~�[}j�k0���of�*�j�^���dX1�����-QQ\�b���BS-Q�4��_���s��l��0���f\2�p��+�s�n��\P1!�[��T���E�q�R�	��5���S���3����&�й��C��WK�q�5m5B� �����ܧNް7q�5A5 Ϧ�?������-����O��D���~z3�7�C?���j$�b�	���aDB�m���<I���H;�K��6p��.o�����L��l-�d���PLrI���X�XS�Dl(�yY��|�I:&kKU��0�_z}M��V�P�:�[�
������	�4/X��߶D*����u9.w���k��0�b�VD���As"�,	5oi�$�{^�7=	d�9�G`I���M@t1q^��=��J�Q(0��Hn���/zc��E)4���c�1�H�í%*���_��(7H���7ndK��1��b\{��ZӯM��!ŵ�������n_T@ÔN��r̚���F�p��h�w�Y�r�{f{���}�����ݐ�'>��="��>:2��H��}�X����K�ޒ-nsrĬ��r<�!�|%ӣMץy��S�c"�x��)�!�)
�ô��
24f�`v%�:�k��Ԩ�d�K3���;���]��sISoa����[MN"??�����9      s   �  x�}Vˎ7]W��
D4��GU7�QGB��l"En����e��U�߰d�"b�&R��r�]��AX3.�s_��E��E��3�n{�I������g������G�I#�k���-ˤ\����G�t#M'Y���(|�Ȅr��v6���+���d]�u�}gg�l����U�{��陼�N(����D�+�+;[f���R��H�`�����X�Ȏk�N�W���T��q�kf���t�U����e�����
����u��-k��hc�;eP���}������A��C�8��~�s���W����99['���q��>7Jp8��$Q�1M��-�cҐI�rs�ඊ����<+����)�|�Y��f����u~�(���s�s��1a�G���k
T�)u�����yT��"�u��:b�x�c-��]Ҽ|I�G� � !�BT���ѳ�k����)�sh��W�����������u�	X�{倉������^AxK»�4��ѪFa��&	͝B�IlZ�JeE�$F�����h��KB_�v2AnVP+���U�.O��� &k̖:�fM0�Y׎�B�\�Jv*�[�y쐇���
Y��N�Ρ7Nm���{Հ%�����=	�W�K��5Ec�^����!u2��$/�Ia��jt }7qf;g�a�ِ�9�>�ƒ eR&��'�DsT7���@��hr�uZ�{��5��s�[Ҏ՚PN��J�|k�Bl$�O���'�A8#<{���_]$N6���6���Q�k�[>a������\��F�y>H�a @�~Ԓz��Chw�m�R{d��A:�e6_@K�4���������P�V��P�ev=�o#o�c ��7�܏""��1a�S�����uA~3P�s�Z�y�a����IJ�bAѼAmzY�tېW	�xf�T5qe�g��^��	��^��srg��ii� �����y�mA�3��!����s��h���N����M�T8��e&� 1e>�4B8�#h�-��G���]%������B�a{v ��l��.�t":���eq}�:��2����;�mY�C��j,��E4O(�-��>�X=}:aDB.1��'��qu��Og�^]�M�Q�:۠����r��ZG��ό&e4�:[5�9���Ǘ���d�у �\'l�Ni�=�RG=ꔯ���J[���H�f�tz<M$(�(�V$�Xf�V��rC7_cBk���l$HxAa��Tc�*�x����4����>v�$sR3�X�d��)-EE]�Fޏ6�'�XΣ�11Oݧ*z9$����N�(�ӵP;�c�g�*�S.H��.�I3.ݰ�0J D�<6�I�Z����[C��O��LX�a�E6 ��U�%+�h�M��2��H�$,VC��s�<=80�:��QF��37��
���W\�I&D�����)�fM�~�O����B3�n�_T�c����f�deu      w   �  x�=����0�g�)�^�(,Y���n�ԡ�]�h$v����P�?�"�dC#2��CY�I��$vUa9�����kɑ�͈y��n�2odŢ$���|��SOg��]���]����K��__�1�]շ�?���N��i]�i-z+����\�y�3��겕�����q�u�ˬ��^^˱�N3Y��B���a&����>�O���MO&��^a޾!�I�R�T)7ʄ����md�Y�����)��q��U���!�u�e�®����p�{B�C��X��<ڀ6��F8tFW8;��c�4tv�3w\�S�/��^Ψ޲&\5���̝�US8��#�䆒a�0�%�T0L��嘖ۮ�����v,a��V�x�x�|0�eӅ���å��^8]�X9�>5����Ά">[�
3���0��I�ێC�:a����᪖+�^�N!�wK6�^m�}$�l�M��坭�~��k|y'��Y)�}i��      y   c   x�5�9�0D�z|�q��� AA��)C�'�����Eā��u;��2�TPƱ�4��"A���z}2�	T�����W����C_����>��.M      {   �   x�u�1nAcx��֍�������0�eknw/"�V	�jX�������C���m���:J6ĺh�\���s�r/����bC���k��*C��U�#�P���*�N� G���Q:�̸Ql�a�����v��=dC��:��6�9��wN.[hɆ؄l�����@�*�#g
b-�W��m�x�v�4��k�?(6�f�w���8�����?��� Jz      k   T  x���I��H���_��Qe<H)%`&3l��Mx$�����W�Sju�'�	�����=7x*�$��C�C�K�_Q
`�x8�x�����9��G�:�d�S��R4�#�x���ON�ӟ�$	�_�O��O���e�����2����e���4o�I^��	-8Y?�R9��Z�7H��}p`���~F�?*�~#L����O�5!ύ8u�i���o��T����''ý!7��r�?,��Ƀ��<��x^y����<,��n�s��0{B�~
����>��	#^I�J���pfgHJ�^_���'�h賾�o,��qr�Nm�Qr�.������*��3����IT	 �r���7
#�����'%��K��&e c�gwp�^=�Ne�h�i�Щ��F��īȊ ؛� ȔQ�q .q�	R�=��W�.~p�H$ ,���h��n����0>��KܗѨ�6�����G!�8|��a9s�]&i���9;�G�0-�J���SS���� �D�Du$r#IbdA~j�9�򫣄_�+�Ѳ��F�`��ъ|�,V�[���݆�k�J�p^Ө�p�q�i��uA�9��� ��!�
���
���Ң`��?p�XP`X��l.l�S�f�����v�㭡���7��:roѹ]i�\!���3U-�A�4��e���5�Gp�Q.N
�{����7�j�	^��� �׫��Ԯ��c;�u�GG��5L�N۔H�Q�9�zw�s�OO����N��;���@�� /0��LGM��wCa9�kP���H I(Ko��q��VÕ �*���y:����B�{u�:�Cg���F���S���e�#'	��@Ej�WS'�x��)�U1���{���W�"Ë��A��ٚq�I�U7���q��wqz���S!�z�k��H1˹�ho�č�Z/^��qQ$�cP��+��Ͽ��?��,�p�h�wF�l�b<�
�8�p2�#z	.����:/�d�(��ކ��ar85�P��4/��+N���v�߂��VG��E_��HR�}�2�N8���ږ�}6T�Ґ�8I�����Ԡ:����XW{U�+�ӳ=;���:a?�H��0����T1@T�Y0Iŉ���߂J�cAx�RT�DX�\�,6zk$kP>�t6�义í�t�E�j��"�Y���,�<Ö�a9�?�T��Q�}��1zU|v ��$��{�W<�lzG�]�d8�+��K��yyx�q6IE���h3/��WkS龿�'s~s�qۈ�s�4j��dgoA^BD�RP���	�����#N�,#��;�s�g5�y�S{���c�G��1�����<�|��k�s��D���hި�󬗗��k�x�#�����H�w~]��羢�>X��!3��A�=�e����N�ז���H��m��OgiA>R����,0�˷��ܤ�=�;��f����!1� �N�P�S���-�(-Mx�1i׸���R��Y��w�(Ũ�Qz+��٦���^C����l/H��A�,� ٰ���Q��ؒ0E)/�E	�iP@��_&�TbNU~'=��l�:2�&��}i;�F�
�@�"�M�Is�<�)^����[�X?��,�w���0?~��k�yT     