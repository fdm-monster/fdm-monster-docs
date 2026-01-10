#!/usr/bin/env bash
# ==============================================================================
# FDM Monster mDNS configuration helper.
# ==============================================================================
#
# Copyright (c) 2026 FDM Monster
#
# This script is provided "AS IS", without warranty of any kind, express or implied,
# including but not limited to the warranties of merchantability, fitness for a
# particular purpose, and noninfringement.
#
# In no event shall FDM Monster be liable for any claim, damages, or other liability,
# whether in an action of contract, tort, or otherwise, arising from, out of, or in
# connection with the script or the use or other dealings in the script.
#
# Use at your own risk.
# 

if [ "$#" -ne 6 ]; then
cat<<-EOH
  FDM Monster macvlan setup helper
   $0 <name> <interface> <network> <subnet> <gateway> <IP>

  This script creates the docker macvlan bridge network and a 
  base docker compose files for you.

   name      -> the name for the docker bridge
   interface -> the host interface the bridge will bind too (ex eth0)
   network   -> the network address in cidr notation (ex 192.168.1.0/24)
   aubnet    -> the aubnet in cidr available for the bridge (ex 192.168.1.240/28)
   gateway   -> the network subnet gateway address (ex 192.168.1)
   IP        -> the IP address from the subnet to assign to the container (ex 192.168.1.241)

  The docker-compose file will be named VERIFY_docker-compose.yml. Please review the file
  before use. The file should be renamed to something meaningful for your install.


EOH
  exit
else
cat << EOD
  Docker network command:
     docker network create -d macvlan --subnet=${3} --ip-range=${4} --gateway=${5} -o parent=${2} ${1}

EOD
echo -n "  execute (y/N)? "
read -rn 1 resp
echo

if [[ "$resp" == "y" || "$resp" == "Y" ]]
then
   docker network create -d macvlan --subnet=${3} --ip-range=${4} --gateway=${5} -o parent=${2} ${1}
else
  echo "  Please make sure you have the needed mavlan brige created."
fi

echo -e "\n  creating VERIFY_docker-compose.yml"

cat<< EOC > VERIFY_docker-compose.yml
# docker build --platform linux/amd64,linux/arm64 -t 1.5.0-alpha . -f .\docker\Dockerfile-mdns
# This section requires an explict docker network that allows the container to
#  utilize an IP directly on the host interface. Reference macvlan setup at
#  https://docs.docker.com/engine/network/drivers/macvlan/ for details
fdm-monster-mdns:
  container_name: fdm-monster-mdns
  image: fdmmonster/fdm-monster:2.0.0-mdns
  restart: unless-stopped
  environment:
    - SERVER_PORT=80
  deploy:
    restart_policy:
      delay: 5s
      #max_attempts: 3
      window: 120s
  networks:
    ${1}: # rename to mach your config option below
      ipv4_address: ${6} # dhcp is available. Refer to docker documentation
  volumes:
    - fdmm-media:/app/media
    - fdmm-database:/app/database

volumes:
  fdmm-media:
    name: fdmm-media
  fdmm-database:
    name: fdmm-database

networks:
  ${1}:   # edit to suite as this is internal config
    external: true
    name: ${1} # must match your macvlan bridge name

EOC

cat << EOM
  complete

  Enjoy FDM Monster.
    Docs    > https://docs.fdm-monster.net/docs
    Discord > https://discord.gg/mwA8uP8CMc
    GitHub  > https://github.com/fdm-monster/fdm-monster

EOM
fi
