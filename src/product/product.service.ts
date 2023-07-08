import { Injectable } from '@nestjs/common';
import { Product } from "./entities/product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  // product get all
  async getAllProducts() {
    const products = await this.productRepository.find()
    return products
  }

  // product create
  async createProduct(title: string, desc: string, price: number) {
    const newProduct = await this.productRepository.create({
      title, desc, price
    })
    await this.productRepository.save(newProduct);
    return newProduct;
  }

  // product getById
  async getByIdOfProduct(id: string) {
    const product = await this.productRepository.findOneById(id)
    return product
  }

  // product delete by id
  async deleteByIdOfProduct(id: string) {
    await this.productRepository.delete(id)
    return 'deleted'
  }

}
