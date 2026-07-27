# Día 20 - Instalación y configuración inicial de Prisma

## Qué he hecho

- He instalado Prisma CLI.
- He instalado Prisma Client.
- He ejecutado prisma init.
- He creado la carpeta prisma.
- He revisado el archivo schema.prisma.
- He configurado DATABASE_URL.
- He revisado .env y .env.example.
- He comprobado que .env está en .gitignore.
- He validado el esquema de Prisma.
- He generado Prisma Client.

## Comandos usados

```bash
npm install -D prisma
npm install @prisma/client
npx prisma --version
npx prisma init --datasource-provider postgresql
npx prisma validate
npx prisma generate
```

![Imagen](./images/dia20_1.png) 

## Archivos generados o modificados

```text
prisma/schema.prisma
.env
.env.example
.gitignore
package.json
package-lock.json
```

## schema.prisma inicial

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## DATABASE_URL

```env
DATABASE_URL="postgresql://usermanager:usermanager_password@localhost:5432/usermanager_db"
```

## Explicación personal

Prisma necesita un archivo schema.prisma para saber qué base de datos usamos y qué modelos tendrá el proyecto. Hoy todavía no hemos definido el modelo User, pero hemos dejado Prisma instalado y preparado para hacerlo en el siguiente día.