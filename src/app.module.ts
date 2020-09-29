import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlertController } from './alert/alert.controller';
import { AlertService } from './alert/alert.service';
import { AgentController } from './agent/agent.controller';
import { AgentService } from './agent/agent.service';

@Module({
  imports: [],
  controllers: [AppController, AlertController, AgentController],
  providers: [AppService, AlertService, AgentService],
})
export class AppModule {}
