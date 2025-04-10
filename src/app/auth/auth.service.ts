import { Router } from "@angular/router";
import { User } from "../app.model";
import users from "./user.data";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    user: User | null = null;

    constructor(private router: Router) {
        const user = localStorage.getItem('user');
        if (user) {
            this.user = JSON.parse(user);
        }
    }

    login({ email, password }: { email: string; password: string }): boolean {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (!user) {
          return false;
        }
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate([''], { replaceUrl: true });
        return true;
      }

    logout(): void {
        this.user = null;
        localStorage.removeItem('user');
        this.router.navigate(['login'], { replaceUrl: true });
    }

    isUserLoggedIn(): boolean { 
        return !!this.user;
    }

    isLibrarian(): boolean {
        return this.user?.role === 'LIBRARIAN';
    }
}