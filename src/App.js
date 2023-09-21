import './App.css';
import CardInfoIass from './components/CardInfoIass'
import CardInfoPass from './components/CardInfoPass';
import CardInfoSass from './components/CardInfoSass';
import AcordionInfo from './components/AcordionInfo';
import ImagenesInfo from './components/ImagenesInfo';
import ListInfo from './components/ListInfo';

function App() {
  return (
    <div>
        <div class="contenedorHeader">
            <div class="containerCenter">
                <h1>Servicios en la nube</h1>
                <p>
                    Los servicios en la nube son un conjunto de recursos informáticos que se ofrecen 
                    a través de Internet. Estos recursos pueden incluir potencia de procesamiento, 
                    almacenamiento, bases de datos, redes, análisis y mucho más.
                </p>
            </div>
        </div>
        <div className="px-5 py-5">
            <h2><strong>Modelos de implementación de la informática en la nube</strong></h2>
            <h3>La informática en la nube se puede implementar de cuatro maneras diferentes:</h3>
            <div className='py-4'>
                <AcordionInfo/>
            </div>
            <h2><strong>Modelos de servicio en la nube</strong></h2>
            <h3>Los servicios en la nube se pueden clasificar en tres categorías principales:</h3>
            <div className="d-flex justify-content-between py-4">
                <CardInfoIass/>
                <CardInfoPass/>
                <CardInfoSass/>
            </div>
            <h2><strong>Funcionalidad de los Cloud Services</strong></h2>
            <h3>Los servicios en la nube ofrecen una amplia gama de funcionalidades, que incluyen:</h3>
            <div className='py-4'>
                <ListInfo/>
            </div>

            <h2><strong>Principales empresas que ofrecen Cloud Services</strong></h2>
            <h3>Las principales empresas que ofrecen servicios en la nube son:</h3>
            <ImagenesInfo/>
        </div>
        <footer class="footer">
            <p> Jared Romero - Copyright &copy; 2023</p>
        </footer>
    </div>
  );
}

export default App;
