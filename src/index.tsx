import * as React from "react";
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Initialize!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
