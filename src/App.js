import React, { Fragment, useState, useEffect } from 'react';

function App(){
  const [location, setLocation] = useState(false);
    
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position)=> {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  if(location == false){
    return (
      <Fragment>
        Você precisa habilitar a localização no browser o/
      </Fragment>
    )
      
    }else{
      return(
        <Fragment>
          <h3>Clima nas suas coordenadas</h3>
          <hr />
          <ul>
            <li>Temperatura atual: x*</li>
            <li>Temperatura máxima: x*</li>
            <li>Temperatura mínima: x*</li>
            <li>Pressão: x hpa</li>
            <li>Umidade: x%</li>
          </ul>
        </Fragment>

      )
    }
  }




// class App extends Component{

//   state= {
//     fimes: [],
//   }

//   async componentDidMount(){
//     const response = await api.get('');

//     //console.log(response.data);

//     this.setState({ filmes: response.data });
//   }

//   render(){
//     const { filmes } = this.state;

//     return(
//       <div>
//         <h1>Listar filmes</h1>
//         {filmes.map(filme => (
//           <li key={filme.show.id}>
//             <h2>
//               <strong>Titulo: </strong>
//               {filme.show.name}
//               {filme.show.url}
//               </h2>
//           </li>
//         ))}
//       </div>
//     );
//   };
// };
// function App() {
//   return (
//     <div>
//       <h1>Listar filmes</h1>
//     </div>
//   );
// }

export default App;
