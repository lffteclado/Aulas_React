import React, {Component} from 'react';

class Resumo extends Component{
    constructor (props){
        super(props);
        this.state ={
            consultas:{
                especialidade: "",
                quantidade:0,
                situacao: ""
            },
            faturamento :{
                descricao: "",
                valor: 0
            }
        }
    }

    componentDidMount(){
        fetch("http://192.168.1.38:3001/api/clinica/consulta")
        .then(resultado => resultado.json().then(dados => this.setState(dados)));
    }

    render(){
        return(
            <div>
                <h2 className='mt-2'>Resumo</h2>
                <div className='row'>
                    <div className='col'>
                        <h3>Consultas</h3>
                        <div className='row'>
                            <div className='col'>
                                <div className='card mt-2 text-center'>
                                        <div className='card-header'>
                                            Especialidade
                                        </div>
                                        <div className='card-body'>
                                            {this.state.consultas.especialidade}
                                        </div>
                                </div>
                                <div className='card mt-2 text-center'>
                                        <div className='card-header'>
                                            Quantidade
                                        </div>
                                        <div className='card-body'>
                                            {this.state.consultas.quantidade}
                                        </div>
                                </div>
                                <div className='card mt-2 text-center'>
                                        <div className='card-header'>
                                            Situa&ccedil;&atilde;o
                                        </div>
                                        <div className='card-body'>
                                            {this.state.consultas.situacao}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <h3>Faturamento</h3>
                        <div className='row'>
                            <div className='col'>
                                <div className='card mt-2 text-center'>
                                        <div className='card-header'>
                                            Descri&ccedil;&atilde;o
                                        </div>
                                        <div className='card-body'>
                                            {this.state.faturamento.descricao}
                                        </div>
                                </div>
                                <div className='card mt-2 text-center'>
                                        <div className='card-header'>
                                            Valor
                                        </div>
                                        <div className='card-body'>
                                        {this.state.faturamento.valor.toLocaleString('pt-BR', {style : 'currency', currency: 'BRL'})}
                                        <span className='badge badge-succes ml-1'>
                                            {this.state.faturamento.valor}
                                        </span>                                           
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resumo;