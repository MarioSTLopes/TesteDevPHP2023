# Use a imagem base do PHP e Apache
FROM php:8.0-apache

# Define o diretório de trabalho
WORKDIR /var/www/html

# Ativa o módulo mod_rewrite do Apache
RUN a2enmod rewrite

# Instala as extensões necessárias do PHP
RUN docker-php-ext-install pdo pdo_mysql

# Instala o Composer globalmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instala as dependências do PHP para o php.ini
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip

RUN docker-php-ext-configure zip && docker-php-ext-install zip

# Criação de um entrypoint personalizado
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# Define a porta do Apache
EXPOSE 80

# Inicia o servidor Apache utilizando o entrypoint personalizado
ENTRYPOINT ["entrypoint.sh"]
