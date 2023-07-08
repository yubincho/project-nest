import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./common.entity";

@Entity()
export class Product extends CommonEntity {

  @Column()
  public title: string;

  @Column()
  public desc: string;

  @Column()
  public price: number;
}
