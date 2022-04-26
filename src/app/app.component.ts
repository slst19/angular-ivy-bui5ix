import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.http
      .get('/lineup/dslr/df/img/sample/img_01.jpg', {
        responseType: 'blob',
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      )
      .subscribe((data: any) => {
        var blob = new Blob([data]);
        var fileURL = URL.createObjectURL(blob);
        window.open(fileURL);
        console.log(data);
      });
  }
  name = 'Angular ' + VERSION.major;
}
