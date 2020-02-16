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
* ## Docker Images without Docker
   docker run -ti -v /var/run/docker.sock:/var/run/docker.sock --privileged --rm --name docker-host docker:18.06.1-ce
* ## Docker Images with Docker
    * docker run --interactive --tty alpine:3.10
    * cat /etc/issue
    * docker run -it alpine:3.10
    * docker run -it --name jack-vm alpine:3.10
    * docker run alpine:3.10 ls
    * docker run alpine:3.10 cat /etc/issue
    * docker run ubuntu:bionic cat /etc/issue
    * docker image ls
    * docker stop containerId
    * docker kill containerId
    * docker rm containerId
    * docker image prune 
    * docker run -it --detach ubuntu:bionic
    * docker attach containerNameOrid
* ## Node.js on Docker
    * docker run -it node:12-stretch
    * docker run -it node:12-stretch bash
* ## Tags
* ## Docker CLI
    * docker pull jturpin/hollywood
    * docker run -it jturpin/hollywood hollywood 
    * docker inspect node:12-stretch
    * docker pause constainerId
    * docker unpause constainerId
    * docker stop $(docker ps -q)
    * docker history node:12-stretch
    * docker info
    * docker rm containerId
    * docker rmi containerId
    * docker container prune
    * docker restart name
    * docker search python
# The Dockerfile
* ## Dockerfiles Preamble
    * docker build .
    * docker build --tag my-node-app .
    * docker build --tag my-node-app:1 .
Windows Install 
wsl -l