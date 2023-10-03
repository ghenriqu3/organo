
import './CampoTexto.css'


const CampoTexto = (props) => {
    //  console.log(props)
    // const [valor, setValor] = useState('')
    const aoDigitado = (e) =>{
        // setValor(e.target.value)
        // console.log(valor)
        props.aoAlterado(e.target.value)
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type="text" value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto