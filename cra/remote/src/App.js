import LocalButton from './Button';
import Navbar from '../../sharedComponent/src/navbar'
import Footer from '../../sharedComponent/src/footer'
import PokemonInfo from '../../sharedComponent/src/PokemonInfo/pokemonInfo'

const App = () => (
  <div>
    <Navbar />
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <PokemonInfo />
    <LocalButton />
    <Footer />
  </div>
);

export default App;
