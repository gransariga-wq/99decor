import { ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  loading = false;

  constructor(
    private loader: LoaderService,
    private cdr: ChangeDetectorRef
  ) {
    this.loader.loading$.subscribe(val => {
      this.loading = val;
      this.cdr.markForCheck(); // 🔥 FORCE repaint
    });
  }

}
