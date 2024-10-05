# Usa una imagen base de Node.js
FROM node:18 AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Etapa de producción
FROM node:18 AS production

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next

## (Opcional) Si tienes un directorio public, asegúrate de que existe
## Si no tienes un directorio public, puedes eliminar la siguiente línea.
#COPY --from=builder /app/public ./public

# Instala solo las dependencias de producción
RUN npm install --only=production

# Expone el puerto que la aplicación usará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
