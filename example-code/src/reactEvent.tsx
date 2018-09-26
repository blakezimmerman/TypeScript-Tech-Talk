import React from "react";

interface IProps {}

interface IState {
  inputValue: string;
}

export class MyComponent extends React.Component<IProps, IState> {
  onInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.currentTarget.value
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.onInput} />
      </div>
    );
  }
}
