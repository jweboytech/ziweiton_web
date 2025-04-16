#!/bin/bash

PORT=3000
PROJECT_NAME=ziviton_web
IMAGE_NAME=jweboy/$PROJECT_NAME
VERSION=latest
CONTAINER=$(docker container ls -a | grep $PROJECT_NAME | awk '{ print $1 }')

docker build -f Dockerfile -t=$IMAGE_NAME:$VERSION .

if [ $CONTAINER ]; then
    echo "$PROJECT_NAME is running..."
    docker container rm $CONTAINER -f
fi

docker run --name $PROJECT_NAME -itd --restart=always -p $PORT:$PORT $IMAGE_NAME:$VERSION


# docker push $IMAGE_NAME