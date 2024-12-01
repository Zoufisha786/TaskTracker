import { Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    {
        path: 'Create-Task',
        component: CreateTaskComponent
    },
    {
        path: 'Edit-Task',
        component: EditComponent 
    },
       {
        path: 'View-Task',
        component: ViewComponent
       },
       {
        path: 'Remove-Task',
        component: DeleteComponent
       }
];
