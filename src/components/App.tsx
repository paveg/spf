import * as React from "react";
import { Component } from "react";
import { ReactNode } from "react";

class App extends Component<{}> {
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

export default App;
