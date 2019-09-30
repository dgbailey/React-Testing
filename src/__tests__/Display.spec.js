import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});
});

describe('<Display />', () => {
	it('displays destructured value received from props', () => {
		const props = {'value':'9'}
		const display = shallow(<Display {...props}/>);
		const valueDisplay = display.find('.value');
		expect(valueDisplay.text()).toEqual(props.value);

	});
});
