#!/usr/bin/env bash

source .env

DOCKER_COMPOSE=(docker-compose --project-name "${PROJECT_NAME}" -f docker-compose.yml -f "docker-compose-${ENVIRONMENT}.yml")
RED='\033[0;31m'
GREEN='\033[0;32m'
WHITE='\033[0;37m'

case $1 in
start)
  "${DOCKER_COMPOSE[@]}" up -d
  ;;

stop)
  "${DOCKER_COMPOSE[@]}" stop
  ;;

down)
  "${DOCKER_COMPOSE[@]}" down
  ;;

build)
  "${DOCKER_COMPOSE[@]}" down
  "${DOCKER_COMPOSE[@]}" build
  ;;

logs)
  "${DOCKER_COMPOSE[@]}" logs -f
  ;;

restartb|restart-backend)
  "${DOCKER_COMPOSE[@]}" restart backend
  ;;

logsb|logs-backend)
  "${DOCKER_COMPOSE[@]}" logs -f backend
  ;;

bashb|bash-backend)
  "${DOCKER_COMPOSE[@]}" exec backend /bin/sh
  ;;

npmb|npm-backend)
  "${DOCKER_COMPOSE[@]}" run --rm backend npm "${@:2}"
  ;;

*)
  echo -e "${RED}Command not found ..."
  echo -e ""
  echo -e "${WHITE}List of commands:"
  echo -e ""
  echo -e "${GREEN}start                     ${WHITE}Create and start containers"
  echo -e "${GREEN}stop                      ${WHITE}Stop running containers"
  echo -e "${GREEN}down                      ${WHITE}Stop and remove containers & networks"
  echo -e "${GREEN}build                     ${WHITE}Stop and remove containers & networks + build or rebuild services"
  echo -e "${GREEN}logs                      ${WHITE}View output from containers"
  echo -e "${GREEN}restartb, restart-backend ${WHITE}Restart backend service container"
  echo -e "${GREEN}logsb, logs-backend       ${WHITE}View output from backend container"
  echo -e "${GREEN}bashb, bash-backend       ${WHITE}Execute /bin/sh command in backend container"
  echo -e "${GREEN}npmb, npm-backend         ${WHITE}Execute npm command in backend container"
  echo -e ""
  ;;
esac
