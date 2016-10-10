# Link Shortener

Link Shortener app built using React on the front end, Redux for app state management, Postgres for persistence, and an Express server for routing. Docker is also used to bring up the postgres database with configured table and prepopulated dummy row entry.

## Prerequisites
- Docker
- Node > 6.0

## Running the app

```
./bootstrap_pg.sh
npm i
npm run dev
```



## Building Server/Client

The client and server artifacts are easily built using a few different
npm scripts:

| script       | effect                                                                                     |
|--------------|--------------------------------------------------------------------------------------------|
| build        | Build both client and server for a production environment                                  |
| build:client | Build the client files                                                                     |
| build:server | Build the server files                                                                     |
| dev          | Watch the various entries for changes and runs the server for local development            |
| watch:client | Build the client files and watch for changes                                               |
| watch:server | Build the server files and watch for changes                                               |
