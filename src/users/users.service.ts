import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  // Prisma.UserCreateInput is generated by Prisma
  createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  getUsers() { }

  getUsersById() { }
}
