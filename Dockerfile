#installing node and python because node-sass and gyp are natively python
FROM node:slim
RUN apt-get update && \
    apt-get install -y --no-install-recommends python3 build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]