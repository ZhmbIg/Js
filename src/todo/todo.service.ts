import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
getId(str): string {
    return 'get request ' + str;
  }

  getAll(): string {
    return 'get meth with no params';
  }

  create(item): string {
    console.log(item);
    return item;
  }

  update(item): string {
    console.log(item);
    return item;
  }

  deleteAll(): string {
    return 'delete with no params';
  }

  delete(id): string {
    return 'id ' + id + 'deleted';
  }

}
