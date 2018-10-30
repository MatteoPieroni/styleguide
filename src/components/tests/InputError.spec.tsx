import * as React from 'react';
import { shallow } from 'enzyme';
import InputError from '../InputError.tsx';

describe('InputError', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <InputError
                className={''}
                visible={''}
                errorMessage={''}
            />
        );
    });

    it('renders two <span>', () => {
        expect(wrapper.find('span').length).toEqual(1);
    });

    it('has class hide if props.visible is true', () => {
        wrapper.setProps({ visible: false });
        expect(wrapper.find('span').hasClass('hide'))
    })

    it('has class hide if props.visible is a string', () => {
        wrapper.setProps({ visible: 'This is a string' });
        expect(wrapper.find('span').hasClass('hide'))
    })

    it('renders a string if props.errorMessage is a string', () => {
        wrapper.setProps({ errorMessage: "this is an error message" })
        expect(wrapper.find('span').text()).toEqual('this is an error message');
    })
});
