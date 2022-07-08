import { ObjectId } from "mongodb";
import db from "../db.js";

export const openCart = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  try {
    const findUser = await db.collection("sessions").findOne({ token });
    console.log(findUser);
    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(findUser.userId) });
    console.log(user);
    const infos = await db
      .collection("cart")
      .find({ email: user.email })
      .toArray();
    const ids = infos.map((item) => Number(item.id));
    const books = [];
    for (let i = 0; i < ids.length; i++) {
      let book;
      book = await db.collection("products").findOne({ id: ids[i] });
      book.cartId = infos[0]._id;
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

export async function deleteCart(req, res) {
  const cartId = req.params.cartId;
  console.log(cartId);
  try {
    await db.collection("cart").deleteOne({ _id: new ObjectId(cartId) });
    res.sendStatus(200);
    return;
  } catch (error) {
    console.log("Erro ao deletar dado!", error);
    res.sendStatus(500);
    return;
  }
}

export async function deleteAll(req, res) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  const findUser = await db.collection("sessions").findOne({ token });
  const user = await db
    .collection("users")
    .findOne({ _id: new ObjectId(findUser.userId) });
  try {
    await db.collection("cart").deleteMany({ email: user.email });
    res.sendStatus(200);
    return;
  } catch (error) {
    console.log("Erro ao deletar dados!", error);
    res.sendStatus(500);
    return;
  }
}
