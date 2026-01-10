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

cat<<-EOH
  FDM Monster macvlan setup helper

  This script creates the docker macvlan bridge network and a 
  base docker compose files for you. You will need to know:

   name      -> the name for the docker bridge
   interface -> the host interface the bridge will bind to (ex eth0)
   network   -> the network address in cidr notation (ex 192.168.1.0/24)
   aubnet    -> the aubnet in cidr available for the bridge (ex 192.168.1.240/28)
                These are the IP addresses docker will asign to containers IF
                the container is not assigned a static IP at start. These IP
                address must be excluded from any DHCP scopes
   gateway   -> the network default gateway address (ex 192.168.1)
   IP        -> the IP address from the subnet to assign to the container (ex 192.168.1.241)
                The container does not support DHCP or DHCPE reservation at this time. 

  The docker-compose file will be named FDMM-mDNS-docker-compose.yml. Please review the file
  before use. The file should be renamed to something meaningful for your install.

EOH

echo -n "  Please enter the name to be used for the docker macvlan network: "
read name
echo -n "  Please enter the interface to bind the network to: "
read interface
echo -n "  Please enter the network in cidr notation: "
read network
echo -n "  Please enter the IP subnet in cdir notation that is dedicated to the $name bridge: "
read subnet
echo -n "  Please enter tha default gateway for $network: "
read gateway
echo -n "  Please enter the IP to assign to the FDM Monster container: "
read ip


cat << EOD
  Docker network command:
     docker network create -d macvlan --subnet=${network} --ip-range=${subnet} --gateway=${gateway} -o parent=${interface} ${name}

EOD

echo -n "  execute (y/N)? "
read -rn 1 resp
echo

if [[ "$resp" == "y" || "$resp" == "Y" ]]
then
   docker network create -d macvlan --subnet=${network} --ip-range=${subnet} --gateway=${gateway} -o parent=${interface} ${name}
else
  echo "  Please make sure you have the needed mavlan brige created."
fi


docker_compose=$(cat << EOC
# docker build --platform linux/amd64,linux/arm64 -t 1.5.0-alpha . -f .\docker\Dockerfile-mdns
# This section requires an explict docker network that allows the container to
#  utilize an IP directly on the host interface. Reference macvlan setup at
#  https://docs.docker.com/engine/network/drivers/macvlan/ for details
fdm-monster-mdns:
  container_name: fdm-monster-mdns
  image: fdmmonster/fdm-monster:latest-mdns
  restart: unless-stopped
  environment:
    - SERVER_PORT=80
  deploy:
    restart_policy:
      delay: 5s
      #max_attempts: 3
      window: 120s
  networks:
    ${name}: # rename to mach your config option below
      ipv4_address: ${ip} # dhcp is available. Refer to docker documentation
  volumes:
    - fdmm-media:/app/media
    - fdmm-database:/app/database

volumes:
  fdmm-media:
    name: fdmm-media
  fdmm-database:
    name: fdmm-database

networks:
  ${name}:   # edit to suite as this is internal config
    external: true
    name: ${name} # must match your macvlan bridge name

EOC
)

echo -e "  Here is the prepared docker-compose.yml\n============================\n\n"
echo -e "${docker_compose}"

echo -en "\n\n  Woould you like me to write the above to FDM-mDNS-docker-compose.yml? (y/N): "
read -rn 1 resp

if [[ "$resp" == "y" || "$resp" == "Y" ]]
then
	echo "${docker_compose}" > ./FDMM-mDNS-docker-compose.yml
	echo -e "  File written\n\n"
fi

cat << EOM


  To start your container execute:
    docker compose -f FDMM-mDNA-docker-compose.yml up -d

  Enjoy using FDM Monster.
    Docs    > https://docs.fdm-monster.net/docs
    Discord > https://discord.gg/mwA8uP8CMc
    GitHub  > https://github.com/fdm-monster/fdm-monster

EOM

