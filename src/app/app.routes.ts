import { Routes } from '@angular/router';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { QuizzComponent } from './components/pages/quizz/quizz.component';
import { QuestionComponent } from './components/pages/question/question.component';
import { HistoryComponent } from './components/pages/history/history.component';


export const routes: Routes = [
    {
        path: "",
        component: SignUpComponent
    },
    {
        path: "quizz",
        component: QuizzComponent
    },
    {
        path: "question",
        component: QuestionComponent
    },
    {
        path: "history",
        component: HistoryComponent
    }
];
