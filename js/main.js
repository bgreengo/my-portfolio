import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Serverless",
        'image': {
            'desc': "Serverless work examples",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Containers",
        'image': {
            'desc': "Container work examples",
            'src': "images/example2.png",
            'comment': ""
        }
    },
    {
        'title': "IaC",
        'image': {
            'desc': "Infrastructure as code work examples",
            'src': "images/example3.png",
            'comment': ""
        }
    }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));