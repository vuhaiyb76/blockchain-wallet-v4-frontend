import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const PublicLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className='container-fluid h-100 bg-primary'>
        <div className='row h-25 align-items-start'>
          <div className='col'>
            <Header />  
          </div>
        </div>  
        <div className='row h-50 justify-content-center align-items-center'>
          <div className='col-12'>
            <Component {...matchProps} />
          </div>
        </div>
        <div className='row h-25 align-items-end'>
          <div className='col'>
            <Footer />
          </div>
        </div>  
      </div>
    )} />
  )
}

export default PublicLayout
