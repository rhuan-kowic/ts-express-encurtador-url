import { Request, Response } from "express";
import { Link } from "../models/Link";
import { BancoDeDados } from "../database/BancoDeDados";

const bancoDeDados = new BancoDeDados<Link>();

export class LinkController {
  encurtar(req: Request, res: Response) {
    const { urlOriginal } = req.body;
    if (urlOriginal) {
      const id: string = Math.random().toString(36).substring(2, 7);
      const link: Link = { id, urlOriginal };
      bancoDeDados.salvar(link);
      res.status(201).send({ message: "Link encurtado com sucesso!", link });
    } else {
      res.status(400).send({ message: "Erro: campo urlOriginal obrigatoria." });
    }
  }

  redirecionar(req: Request, res: Response) {
    const { code } = req.params;
    const link = bancoDeDados.buscarPorId(code);
    if (!link) {
      res.status(404).send({ message: "Link não encontrado." });
    } else {
      res.redirect(link.urlOriginal);
    }
  }

  listar(req: Request, res: Response) {
    const links = bancoDeDados.listar();
    if (links.length > 0) {
      res.status(200).send({ message: links });
    } else {
      res.status(200).send({ message: "Não tem links registrados ainda." });
    }
  }
}
