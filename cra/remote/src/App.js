import LocalButton from './Button';
import Navbar from '../../sharedComponent/src/NavBar/navbar';
import Footer from '../../sharedComponent/src/Footer/footer';

const App = () => (
  <div>
    <Navbar />
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <Footer />
  </div>
);

export default App;
