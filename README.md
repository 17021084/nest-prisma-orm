# Nest prisma

## Setup Prima

Download package

```
yarn add prisma
```

Initialize prisma

```
npx prisma init
```
### Create model and apply to db


Create migration and apply to database. And it also same "rails db:create"

```bash
npx prisma migrate dev --name init_db

#result be like
#migrations/
#  └─ 20240228185012_init_db/
#    └─ migration.sql

```






#### References
[Prisma_doc](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgresql
)
[courses](https://www.youtube.com/watch?v=uWZ_6pDbLpU&ab_channel=AnsontheDeveloper)