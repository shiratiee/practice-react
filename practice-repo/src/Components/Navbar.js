import React from 'react';


export default class Navbar extends React.Component {
render () {
  return (
    <nav className="navbar">
        <div className="search-bar">
          <form>
            <input type="text" name="searchKey" />
            <input type="Submit" value="Search" onChange={(evt) => {
              evt.preventDefault();
            }}/>
          </form>
        </div>
    </nav>
  )}
}

