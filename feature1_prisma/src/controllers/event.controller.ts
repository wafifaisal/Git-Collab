import { Request, Response } from "express";
import prisma from "../prisma";

export const searchEvents = async (req: Request, res: Response) => {
  const { query, filter } = req.query;

  try {
    const results = await prisma.event.findMany({
      where: {
        [filter as string]: {
          contains: query as string,
          mode: "insensitive",
        },
      },
    });

    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
