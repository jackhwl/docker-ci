# Dive Into Docker!
# Manipulating Containers with the Docker Client
  * ## overiding default commands
    * docker run busybox echo hi there
    * docker run busybox ls
  * ## Listing Running Containers
    * docker ps
    * docker ps --all
  * ## Container Lifecycle
    * docker run = docker create + docker start
    * docker create hello-world
    * docker start containerId
  * ## Restarting Stopped Containers
    * docker ps --all
    * docker start -a containerId