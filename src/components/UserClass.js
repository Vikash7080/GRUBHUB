import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card bg-gray-100 p-4 rounded-lg shadow-md">
        <h1>count: {count}</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>count2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: akshaymarch@34566</h4>
      </div>
    );
  }
}

export default UserClass;
