import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = authService.isUserLoggedIn();

  if(isLoggedIn  && state.url === '/login'){
    console.log('User is logged in');
    router.navigate([''], { replaceUrl: true });
    return false;
  }

  if (!isLoggedIn) {
    console.log('User is not logged in, redirecting to login page.');
    router.navigate(['login'], { replaceUrl: true });
    return false;
  }

  return true;
};
