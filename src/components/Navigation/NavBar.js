import React, { Component } from 'react'
import { Link } from "react-router"

import SVG from "svg-inline-react"

import "./NavBar.sass"

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <ul className="NavBar__List">

          {Object.values(this.props.links).map((link, i) => (
            <li key={i} >
              <Link
                to={link.route}
                className={`NavBar__List__Item`}
                activeClassName={`NavBar__List__Item--Active`}
              >

                {link.badge
                  ? <div className="NavBar__List__Item__Badge animated bounceIn">
                      {link.badge}
                    </div>
                  :  undefined}

                <SVG src={link.svg} />

                {link.title}

              </Link>
            </li>
          ))}

        </ul>
      </div>
    )
  }

}

export default NavBar
