FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE db
ENV MYSQL_USER test
ENV MYSQL_PASSWORD test

ADD setup.sql /docker-entrypoint-initdb.d
