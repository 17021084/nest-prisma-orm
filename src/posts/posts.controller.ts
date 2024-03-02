import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostDto } from './dtos/CreatePost.dto';
import { PostsService } from './posts.service';
import { CreateGroupPostDto } from './dtos/CreateGroupPost.dto';

@Controller('posts')
export class PostsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private postsService: PostsService) { }

  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() { userId, ...createPostDto }: CreatePostDto) {
    return this.postsService.createPost(userId, createPostDto);
  }

  @Post('/group')
  @UsePipes(ValidationPipe)
  createGroupPost(
    @Body() { userIds, ...createGroupPostDto }: CreateGroupPostDto,
  ) {
    return this.postsService.createGroupPost(userIds, createGroupPostDto);
  }

  //Get all group posts
  @Get('/group')
  getGroupPosts() {
    return this.postsService.getGroupPosts();
  }
}
