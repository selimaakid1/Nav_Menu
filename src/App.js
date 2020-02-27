import React from 'react';
import './App.css';
import Comp from './Comp'
let menu = [
  { text: 'Home', active: true, link: '#' },
  { text: 'Service', active: true, link: '#', subName: ['For entrepreneurs', 'For students', 'For hobbyists']},
  { text: 'Contact', active: true, link: '#' }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comp menu={menu} />
      </header>
    </div>
  );
}
export default App;