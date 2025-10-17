import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
