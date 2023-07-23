import React from 'react'
import Promobar from '../../components/promobar/Promobar'
import Navbar from '../../components/navbar/Navbar'
import Searchres from '../../components/searchres/Searchres'
import Footer from '../../components/footer/Footer'
import Desktopnav from '../../components/desktopnav/Desktopnav'

const List = () => {
  return (
    <div className='search-results'>
      <Promobar />
      <Navbar />
      <Desktopnav />
      <Searchres />
      <Footer />
    </div>
  )
}

export default List