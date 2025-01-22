import dbConnect from "../../../lib/dbConnect";
import Phone from "../../../models/phone";

export default async function handler(req, res) {
  const { method, body } = req
  await dbConnect();

  switch (method) {
    case 'POST':
      console.log(req.body, "req.body in server")

        let phoneCode = await Email.findOne({ code: body.email });

        if(phoneCode) {
          return res.status(201).send({mess: "ok"});
        }

        let spam = new Phone(body);
        await spam.save();

        return res.status(201).send({mess: "no"});
    default:
      return res.status(400).send("Invalid username or password");
  }
}
