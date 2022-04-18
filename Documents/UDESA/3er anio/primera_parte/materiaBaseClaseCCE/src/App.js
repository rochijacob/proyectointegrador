import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Card from './components/Card/Card'

function App() {
  return (
 
    <div id="wrapper">
      <Sidebar />
      
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          
          <div className="container-fluid">

            {/* Nueva sección Personajes */}
            <h3 className="h3"> Personajes de películas</h3>
            <div className="row card-container">
              {/* Aquí van las tarjetas de cada personaje */}
              <Card image='/assets/images/characters/ahsoka.jpg' name='Ahsoka' />
              <Card image='/assets/images/characters/anakin.jpg' name='Anakin' />
              <Card image='/assets/images/characters/batman.jpg' name='Batman' />
              <Card image='/assets/images/characters/hulkSmall.jpg' name='Hulk' />
              <Card image='/assets/images/characters/kyloRen.jpg' name='Kylo Ren' />
              <Card image='/assets/images/characters/luke.jpg' name='Luke' />
              <Card image='/assets/images/characters/obiWan.jpg' name='Obi Wan' />
              <Card image='/assets/images/characters/strange.jpg' name='Dr. Strange' />
              <Card image='/assets/images/characters/yoda.jpg' name='Yoda' />
              <Card image='/assets/images/characters/capAmerica.jpg' name='Captain America' />
              <Card image='/assets/images/characters/superman.jpg' name='Superman' />
              <Card image='/assets/images/characters/cell.jpg' name='Cell' />
              {/* Fin zona de tarjetas de cada personaje */}
            </div>
            {/* Fin nueva sección Personajes */}
          </div>
        </div>

      </div>

    </div>
 
  );
}

export default App;
