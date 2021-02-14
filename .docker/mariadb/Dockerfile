FROM mariadb:10.1.26

RUN apt-get update
RUN apt-get install -y locales locales-all
ENV LC_ALL es_ES.UTF-8
ENV LANG es_ES.UTF-8
ENV LANGUAGE es_ES.UTF-8

ADD base-structure /docker-entrypoint-initdb.d
ADD versions /docker-entrypoint-initdb.d

RUN echo "sql-mode=\"ERROR_FOR_DIVISION_BY_ZERO,NO_ZERO_DATE,NO_ZERO_IN_DATE,NO_AUTO_CREATE_USER\"" >> /etc/mysql/conf.d/mariadb.cnf