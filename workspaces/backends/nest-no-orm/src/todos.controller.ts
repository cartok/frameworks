import { Controller } from '@nestjs/common';
import type { TodosService } from '~/todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
}
