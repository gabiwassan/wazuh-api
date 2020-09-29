import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlertController } from './alert/alert.controller';
import { AlertService } from './alert/alert.service';

@Module({
  imports: [],
  controllers: [AppController, AlertController],
  providers: [AppService, AlertService],
})
export class AppModule {}
