// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  created_at: string;
  email: string;
  id: string;
  name: string;
  password: string;
  updated_at: string;
};

function maskEmail(email: string) {
  const [first, last] = email.split("@");
  const firstChars = first.slice(0, 3);
  const lastChars = first.slice(-3);
  const maskedEmail = `${firstChars}***${lastChars}@${last}`;
  return maskedEmail;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get request input
  const { user } = req.body.input;

  // run some business logic

  /*
  // In case of errors:
  return res.status(400).json({
    message: "error happened"
  })
  */

  // success
  return res.json({
    created_at: user.created_at,
    email: maskEmail(user.email),
    id: user.id,
    name: user.name,
    password: user.password,
    updated_at: user.updated_at,
  });
}
