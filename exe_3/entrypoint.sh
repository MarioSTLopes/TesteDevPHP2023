#!/bin/bash

# Define o diretório de trabalho
cd /var/www/

# Verifica se a pasta ConsultaCEP já existe
if [ ! -d "/var/www/ViaCEPApp" ]; then
    # Cria a pasta ConsultaCEP e gera o projeto Laravel
    composer create-project --prefer-dist laravel/laravel:^8.0 ViaCEPApp
fi

# Entra no diretório do projeto Laravel
cd /var/www/ViaCEPApp

# Instala as dependências do Laravel
composer install

# Executa o script de pós-instalação do Laravel
composer run-script post-root-package-install

# Gera a chave do .env
php artisan key:generate

# Volta ao diretório raiz do projeto
cd /var/www/

# Define as permissões corretas para os diretórios do projeto
chown -R www-data:www-data /var/www/ViaCEPApp/*
chmod -R 775 /var/www/ViaCEPApp/*

# Configura o Apache
sed -i 's/\/var\/www\/html/\/var\/www\/ViaCEPApp\/public/g' /etc/apache2/sites-available/000-default.conf

# Inicia o servidor Apache em primeiro plano
apache2-foreground
