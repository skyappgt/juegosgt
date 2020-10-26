import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <p>Desarrollado por <a href='https://www.facebook.com/itskyapps'>SkyApps</a> Guatemala,C.A. 2019</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
