https://btholt.github.io/complete-intro-to-containers/chroot
# Introduction
# Containers
* ## chroot
docker run -it --name docker-host --rm --privileged ubuntu:bionic
* ## Namespaces
apt-get update
apt-get install debootstrap -y
debootstrap --variant=minbase bionic /better-root
unshare --mount --uts --ipc --net --pid --fork --user --map-root-user chroot /better-root bash
* ## cgroups
apt-get install -y cgroup-tools htop
cgcreate -g cpu,memory,blkio,devices,freezer:/sanbox
unshare --mount --uts --ipc --net --pid --fork --user --map-root-user chroot /better-root bash

# Docker
* ## Getting Set Up with Docker
   docker ps


Windows Install 
wsl -l