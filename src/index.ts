import express, { Request, Response } from "express";
import prisma from "./db/prisma";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.get("/cats", async (req: Request, res: Response) => {
  try {
    const cats = await prisma.cat.findMany();

    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.post("/add-cat", async (req: Request, res: Response) => {
  const { name, image, description } = req.body;
  try {
    const user = await prisma.cat.create({
      data: {
        name,
        image,
        description,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
