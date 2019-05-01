FROM node:8.9.4-alpine

WORKDIR /app

RUN npm init -y && npm install -g --save typescript
RUN npm install --save-dev @types/node ts-node ts-node-dev jest @types/jest ts-jest
