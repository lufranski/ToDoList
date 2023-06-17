import { Status } from 'src/dto/status';
import { ToDoDTO } from '../dto/tododto';

export const toDoList: ToDoDTO[] = [

    {

        name: 'Fare la spesa',
        status: Status.todo
    },
    {

        name: 'Pulire casa',
        status: Status.todo
    },
    {

        name: 'Preparare la cena',
        status: Status.todo
    }
]