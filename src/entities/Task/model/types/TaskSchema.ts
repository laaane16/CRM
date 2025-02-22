import { EntityState, SerializedError } from '@reduxjs/toolkit';
import { IProfile } from '../../../Profile';
import { UserSchema } from '../../../User';

enum Priority {
  HIGH = 'high',
  MIDDLE = 'middle',
  LOW = 'low',
}

export interface ITask {
  id: number;
  userId: number;
  title: string;
  priority: Priority;
  deadline: string;
  user: UserSchema;
}

export interface TasksSchema extends EntityState<ITask, number> {
  isLoading: boolean;
  error?: SerializedError;
  ids: number[];
  entities: Record<number, ITask>;
}
