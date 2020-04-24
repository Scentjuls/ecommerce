import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private injector: Injector
  ) { }

  //in interceptor the way we inject authservice is different, we have to use an injector
  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    console.log('authservice', authService.getToken())
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });

    return next.handle(tokenizedRequest)
  }
}
