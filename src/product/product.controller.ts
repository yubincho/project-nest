import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";


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
    // @Body('title') title: string,
    // @Body('desc') desc: string,
    // @Body('price') price: number
    @Body() createProductDto: CreateProductDto
  ) {
    const newProduct = await this.productService.createProduct(createProductDto)
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
