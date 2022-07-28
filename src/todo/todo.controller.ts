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

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

 @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Get(':id')
  getId(@Param('id') id: number) {
    return this.todoService.getId(id);
  }

  @Post()
  create(@Body() task: string): string {
    return this.todoService.create(task);
  }

  @Put()
  update(@Body() task: string,): string {
    return this.todoService.update(task);
  }

  @Delete()
  deleteAll(): string {
    return this.todoService.deleteAll();
  }

  @Delete(':id')
  deleteMeth(@Param('id') id: number) {
    return this.todoService.delete(id);
  }


}
