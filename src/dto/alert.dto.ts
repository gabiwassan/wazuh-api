import { ApiProperty } from '@nestjs/swagger';

export class AlertDto {
  @ApiProperty({ example: 3 })
  offset: number;

  @ApiProperty({ example: 10 })
  limit: number;

  @ApiProperty({
    example: [
      '4nGmr3QB4YtWQbLv1inX',
      '83Gmr3QB4YtWQbLv1inY',
      '9XGmr3QB4YtWQbLv1inY',
    ],
  })
  id: Array<number>;
}
