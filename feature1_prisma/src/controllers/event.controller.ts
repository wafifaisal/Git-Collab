import { Request, Response } from "express";
import prisma from "../prisma";

export class EventController {
  async getEvent(req: Request, res: Response) {
    try {
      const events = await prisma.event.findMany({
        select: {
          id: true,
          category: true,
          event_name: true,
          event_thumbnail: true,
          event_preview: true,
          slug: true,
          date: true,
          Ticket: {
            select: {
              price: true,
            },
          },
          Organizer: {
            select: {
              name: true,
              avatar: true,
            },
          },
        },
      });
      console.log("Fetched events:", events);
      res.status(200).send({ events });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async getEventSlug(req: Request, res: Response) {}
}
