import { Injectable } from '@nestjs/common';
import { Rule } from '../interface/alert/alert';
import { reduceCollection } from '../utils/utils';
import jsonData = require('../mocks/alerts/alerts.json');

@Injectable()
export class RuleService {
  private getRules() {
    return jsonData.map(rule => rule._source.rule as Rule);
  }

  private getRuleById(id: number) {
    const rules = this.getRules();
    // @ts-ignore
    return rules.find(rules => rules.id === id);
  }

  getAll(): Array<Rule> {
    return this.getRules();
  }

  findOne(id: number): any {
    return this.getRuleById(id);
  }

  getBy(offset: number, limit: number): any {
    const ruleList = this.getRules();
    const dataRemoved = this.removeDuplicates(ruleList);

    const dataReduced = reduceCollection(dataRemoved, offset, limit);

    const result = this.findCountAlertByAgent(jsonData, dataReduced);

    return { total_items: dataReduced.length, data: result };
  }

  private findCountAlertByAgent = (alerts, rules) => {
    alerts.map(alert =>
      rules.map(rule =>
        alert._source.rule.id === rule.id
          ? (rule.total_alerts = rule.total_alerts ? rule.total_alerts + 1 : 1)
          : null,
      ),
    );

    return rules;
  };

  private removeDuplicates = data => {
    return data.filter(
      (rule, index, self) =>
        index ===
        self.findIndex(t => t.place === rule.place && t.id === rule.id),
    );
  };
}
