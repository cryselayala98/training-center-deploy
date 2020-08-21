#-------------------------------------------------------------------------------#
# Frontend for UFPS Training Center                                             #
# Based on Alpine linux                                                         #
#-------------------------------------------------------------------------------#

# Pull base image
FROM nginx:alpine

# Container Basic Info 
MAINTAINER GERSON LAZARO
MAINTAINER MELISSA DELGADO

# Copy files to container
COPY trainingcenter2020.tk /etc/nginx/site-available

COPY . /usr/share/nginx/html
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d
RUN rm /usr/share/nginx/html/nginx.conf
RUN rm /usr/share/nginx/html/default.conf

RUN ln -s /etc/nginx/sites-available/trainingcenter2020.tk /etc/nginx/sites-enabled
#RUN rm/usr/share/nginx/html/trainingcenter2020.tk

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
