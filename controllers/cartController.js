import db from "../db.js";

export const openCart = async (req,res) => {
    const { email } = res.locals.session;

    try {
        const { cart } = await db.collection("cart").findMany({email:email}).toArray();
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
};