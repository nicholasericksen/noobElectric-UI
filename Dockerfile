From node:6.4.0
Maintainer Nicholas Ericksen

RUN apt-get update && apt-get install -y build-essential

# make this nginx
COPY . /app
WORKDIR /app
RUN npm install
#RUN npm install -g serve

#CMD webpack-dev-server --hot --inline
CMD /app/node_modules/.bin/webpack-dev-server --hot --inline --config /app/webpack.config.js --host 0.0.0.0
# In Production
#CMD serve -s /app/public

EXPOSE 8080
