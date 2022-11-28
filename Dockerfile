#FROM node:16.14.2-alpine as build-stage
FROM node:16.14.2-alpine

ARG NODE_ENV

ENV NODE_ENV "$NODE_ENV"

RUN npm --version && apk add --no-cache \
    autoconf \
    automake \
    bash \
    build-base \
    ca-certificates \
    curl \
    file \
    g++ \
    gcc \
    git \
    lcms2-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm \
    wget \
    zlib-dev \
    nano

# Installing dependencies:
WORKDIR /app
COPY package.json /app/

# Creating folders, and files for a project:
COPY . /app
# We do not need to tweak this command, `$NODE_ENV` does it for us.
RUN npm install

RUN npm run build

EXPOSE 3000

RUN ls -lah /app

CMD npm run start


#FROM nginx:latest
#
#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#
#COPY --from=build-stage /app/.next /usr/share/nginx/html/_next
#EXPOSE 8080
#CMD ["nginx", "-g", "daemon off;"]
