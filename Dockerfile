# Stage 1: Build app
FROM node:10 as react-animedex-build
WORKDIR /app
ENV PATH=$PATH:/node_modules/.bin
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn run build

# Stage 2: Deploy and Serve
FROM node:10 as react-animedex-server
RUN yarn global add serve
WORKDIR /app
COPY --from=react-animedex-build /app/build .
EXPOSE 80
CMD ["serve", "-l", "80", "-s", "."]
