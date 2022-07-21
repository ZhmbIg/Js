import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
getReq(): string {
    return 'you have get request';
  }
postReq(): string {
    return 'you have posted request';
  }
putReq(): string {
    return 'you have put request';
  }
deleteReq(): string {
    return 'you have deleted request';
  }
}
