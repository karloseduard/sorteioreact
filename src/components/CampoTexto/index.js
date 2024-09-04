import "./CampoTexto.css"

export default function CampoTexto(props){

    const aoDigitar = (event)=>{
        props.aoAdicionar(event.target.value)
    }
    return(
        <section className="Campo-textNnm">
            <h2>{props.h2}</h2>
            <input value={props.valor} onChange={aoDigitar} type={props.tipo} />
        </section>
    )
}