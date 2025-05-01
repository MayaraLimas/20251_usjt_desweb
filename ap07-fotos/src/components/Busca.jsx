import  { Component } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }
    onTermoAlterado = (event) => {
        console.log(event.target.value)
}
    render(){
        return(
            // empilhando os filhos
            <div className="flex flex-column">
                {/* icone a esquerda, largura maxima */}
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-search"/>
                    <InputText
                        className="w-full"
                        onChange={this.onTermoAlterado}
                        placeholder={this.props.dica}
                    />
                </span>
                    <Button
                        label='OK'
                        className="p-button-outlined mt-2"
                    />
            </div>
        )
    }
}
Busca.defaultProps = {
    dica: '  Digite algo que deseja ver'
}