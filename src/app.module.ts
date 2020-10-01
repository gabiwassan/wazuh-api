import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlertController } from './alert/alert.controller';
import { AlertService } from './alert/alert.service';
import { AgentController } from './agent/agent.controller';
import { AgentService } from './agent/agent.service';
import { RuleController } from './rule/rule.controller';
import { RuleService } from './rule/rule.service';

@Module({
  imports: [],
  controllers: [AppController, AlertController, AgentController, RuleController],
  providers: [AppService, AlertService, AgentService, RuleService],
})
export class AppModule {}
