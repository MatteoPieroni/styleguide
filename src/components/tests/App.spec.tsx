import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a <div>', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
});