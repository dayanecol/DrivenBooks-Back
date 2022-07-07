import db from "../db.js";

export const openCart = async (req, res) => {
  const { email } = req.body;
  try {
    const infos = await db.collection("cart").find({ email }).toArray();
    const ids = infos.map((item) => item.id);
    const books = [];
    for (let i = 0; i < ids.length; i++) {
      let book;
      book = await db.collection("products").findOne({ id: ids[i] });
      books.push(book);
    }
    res.send(books);
  } catch (error) {
    console.log("Erro no banco de dados", error);
    res.sendStatus(500);
    return;
  }
};

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
