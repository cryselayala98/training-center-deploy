
#!/bin/bash

echo Updating Training Center......
echo Pulling from Training-Center master branch....

sleep 1s

git pull origin master

echo Building and starting docker containers in the background...

sleep 1s

docker-compose up --build -d
