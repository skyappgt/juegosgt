import React, { Component } from 'react'
import Helmet from 'react-helmet'
import '../../assets/sass/styles.sass'
import config from '../../../config'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Location } from '@reach/router';
import Direccion from '../Direccion'

class Layout extends Component {
  
  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }
  
  render () {
    return (
      <div id='layout-wrapper'>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
        {/* <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} /> */}
        <div id='content-wrapper'>
          {this.props.children}
        </div>
        <Direccion />
        <Footer />
      </div>
    )
  }
}

export default Layout
