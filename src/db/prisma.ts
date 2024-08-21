import { PrismaClient } from "@prisma/client";

// Add a global variable to hold the PrismaClient instance
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  // In production, create a new PrismaClient instance
  prisma = new PrismaClient();
} else {
  // In development, avoid creating multiple instances
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;
