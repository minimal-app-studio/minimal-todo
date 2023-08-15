import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
        username: "harish",
        email: "harish@gmail.com",
        password: "password@123"
    }
  })

  console.log(user);

  const users = await prisma.user.findMany();

  console.table(users);
}

export {
    main
}