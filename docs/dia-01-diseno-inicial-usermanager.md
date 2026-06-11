## Descripción
UserManager API es una API REST para gestionar usuarios de una aplicación. Permitirá:
- Registrar usuarios.
- Iniciar sesión.
- Consultar perfiles.
- Modificar datos.
- Gestionar roles
- Proteger rutas privadas con autenticación.

## Recursos principales
- /auth: Servirá para registrar usuarios e iniciar sesión.
- /users: Servirá para consultar, crear, modificar y eliminar usuarios.
- health: Servirá para comprobar que la API está funcionando.

## Modelo de usuario
User
- id: PK.
- name: Nombre completo.
- email: Correo electrónico.
- passwordHash: Contraseña.
- role: Rol (USER / ADMIN).
- isActive: Estado en el servidor (ACTIVO / INACTIVO).
- createdAt: Fecha creación.
- updatedAt: Fecha última modificación.

## Endpoints
| Método   | Ruta                     | Descripción                    | Acceso                   |
| -------- | ------------------------ | ------------------------------ | ------------------------ |
| `GET`    | `/api/health`            | Comprueba si la API funciona   | Público                  |
| `POST`   | `/api/auth/register`     | Registra un usuario            | Público                  |
| `POST`   | `/api/auth/login`        | Inicia sesión                  | Público                  |
| `GET`    | `/api/users/me`          | Consulta mi perfil             | Usuario autenticado      |
| `GET`    | `/api/users`             | Lista todos los usuarios       | `ADMIN`                  |
| `GET`    | `/api/users/:id`         | Consulta un usuario por ID     | `ADMIN` o propio usuario |
| `PATCH`  | `/api/users/:id`         | Modifica un usuario            | `ADMIN` o propio usuario |
| `DELETE` | `/api/users/:id`         | Elimina o desactiva un usuario | `ADMIN`                  |
| `PATCH`  | `/api/users/me/password` | Cambia mi contraseña           | Usuario autenticado      |
| `PATCH`  | `/api/users/:id/role`    | Cambia el rol de un usuario    | `ADMIN`                  |
| `PATCH`  | `/api/users/:id/status`  | Activa o desactiva un usuario  | `ADMIN`                  |

## Flujo general
![Esquema de flujo](./images/esquema_flujo_Api.png)

El cliente envía una petición a la API. La API valida los datos, aplica la lógica necesaria, consulta o modifica la base de datos y devuelve una respuesta.

## Reglas iniciales
- El email no se puede repetir
- La contraseña no se guarda en texto plano
- La API nunca devuelve passwordHash
- Un USER solo puede acceder a su propia información
- Un ADMIN puede gestionar usuarios
- Un usuario inactivo no puede iniciar sesión

## Reglas propuestas
- La contraseña debe tener al menos 8 caracteres
- El nombre del usuario no puede estar vacío

## Posibles errores
- Intentar registrar un email ya existente → 409 Conflict
- Intentar consultar un usuario que no existe → 404 Not Found

## Respuesta Json
Ruta:
```GET /api/users/me```
{
  "id": 1,
  "name": "Joa Zamorano",
  "email": "joa@mail.com",
  "role": "ADMIN",
  "isActive": false
}

## Descripción propia de API
Una API es una aplicación que hace de puente entre la comunicación del cliente y el servidor. Así se puede crear, modificar, borrar u obtener datos con una capa de seguridad.

## Fecha
Fecha de inicio del proyecto 08-06-2026