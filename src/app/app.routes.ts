import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QuizzComponent } from './quizz/quizz.component';

export const routes: Routes = [
    {
        path: "",
        component: SignUpComponent
    },
    {
        path: "quizz",
        component: QuizzComponent
    }
];
