import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductDto } from './dtos/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productService.viewOne(id);
  }
  @Get()
  async FindTasks() {
    return await this.productService.viewList();
  }
  @Post()
  async CreateTask(@Body() taskInfoDto: ProductDto) {
    return await this.productService.create(taskInfoDto);
  }
  @Put(':id')
  async UpdateTask(@Param('id') id: string, @Body() taskInfoDto: ProductDto) {
    return await this.productService.update(id, taskInfoDto);
  }
  @Delete(':id')
  async DeleteTask(@Param('id') id: string) {
    return await this.productService.delete(id);
  }
}
