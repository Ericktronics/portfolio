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
}
