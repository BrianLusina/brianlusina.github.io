# BUILD
FROM node:10 as builder

RUN mkdir -p /usr/src/app

WORKDIR /usr/share/app

ENV PATH /usr/share/app/node_modules/.bin:$PATH

COPY . /usr/share/app
RUN yarn install
RUN yarn build:gatsby

# production
FROM nginx:latest

# remove default nginx config
RUN rm -rf /etc/nginx/conf.d

COPY nginx/conf.d /etc/nginx
COPY --from=builder /usr/share/app/public /usr/share/nginx/html

# test that nginx is running as expected
RUN nginx -t
# expose PORT 80
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]