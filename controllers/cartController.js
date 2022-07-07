import db from "../db.js";

export async function postCart(req, res) {
  const body = req.body;
  try {
    await db.collection("cart").insertOne(body);
    res.sendStatus(201);
    return;
  } catch (error) {
    console.log("Erro ao enviar dados!", error);
    res.sendStatus(500);
    return;
  }
}
