#!/bin/bash

echo ""
echo "Bootstrapping postgres with correct database and empty table"
echo ""

echo ""
echo "Stopping all running containers"
echo ""
docker stop $(docker ps -a -q)

echo ""
echo "Bringing up PG docker container"
echo ""
CONTAINER_ID=`docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`


sleep 5

echo ""
echo "Bootstraping PG table"
echo ""
docker run -e PGPASSWORD=mysecretpassword -it --rm --link $CONTAINER_ID:postgres \
postgres psql -h postgres -U postgres -w -c 'CREATE TABLE links ( url varchar(80), token varchar(6), clicks int )'

echo ""
echo "Bootstraping PG table"
echo ""
docker exec $CONTAINER_ID psql -U postgres -c "insert into links values('http://www.google.com', 'asdfwe', 0)"

