#!/usr/bin/env bash

source .env

DOCKER_COMPOSE=(docker-compose --project-name "${PROJECT_NAME}" -f docker-compose.yml)

case $1 in
start)
  "${DOCKER_COMPOSE[@]}" up -d
  ;;

stop)
  "${DOCKER_COMPOSE[@]}" stop
  ;;

build)
  "${DOCKER_COMPOSE[@]}" down
  "${DOCKER_COMPOSE[@]}" build
  ;;

down)
  "${DOCKER_COMPOSE[@]}" down
  ;;

logs)
  "${DOCKER_COMPOSE[@]}" logs -f
  ;;

*)
  echo "Command not found ..."
  echo $"Usage: $1 {start|stop|build|down|logs}"
  ;;
esac
