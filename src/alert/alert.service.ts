import { Injectable } from '@nestjs/common';
import { Alert } from '../interface/alert/alert';
import jsonData = require('../mocks/alerts/alerts.json');
import { reduceCollection } from '../utils/utils';

@Injectable()
export class AlertService {
  getAll(): Array<Alert> {
    return jsonData.map(alert => (alert as unknown) as Alert);
  }

  getBy(offset: number, limit: number, listId: Array<number>): any {
    const collection = reduceCollection(jsonData, offset, limit);

    if (!(listId instanceof Array)) {
      listId = [listId];
    }

    const data = listId.map(id => collection.filter(alert => alert._id === id));

    return { data, total_items: data.length };
  }
}
