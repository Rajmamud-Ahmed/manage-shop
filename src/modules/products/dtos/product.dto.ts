import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  kwHp: string;

  @IsNotEmpty()
  cap: string;

  @IsNotEmpty()
  discription1: string;

  @IsNotEmpty()
  discription2: string;

  @IsNotEmpty()
  terms1: Array<any>;

  @IsNotEmpty()
  terms2: Array<any>;

  @IsNotEmpty()
  totalSlots: number;

  @IsNotEmpty()
  countType: 'odd' | 'even';
}
