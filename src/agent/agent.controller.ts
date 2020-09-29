import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AgentService } from './agent.service';
import { Agent } from '../interface/alert/alert';

@ApiTags('Agents')
@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Get()
  findAll(): Array<Agent> {
    return this.agentService.getAll();
  }

  @Get('/filter')
  @ApiQuery({ name: 'offset', type: Number })
  @ApiQuery({ name: 'limit', type: Number })
  filterAgents(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Array<Agent> {
    return this.agentService.getBy(offset, limit);
  }
}
