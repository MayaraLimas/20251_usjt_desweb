//apostila 07 de react
// import react from 'react'
// import ReactDOM from 'react-dom'
import { Component } from 'react'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import Busca from './components/Busca'

class App extends Component {
    render(){
        return(
            <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
                <div className="col-12">
                    <h1>Exibir uma lista de...</h1>
                </div>
                
                <div className="col-8">
                    <Busca />
                </div>
            </div>
        )
    }
}
export default App