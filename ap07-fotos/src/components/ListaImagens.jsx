import Imagem from "./Imagem"

const ListaImagens = ({pics, imgStyle}) => {
    return (
        // esse map é como uma array(javascript) e usa o pics (imagens que estamos usando) e definindo no  
        pics.map((pic, key) =>(
            <Imagem
            imgStyle={imgStyle}      
            pic={pic.src.small}
            key={key}
            />
        )) 
    )
}

export default ListaImagens