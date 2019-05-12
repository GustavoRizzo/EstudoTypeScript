# Stage 0, based on Node.js
FROM node:lastet as node
WORKDIR /app
COPY ./ /app/
RUN npm install
Run npm run build -- --prod

# Stage 1, based on Nginx
FROM niginx:alpine
COPY --from=node /app/dist/website /usr/share/nginx/html
