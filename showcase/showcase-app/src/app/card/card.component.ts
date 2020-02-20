import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() inputtedImage: string;
  @Input() cardTitle: string;
  @Input() cardDescription: string;

  constructor() { }

  ngOnInit() {
  }

}
