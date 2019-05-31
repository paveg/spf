import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactNode } from "react";

class App extends React.Component {
  public render(): ReactNode {
    let name = App.appName("App");
    return (
      <div className="App">
        <h1>{name}</h1>
      </div>
    );
  }

  private static appName(name: string): string {
    return name + "!";
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
