import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
// console.log(props)
const corDeFundo = {backgroundColor: props.corSecundaria}
const corDaBorda =  {borderColor: props.corPrimaria }

return(

        props.colaboradores.length > 0 && <section className='time' style={ corDeFundo }>
            <h3 style={ corDaBorda }>{props.nome}</h3>
            <div className='colaboradores'>
            { props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        
    )
}

export default Time