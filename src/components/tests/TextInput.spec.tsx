import * as React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../TextInput';
import InputError from '../InputError';

describe('TextInput', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(
            <TextInput
                wrapperClassName={''}
                placeholder={''}
                onBlur={jest.fn()}
                onChange={jest.fn()}
                value={''}
                type={''}
                name={''}
            />
        );
    });

    it('renders a <div> wrapper', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renders a div with the class passed as prop', () => {
        wrapper.setProps({ wrapperClassName: 'wrapper-class' });
        expect(wrapper.find('div').hasClass('wrapper-class')).toEqual(true);
    })

    it('renders an <input>', () => {
        expect(wrapper.find('input').length).toEqual(1);
    });

    it('renders an <input> with the placeholder passed in as prop', () => {
        wrapper.setProps({placeholder: 'test-placeholder'})
        expect(wrapper.find('input').props().placeholder).toEqual('test-placeholder');
    });

    it('renders an <input> with the value passed in as prop', () => {
        wrapper.setProps({ value: 'test-value' })
        expect(wrapper.find('input').props().value).toEqual('test-value');
    });

    it('renders an <input> with the type passed in as prop', () => {
        wrapper.setProps({ type: 'test-type' })
        expect(wrapper.find('input').props().type).toEqual('test-type');
    });

    it('renders an <input> with the name passed in as prop', () => {
        wrapper.setProps({ name: 'test-name' })
        expect(wrapper.find('input').props().name).toEqual('test-name');
    });

    it('renders an <input> that triggers the passed in function onChange', () => {
        const passedFunction = jest.fn();
        wrapper.setProps({ onChange: passedFunction });
        wrapper.find('input').simulate('change');
        expect(passedFunction).toHaveBeenCalledTimes(1);
    });

    it('renders an <input> that triggers the passed in function onBlur', () => {
        const passedFunction = jest.fn();
        wrapper.setProps({ onBlur: passedFunction });
        wrapper.find('input').simulate('blur');
        expect(passedFunction).toHaveBeenCalledTimes(1);
    });

    it('renders a <InputError />', () => {
        expect(wrapper.containsMatchingElement(<InputError />)).toEqual(true);
    });
});
