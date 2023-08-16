import prismaClient from "@prisma/client";

let prismaInstance = null;

function getPrismaInstance() {
  if (!prismaClient) {
    prismaInstance = new prismaClient();
    return prismaInstance;
  }
}

export default getPrismaInstance;
