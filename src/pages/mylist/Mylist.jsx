import Desktopnav from "../../components/desktopnav/Desktopnav"
import Navbar from "../../components/navbar/Navbar"
import Promobar from "../../components/promobar/Promobar"
import Myproduct from "../../components/myproduct/Myproduct"
import Footer from "../../components/footer/Footer"


const Mylist = () => {
  return (
    <div className='view-listing'>
        <Promobar />
        <Navbar />
        <Desktopnav />
        <Myproduct />
        <Footer />
    </div>
  )
}

export default Mylist