import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '99decor';

  constructor(private router: Router, private loader: LoaderService) {
     this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        this.loader.show();
      }

      if (event instanceof NavigationEnd) {
        setTimeout(() => this.loader.hide(), 300); // 👈 MUST
      }

    });
  }
}
