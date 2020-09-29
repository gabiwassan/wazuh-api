import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AlertService } from './alert.service';
import { Alert } from '../interface/alert/alert';

@ApiTags('Alerts')
@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Get()
  findAll(): Array<Alert> {
    return this.alertService.getAll();
  }

  @Get('/filter')
  @ApiQuery({ name: 'offset', type: Number })
  @ApiQuery({ name: 'limit', type: Number })
  @ApiQuery({ name: 'id', type: [Number] })
  filterAlerts(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Query('id') id: Array<number>,
  ): Array<Alert> {
    return this.alertService.getBy(offset, limit, id);
  }
}
