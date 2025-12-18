import { Request, Response } from "express";
import { Link } from "../models/Link";
import { prisma } from "../lib/prisma";
import z from "zod";

export class LinkController {
  async encurtar(req: Request, res: Response) {
    const createLinkSchema = z.object({
      urlOriginal: z.string().url(),
    });

    try {
      const { urlOriginal } = createLinkSchema.parse(req.body);
      const link = await prisma.link.create({
        data: {
          id: Math.random().toString(36).substring(2, 7),
          urlOriginal,
          cliques: 0,
        },
      });
      return res
        .status(201)
        .send({ message: "Link encurtado com sucesso!", link });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).send({
          message: "Dados inválidos.",
          issues: error.format(),
        });
      }
      return res
        .status(500)
        .send({ message: "Erro ao encurtar o link.", error });
    }
  }

  async redirecionar(req: Request, res: Response) {
    const { code } = req.params;
    try {
      const link = await prisma.link.findUnique({
        where: { id: code },
      });

      if (!link) {
        return res.status(404).send({ message: "Link não encontrado." });
      }
      await prisma.link.update({
        where: { id: code },
        data: { cliques: { increment: 1 } },
      });
      return res.redirect(link.urlOriginal);
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Erro ao redirecionar o link.", error });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const links = await prisma.link.findMany();
      res.status(200).send({ message: links });
    } catch (error) {
      return res.status(500).send({ message: "Erro ao buscar links." });
    }
  }

  async verEstatisticas(req: Request, res: Response) {
    const { code } = req.params;
    try {
      const link = await prisma.link.findUnique({
        where: { id: code },
      });

      if (!link) {
        return res.status(404).send({ message: "Link não encontrado." });
      }

      return res.status(200).send({ message: link });
    } catch (error) {
      return res.status(500).send({ message: "Erro ao buscar estatísticas." });
    }
  }
}
