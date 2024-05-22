#!/usr/bin/env bash

source .env

error_message () {
          echo -e "${RED}Command not found ..."
          echo -e ""
          echo -e "${WHITE}List of commands:"
          echo -e ""
          echo -e "${GREEN}start                      ${WHITE}Create and start containers"
          echo -e "${GREEN}stop                       ${WHITE}Stop running containers"
          echo -e "${GREEN}down                       ${WHITE}Stop and remove containers & networks"
          echo -e "${GREEN}build                      ${WHITE}Stop and remove containers & networks + build or rebuild services"
          echo -e "${GREEN}logs                       ${WHITE}View output from containers"
          echo -e ""
          echo -e "${GREEN}backend restart            ${WHITE}Restart backend service container"
          echo -e "${GREEN}backend logs               ${WHITE}View output from backend container"
          echo -e "${GREEN}backend bash               ${WHITE}Execute /bin/sh command in backend container"
          echo -e "${GREEN}backend npm                ${WHITE}Execute npm command in backend container"
          echo -e "${GREEN}backend npx                ${WHITE}Execute npx command in backend container"
          echo -e ""
          echo -e "${GREEN}frontend restart           ${WHITE}Restart frontend service container"
          echo -e "${GREEN}frontend logs              ${WHITE}View output from frontend container"
          echo -e "${GREEN}frontend bash              ${WHITE}Execute /bin/sh command in frontend container"
          echo -e "${GREEN}frontend npm               ${WHITE}Execute npm command in frontend container"
          echo -e "${GREEN}frontend npx               ${WHITE}Execute npx command in frontend container"
          echo -e ""
}


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

backend|frontend)
    case $2 in
      restart)
        "${DOCKER_COMPOSE[@]}" restart $1
        ;;

      logs)
        "${DOCKER_COMPOSE[@]}" logs -f $1
        ;;

      bash)
        "${DOCKER_COMPOSE[@]}" exec $1 /bin/sh
        ;;

      npm)
        "${DOCKER_COMPOSE[@]}" run --rm $1 npm "${@:3}"
        ;;

      npx)
        "${DOCKER_COMPOSE[@]}" run --rm $1 npx "${@:3}"
        ;;

      *)
        error_message
        ;;
      esac
      ;;
*)
  error_message
  ;;
esac
