FROM nginx
MAINTAINER suizhi
LABEL by=front-substation-lifecycle name=base-product-vite-vue3 description="基础项目" version="1.0"
COPY ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
