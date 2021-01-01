import React from 'react';
import SVG from './SVG';

const App = () => {
  return (
    <React.Fragment>
      <SVG name="circle" fill="blue" stroke="red" />
      <SVG name="rectangle" fill="#fff000" />
    </React.Fragment>
  );
}

export default App;
