import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});
});

describe('<Button />', () => {

	//arrange
	const clickHandler = jest.fn();
	const props = {'clickHandler':clickHandler}
	it('fires onClick function once upon button click', () => {
		const button = shallow(<Button {...props}/>);
		// const instance = button.instance();
		

		const symbolBtn = button.find('.symbol-btn');
		//act
		symbolBtn.simulate('click');

		//assert
		expect(clickHandler).toHaveBeenCalledTimes(1);


	});

	
});
describe('<Button />', () => {
	const props = {'orange':true,'name':'+'};
	it('renders with correct className based on props passed', () => {

		const button = shallow(<Button {...props}/>);
		const correctClassName = 'component-button orange';

		expect(button.containsMatchingElement(
			<div className= {correctClassName}>
			<button >
				{props.name}
			</button>
		</div>
		)).toBe(true);

	
	});

	
});

