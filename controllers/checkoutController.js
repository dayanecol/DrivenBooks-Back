import db from "../db.js";

export async function postCheckout(req,res){
    const {name, email, cpf, payment, address, products} = req.body;

    try {
        await db.collection("checkout").insertOne({
            name,
            email,
            cpf,
            payment,
            address,
            products
        });
        res.sendStatus(201);
        return;
    } catch (error) {
        console.log("Erro ao finalizar a compra!", error);
        res.sendStatus(500);
        return;
    }
}