import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  yoe: number = 0;
  ngOnInit(): void {
    const date = new Date();
    const startDate = {
      year: 2020,
      month: 11,
    };

    this.yoe = +date.getFullYear() - startDate.year;
  }
}
