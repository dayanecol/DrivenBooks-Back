import joi from "joi";
import db from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signIn(req, res) {
  const { email, password } = req.body;

export async function signIn(req,res){
    const {email, password} = req.body;
    
    try {
        const user = await db.collection("users").findOne({email:email});
        if(!user){
            res.sendStatus(404);
            return;
        }
        if(user && bcrypt.compareSync(password,user.password)){
            const token = uuid();
            await db.collection("sessions").insertOne({
                userId: user._id,
                token
            })
            return res.send({token, name:user.name, email});
        }
        res.sendStatus(201);
        return;
    } catch (error) {
        console.log("Erro ao logar usuário!", error);
        res.sendStatus(500);
        return;       

    }
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = uuid();
      await db.collection("sessions").insertOne({
        userId: user._id,
        token,
      });
      return res.send({ token, name: user.name, email: user.email });
    }
    res.sendStatus(201);
    return;
  } catch (error) {
    console.log("Erro ao logar usuário!", error);
    res.sendStatus(500);
    return;
  }
}

export async function signUp(req, res) {
  const { name, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    await db.collection("users").insertOne({
      name,
      email,
      password: hashPassword,
    });
    res.sendStatus(201);
    return;
  } catch (error) {
    console.log("Erro ao criar novo usuário!", error);
    res.sendStatus(500);
    return;
  }
}
