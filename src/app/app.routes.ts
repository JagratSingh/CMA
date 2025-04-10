import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        canActivate: [authGuard],
        component: HomeComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./books/list-books/list-books.component')
                        .then(m => m.ListBooksComponent)
            },
            {
                path: 'add',
                canActivate: [authGuard],
                loadComponent: () =>
                    import('./books/add-books/add-books.component')
                        .then(m => m.AddBooksComponent)
            },
            {
                path: 'edit/:id',
                canActivate: [authGuard],
                loadComponent: () =>
                    import('./books/edit-books/edit-books.component')
                        .then(m => m.EditBooksComponent)
            },
            {
                path: 'book/:id',
                loadComponent: () =>
                    import('./books/detail-books/detail-books.component')
                        .then(m => m.DetailBooksComponent)
            }, 
            {
                path: 'cart',
                loadComponent: () =>
                    import('./books/cart/cart.component')
                        .then(m => m.CartComponent)
            }
        ]
    }
];
