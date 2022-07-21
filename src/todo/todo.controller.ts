import { TodoService } from './todo.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getReq(): string {
    return this.todoService.getReq();
  }
  @Post()
    postReq(): string {
      return this.todoService.postReq();
    }
  @Put()
    putReq(): string {
      return this.todoService.putReq();
    }
  @Delete()
    deleteReq(): string {
      return this.todoService.deleteReq();
    }
}
