import { NextApiRequest, NextApiResponse } from 'next';
import initMiddleware from '../../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the middleware
  await cors(req, res);

  // Rest of your API logic
  res.status(200).json({ message: 'Hello from Next.js API!' });
}