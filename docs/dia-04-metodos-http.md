# Día 4: Métodos HTTP

## Qué he hecho

- He creado rutas simuladas para usuarios.
- He probado `GET /api/users`.
- He probado `GET /api/users/:id`.
- He probado `POST /api/users` enviando JSON.
- He probado `PATCH /api/users/:id` enviando JSON.
- He probado `DELETE /api/users/:id`.
- He creado una colección de pruebas en Thunder Client o Postman.

## Endpoints trabajados

```http
GET /api/users
GET /api/users/:id
POST /api/users
PATCH /api/users/:id
DELETE /api/users/:id
```

## Explicación personal

* GET sirve para obtener información.
* POST sirve para crear información.
* PATCH sirve para modificar parte de un recurso.
* DELETE sirve para eliminar o desactivar un recurso.

## Pruebas realizadas
GET:
![GET /api/user](./images/dia4_user_get.png)

POST:
![POST /api/user](./images/dia4_user_post.png)

PATCH:
![PATCH /api/user/:id](./images/dia4_user_patch_1.png)

DELETE:
![DELETE /api/user/:id](./images/dia4_user_delete_1.png)