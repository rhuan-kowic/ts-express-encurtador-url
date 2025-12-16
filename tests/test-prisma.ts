import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const novoLink = await prisma.link.create({
    data: {
      id: "abc123",
      urlOriginal: "https://prisma.io",
    },
  });
  console.log("Criado: ", novoLink);
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
