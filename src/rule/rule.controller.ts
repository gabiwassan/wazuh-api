import { Controller, Get, Query } from '@nestjs/common';
import { Rule } from '../interface/alert/alert';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { RuleService } from './rule.service';

@ApiTags('Rules')
@Controller('rule')
export class RuleController {
  constructor(private readonly ruleService: RuleService) {}

  @Get('/filter')
  @ApiQuery({ name: 'offset', type: Number })
  @ApiQuery({ name: 'limit', type: Number })
  filterRules(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Array<Rule> {
    return this.ruleService.getBy(offset, limit);
  }

  @Get()
  findAll(): Array<Rule> {
    return this.ruleService.getAll();
  }

  @Get(':id')
  @ApiQuery({ name: 'id', type: Number })
  findOne(@Query('id') id: number): Rule {
    return this.ruleService.findOne(id);
  }
}
