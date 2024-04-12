import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './db/product.schema';
import { Model } from 'mongoose';
import { ProductDto } from './dtos/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly ProdModel: Model<Product>,
  ) {}

  async create(taskDto: ProductDto): Promise<ProductDto> {
    const createTask = new this.ProdModel(taskDto);
    return createTask.save();
  }

  async viewList(): Promise<ProductDto[]> {
    return this.ProdModel.find().exec();
  }

  async viewOne(id: string): Promise<ProductDto> {
    return this.ProdModel.findById(id).exec();
  }

  async update(id: string, taskInfoDto: ProductDto): Promise<ProductDto> {
    return this.ProdModel.findByIdAndUpdate(id, taskInfoDto).exec();
  }

  async delete(id: string): Promise<ProductDto> {
    return this.ProdModel.findByIdAndDelete(id).exec();
  }
}
