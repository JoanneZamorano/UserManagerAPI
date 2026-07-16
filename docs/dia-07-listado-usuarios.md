# Día 7: Listado de usuarios en memoria

## Qué he hecho

- He creado un tipo User en TypeScript.
- He creado un array de usuarios en memoria.
- He actualizado el endpoint GET /api/users.
- He devuelto un listado de usuarios en formato JSON.
- He añadido el total de usuarios en la respuesta.
- He comprobado que no se devuelven contraseñas.

## Endpoint trabajado

```http
GET /api/users
```

## Respuesta obtenida

```json
{
  "message": "Listado de usuarios",
  "total": 3,
  "data": [
    {
      "id": 1,
      "name": "Ana García",
      "email": "ana@email.com",
      "role": "USER",
      "isActive": true
    }
  ]
}
```

## Explicación personal

Trabajar en memoria significa que los datos están guardados temporalmente
mientras el servidor está encendido. Si reinicio el servidor, los datos vuelven
al estado inicial.

| Comprobación | Resultado |
| :--- | :--- |
| **La ruta `GET /api/users` responde** | correcto |
| **El status code es `200`** | correcto |
| **La respuesta contiene `message`** | correcto |
| **La respuesta contiene `total`** | correcto |
| **La respuesta contiene `data`** | correcto |
| **`data` es un array** | correcto |
| **Los usuarios no incluyen contraseña** | correcto |

![Imagen](./images/dia7_prueba.png) 