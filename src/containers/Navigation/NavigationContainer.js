import React, { Component } from 'react'

import NavBar from "components/Navigation/NavBar"

import House    from "icons/house.svg"
import Envelope from "icons/envelope.svg"
import Edit     from "icons/edit.svg"
import Avatar   from "icons/avatar.svg"

class NavigationContainer extends Component {

  generateLinks(options = {}) {

    if (!options.feed) options.feed = {}
    if (!options.chat) options.chat = {}
    if (!options.posts) options.posts = {}
    if (!options.me) options.me = {}

    return {
      feed:  { route: "/",      title: "Feed",    svg: House,    ...options.feed },
      chat:  { route: "/chat",  title: "Chat",    svg: Envelope, ...options.chat },
      posts: { route: "/posts", title: "Posts",   svg: Edit,     ...options.posts },
      me:    { route: "/me",    title: "Profile", svg: Avatar,   ...options.me }
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      links: this.generateLinks()
    }
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("Adding badge")
      this.setState({ links: this.generateLinks({ chat: { badge: 1 } }) })
    }, 2000)

    setTimeout(() => {
      console.log("Adding badge")
      this.setState({ links: this.generateLinks({ chat: { badge: 3 } }) })
    }, 3000)

    setTimeout(() => {
      console.log("Adding badge")
      this.setState({ links: this.generateLinks({ chat: { badge: 7 } }) })
    }, 4500)
  }

  render() {
    return (
      <div className="NavigationContainer">
        <NavBar links={this.state.links} />
      </div>
    )
  }

}

export default NavigationContainer
