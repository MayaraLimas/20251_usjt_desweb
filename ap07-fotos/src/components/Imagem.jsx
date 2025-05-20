// estint-dissable-next-line reacr/prp-types
const Imagem = ({pic, imgStyle}) => {
    return (
        // nessa expressão: "col-12 xl:col-3 lg:col-4 md:col-6"
        // se a tela for extra grande(xl) vc pode ter 3 coluna para cada imagem, se a tela for pelo menos grande(lg) pode ter 4 coluna cada foto e se a tela for media (md) cada colula tera 6 colunas
        <div className={`${imgStyle}`}>
            <img src={pic}/>
        </div>
    )
}
export default Imagem