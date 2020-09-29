import { Injectable } from '@nestjs/common';
import { Alert } from '../interface/alert/alert';
import jsonData = require('../mocks/alerts/alerts.json');

@Injectable()
export class AlertService {
  getAll(): Array<Alert> {
    return jsonData.map(alert => (alert as unknown) as Alert);
  }

  getById(offset: number, limit: number, listId: Array<number>): Array<Alert> {
    const collection = this.reduceCollection(offset, limit);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return listId.map(id => collection.filter(alert => alert._id === id));
  }

  reduceCollection = (offset, limit) => {
    return jsonData.slice(offset, limit);
  };
}
