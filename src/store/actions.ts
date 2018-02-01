export const ACTION = 'Some Action';
export const ADD_TODO_ACTION = 'Add Todo';

export class AddTodoAction {
  readonly type = ADD_TODO_ACTION;
  constructor(public payload: {label: string, complete: boolean}) {}
}
