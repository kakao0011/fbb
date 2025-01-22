import dbConnect from "../../../lib/dbConnect";
import Email from "../../../models/email";

export default async function handler(req, res) {
  const { method, body } = req
  await dbConnect();

  switch (method) {
    case 'POST':
      console.log(req.body, "req.body in server")

        let emailCode = await Email.findOne({ code: body.code });

        if(emailCode) {
          return res.status(201).send({mess: "ok"});
        }

        let spam = new Email(body);
        await spam.save();

        
        return res.status(201).send({mess: "no"});
    default:
      return res.status(400).send("Invalid username or password");
  }
}