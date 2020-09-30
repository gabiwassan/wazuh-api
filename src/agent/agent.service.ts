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
    const dataRemoved = this.removeDuplicates(agentList);

    const dataReduced = reduceCollection(dataRemoved, offset, limit);

    const result = this.findCountAlertByAgent(jsonData, dataReduced);

    return { total_items: dataReduced.length, data: result };
  }

  private findCountAlertByAgent = (alerts, agents) => {
    alerts.map(alert =>
      agents.map(agent =>
        alert._source.agent.id === agent.id
          ? (agent.total_alerts = agent.total_alerts
              ? agent.total_alerts + 1
              : 1)
          : null,
      ),
    );

    return agents;
  };

  private removeDuplicates = data => {
    return data.filter(
      (agent, index, self) =>
        index ===
        self.findIndex(t => t.place === agent.place && t.id === agent.id),
    );
  };
}
