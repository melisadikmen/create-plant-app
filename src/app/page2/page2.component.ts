import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faL, faLeaf,faTractor,faSeedling,faClover } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [MatCardModule,FontAwesomeModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
  faLeaf = faLeaf;
  faTractor=faTractor;
  faSeedling=faSeedling;
  faClover=faClover;
}
