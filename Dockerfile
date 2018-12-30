# BUILD
FROM node:10 as builder

RUN mkdir -p /usr/src/app

WORKDIR /usr/share/app

ENV PATH /usr/share/app/node_modules/.bin:$PATH

COPY . /usr/share/app
RUN yarn install --production
RUN yarn build

# production
FROM nginx:1.15.5-alpine

# Create a non-privilleged user that we'll use to run nginx during the build
RUN adduser -D user

COPY nginx /etc/nginx

# Allow all users to write to /var/cache/nginx
RUN chmod -Rc a+w /var/cache/nginx

 # Allow all users to write to /run (for nginx.pid files)
RUN chmod -c a+w /run

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Switch to our user
USER user

RUN nginx -t

# Remove the created nginx.pid file
RUN rm -v /var/run/nginx.pid

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]