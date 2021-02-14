FROM php:7.4-apache

ENV DEBIAN_FRONTEND noninteractive

ENV HTTPD_PREFIX /usr/local/apache2
ENV PATH $HTTPD_PREFIX/bin:$PATH
RUN mkdir -p "$HTTPD_PREFIX" \
    && chown www-data:www-data "$HTTPD_PREFIX"
WORKDIR $HTTPD_PREFIX

RUN echo "file_uploads=On" >> /usr/local/etc/php/conf.d/uploads.ini \
 && echo "memory_limit=2048M" >> /usr/local/etc/php/conf.d/uploads.ini \
 && echo "upload_max_filesize=64M" >> /usr/local/etc/php/conf.d/uploads.ini \
 && echo "post_max_size=64M" >> /usr/local/etc/php/conf.d/uploads.ini \
 && echo "max_execution_time=180" >> /usr/local/etc/php/conf.d/uploads.ini \
 && echo "max_input_vars=10000" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "error_reporting-1" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "display_errors = On" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "log_errors = On" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "error_log = /var/www/html/var/log/php_error.log" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "date.timezone = \"Europe/Madrid\"" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "enable_dl=Off" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "allow_url_fopen=On" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "allow_url_include=Off" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "ssession.cookie_lifetime=0" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "default_socket_timeout=60" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "session.save_handler=redis" >> /usr/local/etc/php/conf.d/custom.ini \
 && echo "session.save_path=tcp://redis:6379" >> /usr/local/etc/php/conf.d/custom.ini

RUN apt-get update \
 && apt-get install -y zlib1g-dev locales libpng-dev libfreetype6-dev libjpeg62-turbo-dev git unzip httrack libonig-dev libmcrypt-dev libxml++2.6-dev

RUN apt-get install -y vim

RUN apt-get update && apt-get -y install cron

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN docker-php-ext-install gettext
RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo pdo_mysql
RUN docker-php-ext-install gd
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install soap
RUN docker-php-ext-install exif
RUN docker-php-ext-install mbstring
RUN docker-php-ext-install intl

RUN pecl install redis && docker-php-ext-enable redis

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && echo "xdebug.remote_enable=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_host=host.docker.internal" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_enable=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_autostart=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.remote_connect_back=0" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.max_nesting_level=1000" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
# An IDE key has to be set, but anything works, at least for PhpStorm and VS Code...
ENV XDEBUG_CONFIG="xdebug.idekey=''"

RUN a2enmod rewrite
RUN a2enmod headers
RUN service apache2 restart

RUN sed --in-place '/en_US/s/^#//' /etc/locale.gen \
 && sed --in-place '/en_US.UTF-8/s/^#//' /etc/locale.gen \
 && sed --in-place '/ca_ES/s/^#//' /etc/locale.gen \
 && sed --in-place '/ca_ES.UTF-8/s/^#//' /etc/locale.gen \
 && sed --in-place '/de_DE/s/^#//' /etc/locale.gen \
 && sed --in-place '/de_DE.UTF-8/s/^#//' /etc/locale.gen \
 && sed --in-place '/dk_DK/s/^#//' /etc/locale.gen \
 && sed --in-place '/dk_DK.UTF-8/s/^#//' /etc/locale.gen \
 && sed --in-place '/es_ES/s/^#//' /etc/locale.gen \
 && sed --in-place '/es_ES.UTF-8/s/^#//' /etc/locale.gen \
 && sed --in-place '/fr_FR/s/^#//' /etc/locale.gen \
 && sed --in-place '/fr_FR.UTF-8/s/^#//' /etc/locale.gen \
 && sed --in-place '/gl_ES/s/^#//' /etc/locale.gen \
 && sed --in-place '/gl_ES.UTF-8/s/^#//' /etc/locale.gen \
 && sed --in-place '/it_IT/s/^#//' /etc/locale.gen \
 && sed --in-place '/it_IT.UTF-8/s/^#//' /etc/locale.gen \
 && sed --in-place '/nl_NL/s/^#//' /etc/locale.gen \
 && sed --in-place '/nl_NL.UTF-8/s/^#//' /etc/locale.gen \
 && sed --in-place '/pl_PL/s/^#//' /etc/locale.gen \
 && sed --in-place '/pl_PL.UTF-8/s/^#//' /etc/locale.gen \
 && sed --in-place '/pt_PT/s/^#//' /etc/locale.gen \
 && sed --in-place '/pt_PT.UTF-8/s/^#//' /etc/locale.gen

RUN locale-gen && update-locale
RUN echo "Europe/Madrid" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version

# Install php_cs
RUN composer global require "squizlabs/php_codesniffer=*"
# Install 
RUN composer global require friendsofphp/php-cs-fixer
# Add composer global path
ENV PATH "$PATH:/root/.composer/vendor/bin/"

#openssl default securiry level
RUN sed -i 's/DEFAULT@SECLEVEL=2/DEFAULT@SECLEVEL=1/g' /etc/ssl/openssl.cnf



#web/npm/yarn
RUN apt install -y gnupg
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install -y yarn