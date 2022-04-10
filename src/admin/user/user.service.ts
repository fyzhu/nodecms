import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'admin',
      password: 'fy6174',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
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
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
