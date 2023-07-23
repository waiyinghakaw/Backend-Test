import Navbar from "../../components/navbar/Navbar"
import Promobar from "../../components/promobar/Promobar"
import Desktopnav from "../../components/desktopnav/Desktopnav"
import Banner from "../../components/banner/Banner"
import Product from "../../components/product/Product"
import Footer from "../../components/footer/Footer"

import "./home.css"


const Home = () => {
  return (
    <div>
        <Promobar />
        <Navbar />
        <Desktopnav />
        <Banner />
        <Product />
        <Footer />
    </div>
  )
}

export default Home