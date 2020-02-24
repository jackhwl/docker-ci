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
  * ## Removing Stopped Containers
    * docker system prune
  * ## Retrieving Log Outputs
    * docker logs containerId
  * ## Stopping Containers
    * docker stop containerId after 10 seconds will fall back to kill command
    * docker kill containerId
  * ## Multi-Command Containers, Executing Commands in Running Containers, The Purpose of the IT Flag
    * docker run redis
    * docker exec -it containerId redis-cli
    * -it = -i -t
    * docker exec -it containerId sh
    * docker run -it imageName sh
# Building Custom Images Through Docker Server
  * ## Creating Docker Images
  * ## Building a Dockerfile
    * docker build .
    * docker run containerId
  * ## Dockerfile Teardown
  * ## What's a Base Image?up
  * ## The Build Process in Detail
  * ## A Brief Recap
  * ## Rebuilds with Cache
    * docker build -t jackhwl/redis:latest .
  * ## Manual Image Generation with Docker Commit
    * docker commit -c 'CMD ["redis-serer"]' containerId
    * docker build -t jackhwl/simpleweb .
    * docker run -p 8090:8090 jackhwl/simpleweb
# Docker Compose with Multiple Local Containers
  * docker-compose up
  * docker-compose up --build
  * docker-compose 
  * Restart Polices: no, always, on-failure, unless-stopped
  * docker-compose ps
# Creating a Production-Grade Workflow
  * docker build -f Dockerfile.dev .
  * docker run -p 3000:3000 -v /app/node_modules -v pwd:/app ContainerId
  * docker run -it frontend-web npm run test
  * docker exec -it frontend_web_1 npm run test
