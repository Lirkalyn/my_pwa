import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hello$ = this.httpClient.get('api/hello', { responseType: 'text' });
  constructor(private httpClient: HttpClient) {}
}
//export class AppComponent {
//  title = 'my-pwa';
//}