# Día 14 - Códigos de estado HTTP

## Qué he hecho

- He revisado los códigos HTTP utilizados en la API.
- He probado respuestas correctas con `200 OK`.
- He probado creación con `201 Created`.
- He probado errores de validación con `400 Bad Request`.
- He probado usuario inexistente con `404 Not Found`.
- He probado email duplicado con `409 Conflict`.
- He comprobado que el código HTTP coincide con el mensaje JSON.

## Tabla resumen

| Código | Significado | Cuándo lo uso |
| ---: | --- | --- |
| 200 | OK | Cuando la petición se procesa correctamente |
| 201 | Created | Cuando se crea un usuario |
| 400 | Bad Request | Cuando la petición tiene datos incorrectos |
| 404 | Not Found | Cuando el usuario no existe |
| 409 | Conflict | Cuando el email ya está registrado |

## Casos probados

| Petición | Caso | Código esperado | Código obtenido | ¿Correcto? |
| --- | --- | ---: | ---: | --- |
| `GET /api/health` | Health | 200 | ![Imagen](./images/dia14_1.png) | SI |
| `GET /api/users` | Listado | 200 | ![Imagen](./images/dia14_2.png) | SI |
| `GET /api/users/1` | Usuario existente | 200 | ![Imagen](./images/dia14_3.png) | SI |
| `GET /api/users/999` | Usuario inexistente | 404 | ![Imagen](./images/dia14_4.png) | SI |
| `GET /api/users/abc` | ID inválido | 400 | ![Imagen](./images/dia14_5.png) | SI |
| `POST /api/users` | Creación correcta | 201 | ![Imagen](./images/dia14_6.png) | SI |
| `POST /api/users` | Datos inválidos | 400 | ![Imagen](./images/dia14_7.png) | SI |
| `POST /api/users` | Email duplicado | 409 | ![Imagen](./images/dia14_8.png) | SI |
| `PATCH /api/users/1` | Actualización correcta | 200 | ![Imagen](./images/dia14_9.png) | SI |
| `PATCH /api/users/999` | Usuario inexistente | 404 | ![Imagen](./images/dia14_10.png) |  SI |
| `DELETE /api/users/1` | Desactivación correcta | 200 | ![Imagen](./images/dia14_11.png) | SI |

## Explicación personal

Los códigos de estado HTTP permiten que el cliente entienda rápidamente qué ha
pasado con una petición. No basta con devolver un JSON; el código HTTP también
debe ser coherente con el resultado.