FROM mhart/alpine-node:12

WORKDIR /root

ENV NODE_VERSION 8.10.0

COPY . .

ENV PORT ${PORT}

RUN yarn --pure-lockfile
RUN yarn build


# # add node and npm to path so the commands are available
# ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
# ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

CMD ["yarn",  "start"]
