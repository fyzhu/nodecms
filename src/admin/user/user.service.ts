import { EntityManager, EntityRepository, MikroORM } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

// This should be a real class/interface representing a user entity
export type IUser = any;

@Injectable()
export class UserService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  login(): object {
    return {
      token: 12345,
    };
  }
  info(): object {
    return {
      username: 'admin',
      roles: ['admin'],
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      nickname: 'super admin',
    };
  }
  logout(): string {
    return 'success';
  }
  async findOne(username: string): Promise<IUser | undefined> {
    return this.userRepository.findOne({ username });
  }
}
