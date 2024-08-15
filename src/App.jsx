import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Subscribe from "./components/Projets/Projets"
const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero/>
      <Services />
      <Banner />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default App