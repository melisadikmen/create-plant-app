import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faL, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [FontAwesomeModule, MatButtonModule,MatCardModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  faLeaf = faLeaf;

}
