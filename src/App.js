import './App.css'
import ProductQuality from './Components/MahsulotInformation/ProductQuality'
import Ourproduct from './Components/Ourproduct/Ourproduct'
import Services from './Components/Services/Services'
import MainCarousel from './Components/MainCarousel/MainCarousel'
import Products from './Components/Products/Products'

function App() {
    return (
        <div className='App'>
            <div className='mb-5'>
                <MainCarousel />
                <Services />
                <Ourproduct />
                <ProductQuality />
                <Products />
            </div>
        </div>
    )
}

export default App
