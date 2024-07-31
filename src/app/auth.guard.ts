import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const token = localStorage.getItem("access_token");
  const router = new Router();

  if (token) {
    return true
  } else {
    router.navigate([""]);
    return false
  }
};
