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


  async createGroupPost(
    usersId: number[],
    data: Prisma.GroupPostCreateWithoutUsersInput, // ignore Users properties
  ) {
    try {
      const groupPost = await this.prisma.groupPost.create({
        data: {
          ...data,
          users: {
            create: usersId.map((id) => {
              return { userId: id };
            }),
          },
        },
      });
      return groupPost;
    } catch (error) {
      throw new HttpException('Bad request', 400);
    }
  }

  async getGroupPosts() {
    return this.prisma.groupPost.findMany({
      include: {
        users: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                posts: {
                  select: {
                    id: true,
                    title: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
