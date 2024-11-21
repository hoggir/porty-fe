import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Rest of your API logic
  res.status(200).json({ message: 'Hello from Next.js API!' });
}