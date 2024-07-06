import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Page2Component } from "./page2/page2.component";
import { Page3Component } from "./page3/page3.component";
import { Page4Component } from "./page4/page4.component";
import { Page5Component } from "./page5/page5.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, Page2Component, Page3Component, Page4Component, Page5Component]
})
export class AppComponent {
  title = 'bitki-app';
}
