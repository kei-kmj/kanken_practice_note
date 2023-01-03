FROM ruby:3.1.1

ENV RAILS_ENV="production"
ENV NODE_ENV="production"

# Cloud Run default port 8080
EXPOSE 8080

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs

RUN apt-get update \
    && apt-get install -y --no-install-recommends sqlite3 \
    && apt-get -y clean \
    && rm -rf /var/lib/apt/lists/*

ADD https://github.com/benbjohnson/litestream/releases/download/v0.3.9/litestream-v0.3.9-linux-amd64-static.tar.gz /tmp/litestream.tar.gz

RUN tar -C /usr/local/bin -xzf /tmp/litestream.tar.gz

WORKDIR /app

COPY . /app



#COPY Gemfile /app/Gemfile
#COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install

RUN SECRET_KEY_BASE=placeholder bundle exec rails assets:precompile \
 && rm -rf node_modules tmp/cache
#
#COPY package*.json ./
#RUN npm install vite
#RUN bin/rails assets:precompile
#RUN npm run build

# Copy Litestream configuration file & startup script.
COPY ./litestream.yml /etc/litestream.yml
COPY entrypoint.sh /app/entrypoint.sh

RUN chmod +x /app/entrypoint.sh

ENV RAILS_SERVE_STATIC_FILES="true"
ENTRYPOINT ["/app/entrypoint.sh"]
#CMD ["rails", "server", "-b", "0.0.0.0","-p","8080"]



