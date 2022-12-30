FROM ruby:3.1.1 as builder

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

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install

COPY package*.json ./
RUN npm install

copy . /app/

# Copy Litestream configuration file & startup script.
COPY ./litestream.yml /etc/litestream.yml
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]



