import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactNode } from "react";

class App extends React.Component {
  public render(): ReactNode {
    return (
      <div className="App">
        <h1>App!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
