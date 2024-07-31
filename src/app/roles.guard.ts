import { CanActivateFn, Router } from '@angular/router';

export const rolesGuard: CanActivateFn = (route, state) => {
  const roles = localStorage.getItem("roles");
  const router = new Router();

  if (roles == "addmin") {
    return true
  } else {
    router.navigate([""]);
    return false
  }
};
