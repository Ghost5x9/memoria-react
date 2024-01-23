const Casilla = (props) => {
    const CasillaOnClick = (event) => {
        props.mostrarOnClick(props.numFila, props.numColumna)
    }

    return  <div className="col">
    <button type="button" 
    className="btn btn-light"
    dangerouslySetInnerHTML={
        props.data.mostrandoSimbolo == true ?{__html: props.data.simbolo} : {__html: "UL"}}
        onClick={CasillaOnClick}>
    </button>
</div>
}

export default Casilla