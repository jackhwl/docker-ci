docker build -t my-node-app .     
docker run --init --rm -it -p 4044:4000 my-node-app whoami
