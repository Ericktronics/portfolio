import { Component } from '@angular/core';
import { TechConfig } from '../Util/types';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  techArray: TechConfig[] = [
    {
      url: '../../assets/icons/angular.png',
      alt: 'AngularLogo',
      width: 80,
      height: 80,
      yoe: '4 yrs',
    },
    {
      url: '../../assets/icons/typescript.png',
      alt: 'AngularLogo',
      width: 80,
      height: 80,
      yoe: '4 yrs',
    },
    {
      url: '../../assets/icons/react.png',
      alt: 'AngularLogo',
      width: 80,
      height: 80,
      yoe: '4 yrs',
    },
    {
      url: '../../assets/icons/nextjs.png',
      alt: 'AngularLogo',
      width: 80,
      height: 80,
      yoe: '4 yrs',
    },
    {
      url: '../../assets/icons/js.png',
      alt: 'AngularLogo',
      width: 80,
      height: 80,
      yoe: '4 yrs',
    },
    {
      url: '../../assets/icons/html-5.png',
      alt: 'AngularLogo',
      width: 80,
      height: 80,
      yoe: '4 yrs',
    },
    {
      url: '../../assets/icons/css-3.png',
      alt: 'AngularLogo',
      width: 80,
      height: 80,
      yoe: '4 yrs',
    },
  ];
}
