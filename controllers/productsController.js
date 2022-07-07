import db from "../db.js";

export async function getProducts(req, res) {
  const type = req.params.type;
  try {
    const products = await db.collection("products").find({ type }).toArray();
    res.status(200).send(products);
    return;
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados!", error);
    res.sendStatus(500);
    return;
  }
}

export async function postProducts(req, res) {
  const body = req.body;
  try {
    await db.collection("products").insertOne(body);
    res.sendStatus(201);
    return;
  } catch (error) {
    console.log("Erro ao enviar dados!", error);
    res.sendStatus(500);
    return;
  }
}
