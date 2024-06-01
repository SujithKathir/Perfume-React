//products display

import one from "../assets/images/p1.jpg"
import two from "../assets/images/p2.jpg"
import three from "../assets/images/p3.jpg"

function Products(){
    return(
      <div className="container"> 
        <div className="cont">
          <img src={one} alt="pic"></img>
          <p>Fogg wood extream.A captivating blend of fresh florals and warm musk, evoking elegance and timeless allure</p>
        </div>
        <div className="cont">
        <img src={two} alt="pic"></img>
          <p>Fogg wood extream. A captivating blend of fresh florals and warm musk, evoking elegance and timeless allure</p>
        </div>
        <div className="cont">
        <img src={three} alt="pic"></img>
          <p>Fogg wood extream. A captivating blend of fresh florals and warm musk, evoking elegance and timeless allure</p>
        </div>
      </div>
    )
  }

  export default Products