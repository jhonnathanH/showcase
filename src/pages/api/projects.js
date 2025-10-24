// pages/api/projects.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();

    switch (req.method) {
      case 'GET':
        const projects = await db
          .collection('projects') 
          .find({})
          .toArray();
        res.status(200).json({ status: 'ok', data: projects });
        break;

      case 'POST':
        const newProject = req.body;
        const result = await db.collection('projects').insertOne(newProject);
        
        res.status(201).json({ status: 'created', data: result });
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}