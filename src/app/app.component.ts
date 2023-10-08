import { AfterViewInit, Component, ElementRef, Injector, ViewChild } from '@angular/core'

import { createEditor } from './rete'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('reteEditor') container!: ElementRef<HTMLElement>

  constructor(private injector: Injector) { }

  async ngAfterViewInit() {
    await createEditor(this.container.nativeElement, this.injector);

  }
}
