import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import ProductsList from './components/ProductsList'
import Catalogue from './components/Catalogue'
import Footer from './components/Footer'
import imageMain from './assets/swiss.jpg'
import image1 from './assets/keyknife.jpg'
import image2 from './assets/glass.jpg'
import image3 from './assets/comb.jpg'
import image4 from './assets/meteoro.jpg'

function App() {

  return (
    <section className='app'>
      <Header title="Agricultura" desc1="Oferecemos produtos agrícolas que simplificam sua rotina e aumentam sua produtividade." desc2="Encontre soluções modernas para cuidar da terra com eficiência e sustentabilidade"/>
      <Product
       image={imageMain} 
       title="Canivete Multiusos Texwol: A Versatilidade num Objecto Compacto" 
       desc1="Este canivete multiusos é um exemplo clássico da engenharia Suíça. Com o seu característico cabo vermelho e múltiplas ferramentas em aço inoxidável, representa mais do que um simples instrumento de corte - é um verdadeiro companheiro para campistas e entusiastas do outdoor."
       desc2="As suas diversas funcionalidades, que incluem lâminas de diferentes tamanhos, tesouras, saca-rolhas e alicates, tornam-no numa ferramenta extremamente útil para inúmeras situações. Desde abrir uma garrafa de vinho durante um piquenique até reparar um equipamento durante uma caminhada, este canivete resolve praticamente tudo."
       link="https://generalcatalogue2025.eu/deliver2yougift/#page/846"/>
      <ProductsList 
        data={[
        {id:1, text:"Porta-Chaves Canivete Koburn", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/847", image:image1},
        {id:2, text:"Lupa Porta-Chaves Kitins 8X", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/848", image:image2},
        {id:3, text:"Higrometro de Solo Pyrom", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/852", image:image3},
        {id:4, text:"Estacao Meteorológica Geibol", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/854", image:image4},
        ]}
        title="Outros produtos desta categoria"/>
      <Catalogue text="Conheça os nossos outros produtos associados à agricultura" link="https://generalcatalogue2025.eu/deliver2yougift/#page/844"/>
      <Footer/>
    </section>
  )
}

export default App
