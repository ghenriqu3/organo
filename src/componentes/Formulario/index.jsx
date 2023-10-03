import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) =>{
    //array para passar na lista suspensa de times
    // const times = [
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'Devops',
    //     'UX e Design',
    //     'Mobile',
    //     'Inovação e Gestão'
    // ]
    //setando variaveis no useState
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) =>{
        //previnindo comportamento padrao do navegador
        event.preventDefault()
        //objeto criado para passar no useState
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        // console.log('Formulario foi submetido', nome, cargo, imagem, time)
        alert('card salvo')
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2> 
            <CampoTexto obrigatorio={true} label="Nome" placeholder="digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
            <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
            <Botao>criar card</Botao> 
            </form> 
        </section>
    )
}

export default Formulario