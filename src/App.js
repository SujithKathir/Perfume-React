

import Navbar from "./components/Navbar"
import Aboutus from "./components/Aboutus"
import Products from "./components/Products"
import Search from "./components/Search"
import Footer from "./components/Footer"

function App()
{
    return(
       <>
         <Navbar></Navbar>
        <Search></Search>
        <Products></Products>
        <Aboutus></Aboutus>
        <Footer></Footer>
       </>
    )
}

export default App