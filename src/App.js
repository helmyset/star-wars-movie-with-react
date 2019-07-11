import React from 'react';
import List from './list/list.js';
import Navbar from './navbar/navbar.js';
import Select from './list/select/select.js';

function App() {
  return (
    <div>
        <Navbar />
        <Select />
        <List />
    </div>
  );
}

export default App;
