import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('HTTP Request:', req.method, req.url);
  
  const modifiedReq = req.clone({
    setHeaders: {
      'X-Custom-Header': 'Angular-Portfolio'
    }
  });

  const startTime = Date.now();

  return next(modifiedReq).pipe(
    finalize(() => {
      const elapsed = Date.now() - startTime;
      console.log(`Request to ${req.url} took ${elapsed}ms`);
    })
  );
};