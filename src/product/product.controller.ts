import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";


@Controller('product')
export class ProductController {

  constructor(
    private readonly productService: ProductService
  ) {
  }

  // product get all
  @Get('all')
  async productGetAll() {
    const products = await this.productService.getAllProducts()
    return {count: products.length, products}
  }

  @Get(':id')
  async productGetById(
    @Param('id') id: string
  ) {
      return await this.productService.getByIdOfProduct(id)
  }

  @Post('create')
  async productCreate(
    @Body('title') title: string,
    @Body('desc') desc: string,
    @Body('price') price: number
  ) {
    const newProduct = await this.productService.createProduct(title, desc, price)
    return newProduct;
  }

  // delete by id
  @Delete(':id')
  async deleteProductById(
    @Param('id') id: string
  ) {
    return await this.productService.deleteByIdOfProduct(id)
  }


}
