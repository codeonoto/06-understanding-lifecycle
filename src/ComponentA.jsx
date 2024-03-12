import React from 'react';

class ComponentA extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'ComponentA',
    };
    console.log('ComponentA constructor');

    this.setState({ name: 'CA' });
  }

  static getDerivedStateFromProps() {
    console.log('ComponentA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('ComponentA componentDidMount');
  }

  render() {
    console.log('ComponentA render');
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default ComponentA;
