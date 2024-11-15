# Build a production distribution

FROM cgr.dev/chainguard/node:latest AS setup

WORKDIR /app

COPY  --chown=node:node package*.json .

RUN npm install --clean

COPY  --chown=node:node . .

RUN npm run build

# Setup production dependecies

FROM setup AS production

WORKDIR /app

COPY --chown=node:node package*.json .

ENV NODE_ENV=production

RUN npm install --clean --production

COPY --from=setup --chown=node:node /app/.output ./.output

RUN npm prune --production

# Create a clean environment

FROM alpine AS runner

LABEL authors="botprzemek"

RUN apk add --update nodejs

WORKDIR /app

COPY --from=production --chown=node:node /app/.output ./.output

ENV NODE_ENV=production
ENV NITRO_PRESET=node_cluster

CMD ["node", ".output/server/index.mjs"]

EXPOSE 3000