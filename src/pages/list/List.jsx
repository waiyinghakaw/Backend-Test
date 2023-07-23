import React from 'react'
import Promobar from '../../components/promobar/Promobar'
import Navbar from '../../components/navbar/Navbar'
import Searchres from '../../components/searchres/Searchres'
import Footer from '../../components/footer/Footer'
import Desktopnav from '../../components/desktopnav/Desktopnav'
import { useLocation } from 'react-router-dom'

const List = () => {

  const location = useLocation();

  const searchQuery = location.state && location.state.searchQuery;

  console.log(location);

  return (
    <div className='search-results'>
      <Promobar />
      <Navbar />
      <Desktopnav />
      <Searchres searchQuery={searchQuery}/>
      <Footer />
    </div>
  )
}

export default List