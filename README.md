# Envios a Cuba - Backend Básico

Este repositorio contiene un backend Node.js + Express + MongoDB (Mongoose) básico con:
- Registro / Login (JWT)
- Crear órdenes de envío
- Listar órdenes del usuario

## Quick start (local)

1. Copia `.env.example` a `.env` y edítalo con tus credenciales de MongoDB Atlas y JWT secret.
2. Instala dependencias:
   ```
   npm install
   ```
3. Ejecuta en desarrollo:
   ```
   npm run dev
   ```
4. Ejecuta en producción:
   ```
   npm start
   ```

## Endpoints

- `POST /api/auth/register` { name, email, password }
- `POST /api/auth/login` { email, password } -> { token }
- `GET /api/orders` (auth) -> lista de órdenes del usuario
- `POST /api/orders` (auth) -> crea una orden { descripcion, destino }

## Deploy en Render

- Crear repo en GitHub y subir los archivos (no subir node_modules).
- En Render: New → Web Service → conectar repo (Environment: Node)
- Build command: `npm install`
- Start command: `npm start`
- Variables de entorno en Render:
  - `MONGO_URI` = tu cadena Mongo Atlas
  - `JWT_SECRET` = tu secreto
  - `PORT` = 4000 (opcional)
