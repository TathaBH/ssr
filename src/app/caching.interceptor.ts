import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, from, of, tap } from 'rxjs';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  constructor() {}

  private cache: Map<string, HttpResponse<any>> = new Map()

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.method != 'GET')
      return next.handle(request);

    const cachedData = this.cache.get("cacheID:1")

    if(cachedData) {
      return of(cachedData.clone())
    } else {
      return next.handle(request).pipe(
        tap((data) => {
          if(data instanceof HttpResponse)
            this.cache.set("cacheID:1", data.clone())
        })
      ) 
    }
    
  }
}
