import React, {Component} from 'react'

class Contact extends Component {
  render(){
    return(
      <div className="container">
        <div className="card">
          <h1>
            A contact page!
          </h1>
          <ul>
            <li>
              Alan Hong
            </li>
            <li>
              <a href="https://github.com/Xiupan">My GitHub Portfolio</a>
            </li>
            <li>
              <a href="http://alanhong.io">My actual portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
 export default Contact
