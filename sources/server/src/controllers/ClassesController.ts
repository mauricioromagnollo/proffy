import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      });
    }

    const timeInMinutes = convertHourToMinutes(time);
    
    const classes = await db('CLASSES')
      .whereExists(function(){
        this.select('CLASS_SCHEDULE.*')
          .from('CLASS_SCHEDULE')
          .whereRaw('`CLASS_SCHEDULE`.`class_id` = `CLASSES`.`id`')
          .whereRaw('`CLASS_SCHEDULE`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`CLASS_SCHEDULE`.`from` <= ??', [timeInMinutes])
          .whereRaw('`CLASS_SCHEDULE`.`to` > ??', [timeInMinutes])
      })
      .where('CLASSES.subject', '=', subject)
      .join('USERS', 'CLASSES.user_id', '=', 'USERS.id')
      .select(['CLASSES.*', 'USERS.*']);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const { 
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = request.body;
  
    const trx = await db.transaction();
  
    try {
      const insertedUsersIds = await trx('USERS').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
    
      const user_id = insertedUsersIds[0];
    
      const insertedClassesIds = await trx('CLASSES').insert({
        subject,
        cost,
        user_id,
      });
    
      const class_id = insertedUsersIds[0];
    
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to)
        };
      });
    
      await trx('CLASS_SCHEDULE').insert(classSchedule);
    
      await trx.commit();
    
      return response.status(201).send();
    
    } catch (err) {
        await trx.rollback();
        return response.status(400).json({
          error: 'Unexpected error while creating new class'
        });
    }
  }
}
