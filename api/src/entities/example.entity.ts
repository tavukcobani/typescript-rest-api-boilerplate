import { Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class ExampleEntity extends BaseEntity {
  @PrimaryColumn({
    type: "uuid",
    nullable: false,
  })
  ID: string;
}
