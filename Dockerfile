FROM nginx:1.23.4

#ENV RABBITMQ_DEFAULT_PASS admin
#COPY ssl/ /etc/nginx/ssl
COPY src/ /www/dist
COPY nginx.conf /etc/nginx/nginx.conf