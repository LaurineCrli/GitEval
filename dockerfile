# Utiliser une image Node.js Alpine comme base
FROM node:alpine

# Créer le répertoire de travail de l'application
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Installer les dépendances
RUN npm install

# Compiler l'application
RUN npm run build

# Exposer le port sur lequel l'application s'exécutera
EXPOSE 3000

# Commande pour exécuter l'application lors du démarrage du conteneur
CMD ["npm", "run", "start:prod"]