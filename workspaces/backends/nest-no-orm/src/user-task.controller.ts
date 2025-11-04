import { Controller } from '@nestjs/common';
import type { UserTaskService } from '~/user-task.service';

@Controller('UserTask')
export class UserTaskController {
  constructor(private readonly UserTaskService: UserTaskService) {}
}
