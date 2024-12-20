import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
 
})
export class DataBindingDemoComponent {
  title = "My First App!"
  description = "This is my new Angular Application"
  imageURL = '../assets/arc3.jpg'
  w = 500;
  h = 300;
  altText = 'jinx'
  textColor = 'Violet'
  isHighlighted = true;
  yourName = 'Abby';
 

}
