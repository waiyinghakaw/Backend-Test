import Navbar from "../../components/navbar/Navbar"
import Promobar from "../../components/promobar/Promobar"
import Desktopnav from "../../components/desktopnav/Desktopnav"
import "./home.css"

const Home = () => {
  return (
    <div>
        <Promobar />
        <Navbar />
        <Desktopnav />
    </div>
  )
}

export default Home