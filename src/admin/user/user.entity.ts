import { IsEmail } from 'class-validator';
import {
  Collection,
  Entity,
  EntityDTO,
  EntityRepositoryType,
  ManyToMany,
  OneToMany,
  PrimaryKey,
  Property,
  wrap,
} from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  id: number; // 标记为主列，值自动生成

  @Property()
  username: string;

  @Property({ hidden: true })
  password: string;

  @Property({ hidden: true })
  @IsEmail()
  email: string;
}
