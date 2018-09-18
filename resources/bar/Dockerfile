FROM node:8-alpine

WORKDIR /app

COPY package.json yarn.lock /app/
COPY ./src /app/src/

RUN yarn install --pure-lockfile && \
    yarn cache clean

ENTRYPOINT ["yarn"]
CMD ["start"]
