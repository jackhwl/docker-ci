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
