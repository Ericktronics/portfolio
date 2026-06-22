import { Component } from '@angular/core';

@Component({
  selector: 'app-credentials-awards',
  templateUrl: './credentials-awards.component.html',
  styleUrls: ['./credentials-awards.component.scss'],
})
export class CredentialsAwardsComponent {
  credentialsArray = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      date: 'March 2024',
      description:
        'Certification demonstrating expertise in designing distributed systems on AWS.',
    },
    {
      title: 'AWS Certified Developer – Associate',
      date: 'March 2024',
      description:
        'Certification validating proficiency in developing and maintaining applications on AWS.',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      date: 'March 2024',
      description:
        'Foundational certification for understanding AWS Cloud concepts and services.',
    },
    {
      title: 'Microsoft Azure Fundamentals AZ-900',
      date: 'N/A',
      description:
        'Foundational certification for understanding Microsoft Azure cloud services and concepts.',
    },
    {
      title: 'Accenture AI Bootcamp',
      date: 'June 2022',
      description:
        'Completed a comprehensive bootcamp focused on AI technologies and applications.',
    },
    {
      title: 'Accenture Java Back-end Bootcamp',
      date: 'April 2021',
      description:
        'Intensive training program on Java back-end development practices.',
    },
  ];

  awardsArray = [
    {
      imgSrource: '../../assets/images/2025_oct_eom.JPG',
      imgWebp: '../../assets/images/2025_oct_eom.webp',
      title: 'October 2025 Employee of the Month',
    },
    {
      imgSrource: '../../assets/images/2025_rockstart.jpg',
      imgWebp: '../../assets/images/2025_rockstart.webp',
      title: '2025 Rockstar Award',
    },
    {
      imgSrource: '../../assets/images/2024_rockstar.png',
      imgWebp: '../../assets/images/2024_rockstar.webp',
      title: '2024 Rockstar Contributor Award',
    },
    {
      imgSrource: '../../assets/images/2025_malasakit.jpg',
      imgWebp: '../../assets/images/2025_malasakit.webp',
      title: '2025 Malasakit Award',
    },
    {
      imgSrource: '../../assets/images/2025_feb_tom.png',
      imgWebp: '../../assets/images/2025_feb_tom.webp',
      title: 'February 2025 Team of the Month',
    },
    {
      imgSrource: '../../assets/images/2025_jul_tom.JPG',
      imgWebp: '../../assets/images/2025_jul_tom.webp',
      title: 'July 2025 Team of the Month',
    },
    {
      imgSrource: '../../assets/images/2024_jan_tom.png',
      imgWebp: '../../assets/images/2024_jan_tom.webp',
      title: 'January 2024 Team of the Month',
    },
    {
      imgSrource: '../../assets/images/2024_june_tom.png',
      imgWebp: '../../assets/images/2024_june_tom.webp',
      title: 'June 2024 Team of the Month',
    },
  ];
}
