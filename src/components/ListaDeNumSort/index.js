import "./ListaDeNumSort.css"

export default function ListaDeNumSort(props){
    return(
        <section className="lista-numsort">
            <h4>{props.ordem}</h4>
            <h3 className="numero-sort">{ props.NumJaSort}</h3>
        </section>
    )
}
