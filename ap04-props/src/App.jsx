import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const App = () => {
  const textoOK = 'Chegou'
  const textoNOK = 'Não chegou'
  const funcaoOK = () => alert ("Obrigado pelo feedback!")
  const funcaoNOK = () => alert ('Verificaremos!')
  const componenteFeedback = (
    <Feedback 
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}/>
  )
  return (
    <div className="container border border-dark">
      <div className="row">
        <div className="col-12">
          <div>
            <p>Meus hipos</p>
            <i className="fa-solid fa-hippo fa-3x"></i>
            <i className="ms-1 fa-solid fa-hippo fa-3x fa-flip-horizontal"></i>
            <i className="ms-1 fa-solid fa-hippo fa-2x fa-flip-horizontal"></i>
            <i className="ms-1 fa-solid fa-hippo fa-flip-horizontal"></i>
            <i className="ms-1 fa-solid fa-hippo fa-flip-horizontal"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-3 col-md-6">
            <Cartao cabecalho="22/04/2025">
              <Pedido 
                titulo="Café quente"
                icone="mug-hot"
                descricao="Café quente expresso no copo americano"/>
              {componenteFeedback}
            </Cartao>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <Cartao cabecalho="23/04/2025">
              <Pedido 
                titulo="Biscoito"
                icone="cookie"
                descricao="Cookie suculento"/>
              {componenteFeedback}
            </Cartao>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <Cartao cabecalho="14/04/2025">
              <Pedido 
                titulo="Mobi"
                icone="car"
                descricao="Carro pequeno e sem espaço"/>
              {componenteFeedback}
            </Cartao>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <Cartao cabecalho="17/03/2025">
              <Pedido 
                  titulo="Bicicleta"
                  icone="bicycle"
                  descricao="Bicicleta aro 16 cor amarela"/>
              {componenteFeedback}
          </Cartao>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App