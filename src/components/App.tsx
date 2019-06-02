import * as React from "react";
import { Component } from "react";
import { ReactNode } from "react";

interface AppDetail {
  title: string;
  mark: string;
}

class App extends Component<{}> {
  public render(): ReactNode {
    let detail = App.appDetail("SPF");
    return (
      <div className="App">
        <h1>{detail.title + detail.mark}</h1>
      </div>
    );
  }

  private static appDetail(name: string): AppDetail {
    return { title: name, mark: "!" };
  }
}

export default App;
