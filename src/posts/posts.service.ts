import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) { }

  async createPost(_userId: number, data: Prisma.PostCreateWithoutUserInput) {
    try {
      const post = await this.prisma.post.create({
        data: {
          ...data,
          userId: _userId,
        },
      });
      return post;
    } catch (error) {
      throw new HttpException('Bad request', 400);
    }
  }
}
