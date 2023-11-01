import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title = 'Default title';
  @Input() username = 'Default username';
  @Input() content = 'Default content';
  @Input() imageUrl = 'Default image url';
}
