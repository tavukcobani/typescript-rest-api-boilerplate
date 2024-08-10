import { Column, Entity } from "typeorm";

@Entity()
export class BaseEntity {
  @Column({
    length: 40,
    type: "varchar",
    nullable: true,
  })
  created_by: string;

  @Column({
    nullable: true,
  })
  created_dt: Date;

  @Column({
    length: 40,
    type: "varchar",
    nullable: true,
  })
  updated_by: string;

  @Column({
    nullable: true,
  })
  updated_dt: Date;
}
