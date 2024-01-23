import { useState } from "react"
import { Link } from "react-router-dom"
import Tablero from "./components/Tablero"
const simbolosDisponibles = ["&#128151;","&#128525;","&#128516;"]

const MemoriaPage = () => {
    const [listaCasillas, setListaCasillas] = useState([])
    const [turno, setTurno] = useState(1)
    const [casillaAnterior, setCasillaAnterior] = useState(null)

    const mostrarCasillaOnClick = (row, col) => {
        console.log(`mostrarCasillaOnClick: (${row},${col})`)
        const nuevaListaClon = [...listaCasillas] // clono la lista

        if (turno == 1){
            nuevaListaClon[row][col].mostrandoSimbolo = true
            setCasillaAnterior(nuevaListaClon[row][col])
            setTurno(2)
        }else{
            nuevaListaClon[row][col].mostrandoSimbolo = true

            if (casillaAnterior.simbolo == nuevaListaClon[row][col].simbolo){
                casillaAnterior.mostrandoSimbolo = false
                nuevaListaClon[row][col].mostrandoSimbolo = false
            }
        }

        setListaCasillas(nuevaListaClon)
    }

    // logica de creacion de casillas
    for(let i=0; i<2; i++){
        const fila = []
        for(let j=0; j<3; j++){
            fila.push({
                simbolo : simbolosDisponibles[j],
                mostrandoSimbolo : false
            })
        }
        listaCasillas.push(fila)
    }
    
    return <div>
        <h1>Juego de Memoria</h1>
        <Tablero rows={2} 
        cols={3} 
        listaCasillas={listaCasillas}
        mostrarOnClick = {mostrarCasillaOnClick}/>
        <Link to={"ejemplo"}>Link hacia Ejemplo</Link>
    </div>
}

export default MemoriaPage