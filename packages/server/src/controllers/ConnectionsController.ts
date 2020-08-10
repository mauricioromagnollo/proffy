import { Request, Response } from 'express';

import db from '../database/connection';

export default class ConnectionController {
  async index(request: Request, response: Response) {
    const totalConnections = await db('CONNECTIONS').count('* as total');
    const { total } = totalConnections[0];
    return response.json({ total });
  }

  async create(request: Request, response: Response) {
    const {user_id} = request.body;

    await db('CONNECTIONS').insert({
      user_id
    });

    return response.status(201).send();
  }
}
