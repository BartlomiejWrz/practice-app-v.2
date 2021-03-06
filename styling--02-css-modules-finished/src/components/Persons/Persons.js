import React, { PureComponent } from 'react';

import Person from './Person/Person';
class Persons extends PureComponent {

	constructor(props) {
		super(props);
		console.log('[Persons.js] Inside Constructor', props);
	}

	componentWillMount() {
		console.log('[Persons.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Persons.js] Inside componentDidMount()');

	}

	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE Person.js] inside componentWillReceiveProps', nextProps);
	}

	//shouldComponentUpdate(nextProps, nextState) {
	//	console.log('[UPDATE Person.js] Inside shouldComponentUpdate', nextProps, nextState);
	//	return nextProps.person !== this.props.persons ||
	//		nextProps.changed !== this.props.changed ||
	//		nextProps.clicked !== this.props.clicked;
	//	//return true;
	//}

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE Person.js] Inside componentWillUpdate', nextProps, nextState);
	}

	componentDidUpdate() {
		console.log('[UPDATE Person.js] Inside componentDidUpdate');
	}

	render() {
		console.log('[Persons.js] Inside render()')
		return this.props.persons.map((person, index) => {
			return <Person
				click={() => this.props.clicked(index)}
				name={person.name}
				age={person.age}
				key={person.id}
				changed={(event) => this.props.changed(event, person.id)} />
		});
	}
}

export default Persons;