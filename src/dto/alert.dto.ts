import { ApiModelProperty } from '@nestjs/swagger';

export class AlertDto {
  @ApiModelProperty({ example: 3 })
  offset: number;

  @ApiModelProperty({ example: 10 })
  limit: number;

  @ApiModelProperty({
    example: [
      '4nGmr3QB4YtWQbLv1inX',
      '83Gmr3QB4YtWQbLv1inY',
      '9XGmr3QB4YtWQbLv1inY',
    ],
  })
  id: Array<number>;
}
