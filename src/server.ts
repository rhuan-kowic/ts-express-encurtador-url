import express, { Request, Response } from "express";
import { LinkController } from "./controllers/LinkController";

const app = express();
const linkController = new LinkController();
app.use(express.json());

app.post("/encurtar", linkController.encurtar);
app.get("/links", linkController.listar);
app.get("/:code/stats", linkController.verEstatisticas)
app.get("/:code", linkController.redirecionar);

app.listen(3000, () => {
  console.log("🔥 Servidor rodando em http://localhost:3000");
});
