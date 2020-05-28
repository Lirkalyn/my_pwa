import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hello$ = this.httpClient.get('api/hello', { responseType: 'text' });
  updateAvailable$ = this.swUpdate.available;

  constructor(private httpClient: HttpClient,
    private swUpdate: SwUpdate) {}
    async update() {
      await this.swUpdate.activateUpdate();
      document.location.reload();
    }
}
//export class AppComponent {
//  title = 'my-pwa';
//}