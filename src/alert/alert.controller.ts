import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { AlertService } from './alert.service';
import { Alert } from '../interface/alert/alert';
import { AlertDto } from '../dto/alert.dto';

@ApiUseTags('Alerts')
@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Get()
  findAll(): Array<Alert> {
    return this.alertService.getAll();
  }

  @Post()
  filterAlerts(@Body() body: AlertDto): Array<Alert> {
    return this.alertService.getById(body.offset, body.limit, body.id);
  }
}
