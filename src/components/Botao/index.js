import "./Botao.css"

export default function Botao(props){

    
    return(
        <div className="botao-center">
        <button  onClick={props.aoClicar}>{props.children}</button>
        </div>
    )
}