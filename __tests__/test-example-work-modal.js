import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal, { ExampleWorkBubble } from '../js/example-work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myExample = {
  'title': "Serverless",
  'href': "https://example.com",
  'desc': "Aliqua anim reprehenderit ipsum laborum ea veniam incididunt.",
  'image': {
    'desc': "Serverless work examples",
    'src': "images/example1.png",
    'comment': ""
  }
};

describe("ExampleWorkModal component", () => {
    let component = shallow(<ExampleWorkModal example={myExample}
      open={false}/>);

    let openComponent = shallow(<ExampleWorkModal example={myExample}
      open={true}/>);

    let anchors = component.find("a"); 

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        expect(anchors.prop('href')).toEqual(myExample.href)
    });

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    })
});