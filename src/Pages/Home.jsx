import { About } from "../Components/About/About"
import { Article } from "../Components/Article/Article"
import { Banner } from "../Components/Banner/Banner"
import { Delivery } from "../Components/Delivery/Delivery"
import { Menu } from "../Components/Menu/Menu"
import { Service } from "../Components/Service/Service"
import { Testimonial } from "../Components/Testimonial/Testimonial"

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Banner/>
      <Menu/>
      <About/>
      <Service/>
      <Delivery/>
      <Testimonial/>
      <Article/>
    </div>
  )
}
