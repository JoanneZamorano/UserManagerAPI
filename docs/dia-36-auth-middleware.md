# Día 36 - Middleware de autenticación

## Qué he hecho

- He creado la carpeta src/types.
- He creado auth.types.ts.
- He definido AuthenticatedUser.
- He definido AuthenticatedRequest.
- He añadido verifyToken en jwt.utils.ts.
- He creado la carpeta src/middlewares.
- He creado auth.middleware.ts.
- He creado authMiddleware.
- He leído la cabecera Authorization.
- He comprobado el formato Bearer.
- He verificado tokens con JWT_SECRET.
- He guardado el payload en req.user.
- He creado GET /api/auth/me.
- He protegido las rutas de /api/users.
- He probado rutas sin token.
- He probado rutas con token.
- He ejecutado npm run build.

## Cabecera usada

```text
Authorization: Bearer <token>
```

## Archivos creados

```text
src/types/auth.types.ts
src/middlewares/auth.middleware.ts
```

## Archivos modificados

```text
src/utils/jwt.utils.ts
src/controllers/auth.controller.ts
src/routes/auth.routes.ts
src/routes/user.routes.ts
```

## Middleware creado

```text
authMiddleware
```

## Qué hace el middleware

```text
Lee Authorization.
Comprueba que exista.
Comprueba que use Bearer.
Extrae el token.
Verifica el token.
Guarda el usuario autenticado en req.user.
Permite continuar con next().
```

## Ruta de prueba

```text
GET /api/auth/me
```

## Rutas protegidas

```text
GET    /api/users
GET    /api/users/:id
POST   /api/users
PATCH  /api/users/:id
DELETE /api/users/:id
```

## Flujo

```text
Cliente → Authorization Bearer token → authMiddleware → req.user → controlador
```

## Explicación personal

El middleware de autenticación permite comprobar si una petición pertenece a un usuario autenticado. Si el token es válido, la API guarda sus datos en req.user y deja continuar la petición. Si el token falta o es inválido, responde con 401.

```mermaid
flowchart TD
    A["Petición"] --> B{"Authorization?"}

    B -- No --> C["401 Token no proporcionado"]
    B -- Sí --> D{"Bearer token?"}

    D -- No --> E["401 Formato inválido"]
    D -- Sí --> F["verifyToken"]

    F --> G{"Token válido?"}

    G -- No --> H["401 Token inválido"]
    G -- Sí --> I["req.user"]

    I --> J["Controlador"]
```

## Checklist de pruebas

| Prueba | Resultado |
| --- | --- |
| Login devuelve token | ![Imagen](./images/dia36_1.png) |
| `GET /api/auth/me` sin token devuelve 401 | ![Imagen](./images/dia36_2.png) |
| `GET /api/auth/me` con token devuelve usuario | ![Imagen](./images/dia36_3.png) |
| Token sin Bearer devuelve 401 | ![Imagen](./images/dia36_4.png) |
| Token inventado devuelve 401 | ![Imagen](./images/dia36_5.png) |
| `GET /api/users` sin token devuelve 401 | ![Imagen](./images/dia36_6.png) |
| `GET /api/users` con token devuelve 200 | ![Imagen](./images/dia36_7.png) |
| `POST /api/users` con token funciona | ![Imagen](./images/dia36_8.png) |
| `npm run build` funciona | ![Imagen](./images/dia36_9.png) |