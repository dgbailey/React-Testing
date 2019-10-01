import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});
});

describe('<Panel />', () => {
	it('renders with current 19 Button Components', () => {
		const panel = shallow(<Panel />);
		const buttons = panel.find('Button');
		expect(buttons.length).toBe(19);

	});
});

