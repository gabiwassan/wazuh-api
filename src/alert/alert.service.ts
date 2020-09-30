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

    const data = [];
    listId.map(id => {
      collection.reduce((value, option) => {
        if (option._id === id) {
          data.push(option);
        }
        return data;
      }, []);
    });

    return { data, total_items: data.length };
  }
}
