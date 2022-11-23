import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-name-card',
  templateUrl: './app-name-card.component.html',
  styleUrls: ['./app-name-card.component.css']
})
export class AppNameCardComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  constructor() { }

  ngOnInit(): void {
  }

}
