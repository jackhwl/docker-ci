## [linux-cli](http://bit.ly/linux-cli)
## [linux-cli](https://btholt.github.io/complete-intro-to-linux-and-the-cli/)
## [multipass](https://multipass.run/)

## Bash History
* reverse search Ctrl+R
* clear = ^L

## Signals
^C 
^D = logout
kill -l

## Editor
nano
VIM Escape  :w :q :qa!

# Files, Pipes, & Permissions
* less 
* more
* less --help
* man less
* cat   
* tail -f log.txt
* mkdir -p hi/my/name/is/jack
* touch: create or change lastModifiedTime
* rm file, rm -r folder 
* cp -R
* mv  
* tar
* {1..9} * ? \
* cat file1.txt 1> file2.txt
* cat file1.txt 1>> file2.txt
* cat non-existant-file.txt 2> error.txt
* cat a.txt > b.txt
* cat some-file.txt 2> /dev/null
* cat < newfile.txt
* grep "ls-error.txt" < ls.txt
* ps aux | grep "ps aux"
* yes > /dev/null &
* ps aux | grep "yes"
* kill -9 12335
* touch file{1..30}.txt
* yes | rm -i file*
* cat /etc/passwd
* sudo whoami
* sudo su
* exit
* sudo useradd wenlin
* sudo passwd wenlin
* su wenlin
* sudo usermod -aG sudo wenlin   add wenlin to sudo group
* sudo chown ubuntu:ubuntu /hello
* sudo chmod u=rw, g=rw, o=rw hello.txt
* sudo chmod 777 file.txt  
* sudo chmod +x hello.txt
* sudo chmod -w hello.txt

# Environments & Processes
  * echo $USER
  * vi ~/.bashrc
  * source ~/.bashrc 
  * vi .bash_profile

# Processes
  * sleep 10 &
  * ps
  * ps aux | less
  * ps aux | grep "ps"
  * sleep 1000
  * ^Z
  * jobs
  * bg 1
  * fg 1
  
* Exit codes & Process Operators
  * echo $?
  * touch status.txt && date >> status.txt && uptime >> status.txt
  * uptime
  * false
  * false || echo hi
  * true ; false ; echo hi

* Subcommands
  * echo I think $(whoami) is a really cool user
  * echo current date is $(date)
  * echo $(date +%x) - $(uptime) >> log.txt
  * echo hi `whoami`, how are you

# Networking & the Internet
  * multipass launch --name secondary
  * ssh-keygen -t rsa
  * ssh
  * sftp
  * Wget
  * wget https://raw.githubusercontent.com/btholt/bash2048/master/bash2048.sh
  * chmod +x bash2048.sh
  * ./bash2048.sh
  * curl https://raw.githubusercontent.com/btholt/bash2048/master/bash2048.sh > game.sh
  * python3 -m http.server 8000 --bind 0.0.0.0
  * multipass shell primary
  * curl -X POST http://192.168.0.2
  * curl -d "this is post body" http://192.168.0.2
  * -b cookies, -c cookie jar; -H header
  * curl .... | bash

# Package Management & APT Basics
  * aptitude
  * apt-get install
  * apt install
  * sudo !!
  * apt install lolcat
  * ls -lsah | lolcat
  * sudo apt autoremove
  * sudo apt update
  * apt list
  * apt list --upgradable
  * sudo apt full-upgrade
  * sudo apt remove lolcat
  * sudo snap install lolcat
  * sudo snap info node
  * sudo snap install --channel=14/stable --classic node

  # Shell Scripts
  * mkdir -p ~/temp
  * cd ~temp
  * touch file{1..10}.txt
  * echo done
  * source gen_files.sh
  * . gen_files.sh
  * bash gen_files.sh
  * #! /snap/bin/node
  * console.log('this is running from node.js')
