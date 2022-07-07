import db from "../db.js";

export async function getBook(req, res) {
  const id = Number(req.params.id);
  try {
    const products = await db.collection("products").findOne({ id });
    res.status(200).send(products);
    return;
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados!", error);
    res.sendStatus(500);
    return;
  }
}
