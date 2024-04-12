import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  model: string;

  @Prop()
  kwHp: string;

  @Prop()
  cap: string;

  @Prop()
  discription1: string;

  @Prop()
  discription2: string;

  @Prop()
  terms1: Array<any>;

  @Prop()
  terms2: Array<any>;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
