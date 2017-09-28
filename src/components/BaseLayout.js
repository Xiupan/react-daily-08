import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {
  render(){
    return(
      <div>
        <header>
          <nav className="nav justify-content-center">
            <NavLink exact to="/">
              <li className="nav-link">
                Home
              </li>
            </NavLink>
            <NavLink to="/portfolio">
              <li className="nav-link">
                Portfolio
              </li>
            </NavLink>
            <NavLink to="/about">
              <li className="nav-link">
                About
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="nav-link">
                Contact Me
              </li>
            </NavLink>
            <NavLink to="/references">
              <li className="nav-link">
                References
              </li>
            </NavLink>
          </nav>
        </header>
        {this.props.children}
      </div>
    )
  }
}
 export default BaseLayout
