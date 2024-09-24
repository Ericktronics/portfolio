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

  onSvgClick(iconTittle: 'linkedin' | 'github' | 'resume') {
    switch (iconTittle) {
      case 'linkedin':
        window
          .open(
            'https://www.linkedin.com/in/john-henrick-peralta-2b072b1a2/',
            '_blank'
          )
          ?.focus();
        break;
      case 'github':
        window.open('https://github.com/Ericktronics', '_blank')?.focus();
        break;
      case 'resume':
        let link = document.createElement('a');
        link.download = 'John Henrick Peralta Resume';
        link.href = '../../assets/John Henrick Peralta Resume.pdf';
        link.click();
        break;
    }
  }
}
