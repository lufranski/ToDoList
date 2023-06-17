import { Status } from './status';

export class ToDoDTO{

    name: string;
    status: Status;

    constructor(){

        this.name = '',
        this.status = Status.todo
    }
}