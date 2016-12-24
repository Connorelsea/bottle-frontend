import React, { Component } from 'react'
import { Link } from "react-router"

const links = [
  { title: "Dashboard", route: "/" },
  { title: "Meetings",  route: "/meetings" },
  { title: "Parking",   route: "/parking" },
]

class NavigationList extends Component {
  render() {
    return (
      <ul className="Navigation-List">

        {links.map((link, i) => (
          <li key={i} >
            <Link
              to={link.route}
              className="Navigation-List__Item"
              activeClassName="Navigation-List__Item--Active"
              activeOnlyWhenExact={true}
            >
              {link.title}
            </Link>
          </li>
        ))}

      </ul>
    )
  }
}

export default NavigationList
