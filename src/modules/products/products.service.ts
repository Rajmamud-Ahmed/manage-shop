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

  async create(productDto: ProductDto): Promise<ProductDto> {
    const createProduct = new this.ProdModel(productDto);
    return await createProduct.save();
  }

  async viewList(): Promise<ProductDto[]> {
    return await this.ProdModel.find().exec();
  }

  async viewOne(id: string): Promise<ProductDto> {
    return await this.ProdModel.findById(id).exec();
  }

  async update(id: string, productInfoDto: ProductDto): Promise<ProductDto> {
    return await this.ProdModel.findByIdAndUpdate(id, productInfoDto).exec();
  }

  async delete(id: string): Promise<ProductDto> {
    return await this.ProdModel.findByIdAndDelete(id).exec();
  }
}
