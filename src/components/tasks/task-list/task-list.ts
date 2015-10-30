import { Component, NgFor, View } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { ITask } from 'core/task/task';
import { TaskStore } from 'core/task/task-store';
import { TaskItem } from '../task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';


@Component({
  selector: 'task-list'
})

@View({
  directives: [
    NgFor,
    RouterLink,
    TaskItem
  ],
  pipes: [
    TaskListFilterPipe
  ],
  styleUrls: ['components/tasks/task-list/task-list.css'],
  templateUrl: 'components/tasks/task-list/task-list.html'
})

export class TaskList {
  filter: string;
  tasks: ITask[];

  constructor(store: TaskStore, params: RouteParams) {
    this.filter = params.get('filter');

    store.ready.then(() => {
      this.tasks = store.list;
    });
  }
}