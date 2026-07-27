# Día 21 - Modelo Prisma User

## Qué he hecho

- He abierto el archivo prisma/schema.prisma.
- He añadido el enum Role.
- He definido el modelo User.
- He marcado id como clave primaria.
- He marcado email como único.
- He añadido passwordHash.
- He definido role con valor por defecto USER.
- He definido isActive con valor por defecto true.
- He añadido createdAt y updatedAt.
- He validado el esquema con Prisma.
- He generado Prisma Client.

## Modelo definido

```prisma
enum Role {
  USER
  ADMIN
}

model User {
  id           Int      @id @default(autoincrement())
  name         String
  email        String   @unique
  passwordHash String
  role         Role     @default(USER)
  isActive     Boolean  @default(true)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
```

## Explicación de campos

| Campo | Explicación |
|---|---|
| `id` | Identificador único del usuario |
| `name` | Nombre visible |
| `email` | Email único |
| `passwordHash` | Hash de la contraseña |
| `role` | Rol del usuario |
| `isActive` | Indica si la cuenta está activa |
| `createdAt` | Fecha de creación |
| `updatedAt` | Fecha de última modificación |

## Comandos usados

```bash
npx prisma validate
npx prisma generate
```

## Explicación personal

El modelo User en Prisma representa cómo se guardarán los usuarios en la base de datos. Todavía no hemos creado la tabla real, pero ya hemos definido su estructura principal.