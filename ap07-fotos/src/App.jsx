//apostila 07 de react
// import react from 'react'
// import ReactDOM from 'react-dom'
import { Component } from 'react'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
// import { createClient } from 'pexels'
import pexelsClient from './utils/pexelsClient'
import Busca from './components/Busca'
import ListaImagens from './components/ListaImagens'
import PexelsLogo from './components/PexelsLogo'


class App extends Component {

    state = {pics:[]}
    pexelsClient = null
    // pexelsKey = import.meta.env.VITE_PIXELS_KEY

    // componentDidMount(){
    //     this.pexelsClient = createClient(
    //         this.pexelsKey
    //     )
    // }

    // onBuscaRealizada = (termo) => {
    //     this.pexelsClient.photos.search({query: termo})
    //     .then((result) => this.setState({pics: result.photos}))
    // }

    onBuscaRealizada = (termo) => {
        pexelsClient.get('/search', {
            params: {
                query: termo
            }
        })
        .then((result) => {
            //variavel de estado()State: é para atualizar a tela (componente react)
            this.setState({pics: result.data.photos})
        })
    }

    render(){
        return(
            <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
                <div className='col-12'>
                    <PexelsLogo/>
                </div>
                <div className='col-12'>
                    <h1>Exibir uma lista de...</h1>
                </div>
                <div className='col-12'>
                    <Busca 
                        onBuscaRealizada={this.onBuscaRealizada}/>
                </div>
            <div className="col-12">
                <div className="grid">
                <ListaImagens
                    imgStyle={'col-12 xl:col-3 lg:col-4 md:col-6'}
                    pics={this.state.pics}/>
                </div>
            </div>
            </div>
        )
    }
}
export default App