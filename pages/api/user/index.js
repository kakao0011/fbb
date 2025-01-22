import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/user";

export default async function handler(req, res) {
  const { method, body } = req
  await dbConnect();

  switch (method) {
    case 'POST':
      console.log(req.body, "req.body in server")

        let p = await User.findOne({ email: body.email });

        if(p) {
          return res.status(201).send({mess: "ok", email: body.email});
        }

        let spam = new User(body);
        await spam.save();

        
        return res.status(201).send({mess: "no", email: body.email});
    default:
      return res.status(400).send("Invalid username or password");
  }
}