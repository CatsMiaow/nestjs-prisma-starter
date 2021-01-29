import { Injectable } from '@nestjs/common';

import { User } from '.';

@Injectable()
export class UserService {
  public async fetch(username: string): Promise<User & { password: string }> {
    return Promise.resolve({
      id: 'test',
      password: 'crypto',
      name: username,
      email: `${username}@test.com`,
    });
  }
}