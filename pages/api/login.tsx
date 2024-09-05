import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password, email} = req.body;

    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}