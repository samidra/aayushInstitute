import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  images = [

    {
      path: 'assets/16687123188.jpg',
    },
    {
      path: 'assets/166868591120.jpg',
    },
    {
      path: 'assets/166868706633.jpg',
    },
    
  ];
  
}
