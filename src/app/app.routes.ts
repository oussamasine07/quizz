import { Routes } from '@angular/router';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { QuizzComponent } from './components/pages/quizz/quizz.component';


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
