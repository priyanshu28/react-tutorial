import React from "react";
/* Loading a class based component means you are creating an INSTANCE of a class */
class ClassCompnentExample extends React.Component {
  // constructor - to get props
  constructor(props) {
    // super props -
    super(props);

    this.state = {
      count: 0,
      someOtherState: "abc",
      data: null,
    };

    console.log(props);
  }

  //   componentDidMount() {
  //     // API call here
  //   }

  async componentDidMount() {
    const res = await fetch("url");
    const data = await res.json();

    this.setState({
      data: data,
    });
  }

  render() {
    const { name, id } = this.props;

    return (
      <>
        <div>Class Component {name}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update State
        </button>
      </>
    );
  }
}

export default ClassCompnentExample;
