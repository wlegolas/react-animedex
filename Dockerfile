# Stage 1: Build app
FROM node:10 as react-build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
# RUN make build-app-prod
COPY . .
RUN yarn run build

# Stage 2: Deploy and Serve
FROM node:10
RUN yarn global add serve
WORKDIR /app
COPY --from=react-build /app/build .
EXPOSE 80
CMD ["serve", "--listen 80", "-s", "."]
