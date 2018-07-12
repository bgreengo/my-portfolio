import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Serverless",
        'href': "https://github.com/bgreengo/serverless-portfolio",
        'desc': "This is just the source code for my first serverless application but I expect to update this near future.",
        'image': {
            'desc': "Serverless work examples",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Containers",
        'href': "https://github.com/bgreengo/docker-elk",
        'desc': "An easy way to setup an ELK stack using Docker. I plan to fill this with more emphasis on Kubernetes.",
        'image': {
            'desc': "Container work examples",
            'src': "images/example2.png",
            'comment': ""
        }
    },
    {
        'title': "IaC",
        'href': "https://github.com/bgreengo/aws-dr",
        'desc': "In this example, I used AWS CloudFormation to deploy a disaster recovery scenario. This deployment uses Route 53 health checks to send an SNS notification that will trigger a Lambda function to start an AMI in a different region automatically.",
        'image': {
            'desc': "Infrastructure as code work examples",
            'src': "images/example3.png",
            'comment': ""
        }
    },
    {
        'title': "CI/CD",
        'href': "https://github.com/bgreengo/wordpress-aws-terraform-automation",
        'desc': "Using Terraform, I automated a CI/CD pipeline with AWS CodeCommit, CodePipeline, Elastic Beanstalk, IAM, EFS, and RDS.",
        'image': {
            'desc': "CI/CD work examples",
            'src': "images/example4.png",
            'comment': ""
        }
    },
    {
        'title': "Config Mgmt",
        'href': "https://github.com/bgreengo/ansible-examples",
        'desc': "Plan is to update this once I have more config management examples using Ansible or Chef.",
        'image': {
            'desc': "Config Mgmt work examples",
            'src': "images/example5.png",
            'comment': ""
        }
    }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));