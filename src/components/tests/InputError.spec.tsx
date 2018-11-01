import * as React from 'react';
import { shallow } from 'enzyme';
import InputError from '../InputError';

describe('InputError', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(
            <InputError
                className={''}
                visible={''}
                errorMessage={''}
            />
        );
    });

    it('renders a <span> element', () => {
        expect(wrapper.find('span').length).toEqual(1);
    });

    it('has class "error-input"', () => {
        expect(wrapper.find('span').hasClass('error-input'))
    })

    it('has no class hide if props.visible is true', () => {
        wrapper.setProps({ visible: true });
        expect(wrapper.find('span').hasClass('hide')).toEqual(false)
    })

    it('has class hide if props.visible is true', () => {
        wrapper.setProps({ visible: false });
        expect(wrapper.find('span').is('.hide')).toEqual(true)
    })

    it('renders a string if props.errorMessage is a string', () => {
        wrapper.setProps({ errorMessage: "this is an error message" })
        expect(wrapper.find('span').text()).toEqual('this is an error message');
    })
});
