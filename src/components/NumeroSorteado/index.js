import "./NumeroSorteado.css"

export default function NumeroSorteado(props){
    return(
        <section className="mostrar-numero">
            <div>
            <h2>{props.valor === '' ? "0" : props.valor}</h2>
            </div>
        </section>
    )
}