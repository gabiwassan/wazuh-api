import { Injectable } from '@nestjs/common';
import { Agent, Alert } from '../interface/alert/alert';
import jsonData = require('../mocks/alerts/alerts.json');
import { reduceCollection } from '../utils/utils';

@Injectable()
export class AgentService {
  private getAgents() {
    return jsonData.map(alert => alert._source.agent as Agent);
  }

  getAll(): Array<Agent> {
    return this.getAgents();
  }

  getBy(offset: number, limit: number): any {
    const agentList = this.getAgents();
    const dataReduced = this.removeDuplicates(agentList);

    const result  = reduceCollection(dataReduced, offset, limit);

    return { total_items: result.length, data: result };
  }

  private removeDuplicates = data => {
    return data.filter(
      (agent, index, self) =>
        index ===
        self.findIndex(t => t.place === agent.place && t.id === agent.id),
    );
  };
}
