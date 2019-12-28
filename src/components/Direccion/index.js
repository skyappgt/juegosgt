import React from 'react'
import config from '../../../config'

import facebook from '../../assets/img/social/facebook.svg'
import instagram from '../../assets/img/social/instagram.svg'
import twitter from '../../assets/img/social/twitter.svg'
import wasap from '../../assets/img/social/iconwasap.svg'

const Direccion = () => {
  return (
      <div className='container'>
        <div className='content '>
          <p>{config.firm}  </p>
            <p> ✉️   {config.email}</p>
            <p> 📞  {config.tel}</p>
            <p> 🏢  {config.dire}</p>
        <div className="column social" >
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '2em', height: 'auto' }}
                  />
                </a>
                {/* <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '2em', height: 'auto' }}
                  />
                </a>
                <a title="Whatsapp" href="https://wa.me/50245625974?text=Hola%20me%20puedes%20enviar%20mas%20información!">
                  <img
                    src={wasap}
                    alt="Wasap"
                    style={{ width: '2em', height: 'auto' }}
                  />
                </a>
              </div>
        </div>
      </div>
  )
}

export default Direccion
