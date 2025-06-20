import { Component } from '@angular/core';
import { Experience, SubItem } from '../Util/types';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experienceArray: Experience[] = [
    {
      company: 'Samsung Research & Development Philippines (SRPH)',
      position: 'Engineer II',
      duration: 'May 2023 - Present',
      items: [
        'Integrated AWS Key Generator service to an Admin Server to minimize AWS access.',
        'POC session update for every page change in one of our Admin Portal.',
        'Created an Admin Portal to 2024 feature of Bixby named Galaxy AI Admin Portal (GAAP).',
        'Created 9 pages with CRUD operations in GAAP and added Unit Testing for 28 different files.',
        'Handled all authentication-related tasks in GAAP with session update for every click and every page change.',
        'Set up different branches for every environment of GAAP with CI/CD using GitHub Actions.',
        'Set up S3 Bucket replication in different AWS accounts, Added prefix event notification trigger to Lambdas.',
        'Create Different environment CICD pipeline for Dockerize Next js to be deployed Next js in AWS ECS.',
        'Seamless Authentication connection between 2 admin portals.',
        'CRUD Operation for an API using Express js with TypeScript.',
        'Implementation of MFA in one of our Admin Portal using Amazon Cognito.',
      ],
    },
    {
      company: 'Accenture Inc.',
      position: 'AI Engineering Analyst',
      duration: 'June 2022 - May 2023 (11 Months)',
      items: [
        'Facilitated knowledge transfer to associates and new team members with Git processes, tools, and technologies.',
        'Integrated Role-Based Access Control for the platform to be commercialized and added usage tracking in the platform.',
        'Lead the presentation of usage tracking to the whole project to be implemented in future workstreams.',
        "Added a new industry in one of the platform's modules.",
        'Repointed APIs during database migration.',
        'Volunteered to be the person in charge for our team in defect fixing during deployment.',
        'Acted as our team’s representative in Impact Analysis meetings.',
        'Acted as the point of contact for RBAC-related concerns.',
        'Documented workstream in Atlassian.',
      ],
    },
    {
      company: 'Accenture Inc.',
      position: 'Associate Software Engineer',
      duration: 'Nov 2020 - June 2022 (1 yr and 7 Months)',
      items: [
        'Attended 3 bootcamps (Analyst Bootcamp, Java Back-end bootcamp, AI Bootcamp).',
        'Facilitate and drive meetings during support calls with clients.',
        {
          text: 'Lead the documentation of L2 support recurring client issues',
          subItems: [
            'Flushing old data in Elasticsearch',
            'Purging queues in RabbitMQ',
            'Back-up and truncating in Arango DB',
            'Migrating old version of the platform',
          ],
        },
        'Integrated and X-pack for removing security pop up on ELK Stack.',
        'Lead in remediation of information security issues on AWS EC2.',
        'Timely and accurate execution of test plan.',
        "Added feature to run Python scripts on Accenture's RPA.",
        'Deploying ELK Stack on Amazon Elastic Kubernetes Service.',
      ],
    },
  ];

  isString(item: string | SubItem): item is string {
    return typeof item === 'string';
  }

  isSubItem(item: string | SubItem): item is SubItem {
    return (
      (item as SubItem).text !== undefined &&
      (item as SubItem).subItems !== undefined
    );
  }
}
