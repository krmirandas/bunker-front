import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { AlertService } from "@shared/services/alert.service";
import { LoaderService } from '@shared/services/loader.service';
@Injectable()
export class GeneralInterceptor implements HttpInterceptor {
  lang = "es";

  constructor(private alertService: AlertService, private loader: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.errorCase(error);
        return throwError(error);
      })
    );
  }

  private errorCase(error) {
    this.loader.closeLoader();
    let title = "Se ha generado un error";
    let button = "Intentar de nuevo";
    let data;
    if (error.error) {
      data = error.error;
      switch (error.status) {
        case 400:
          this.alertService.openAlert(title, data.message, button, "error");
          break;
        default:
          this.alertService.openAlert(title, data.message, button, "error");
          break;
      }
    } else {
      switch (error.status) {
        case 400:
          this.alertService.openAlert(
            title,
            "La petición no se envio de manera correcta",
            button,
            "error"
          );
          break;
        default:
          this.alertService.openAlert(title, error.message, button, "error");
          break;
      }
    }
  }
}
