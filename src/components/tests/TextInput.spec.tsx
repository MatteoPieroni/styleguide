import * as React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../TextInput.tsx';
import InputError from '../InputError.tsx';

describe('TextInput', () => {
    let wrapper;
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

    it('renders a <input>', () => {
        expect(wrapper.find('input').length).toEqual(1);
    });

    it('renders a <InputError />', () => {
        expect(wrapper.containsMatchingElement(<InputError />)).toEqual(true);
    });

    it('renders a div with the class passed as prop', () => {
        wrapper.setProps({ wrapperClassName: 'wrapper-class' });
        expect(wrapper.find('div').hasClass('wrapper-class')).toEqual(true);
    })
});
