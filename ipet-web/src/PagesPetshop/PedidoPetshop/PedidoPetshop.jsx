import React, { useState, useEffect } from "react";
import "./PedidoPetshop.css";
import { MenuPetshop } from "../menu/MenuPetshop";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { ItemCarrinho } from "../../components/carrinho/ItemCarrinho";
import { useAuth } from '../../hooks/Context';

export default function PedidoPetshop() {
    let history = useHistory();
    const { idPetshop, itemsCarrinho } = useAuth();
    const [pedido, setPedido] = useState([]);
    const [dadosUsuario, setDadosUsuario] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8080/itens/pedido/petshop/${idPetshop}`).then((res) => {
            setPedido(res.data);
            setDadosUsuario(res.data[0].pedido.fkUsuario);
        })
    }, [])
    return (
        <>
            <MenuPetshop menuItem1="PetShop" menuItem2="Produtos" menuItem3="Serviços" />
            <h2 className='h2-carrinho'>Pedidos</h2>
            <hr />
            <div className="container">

                <div className="card-pedido">
                    <h1>Informações do cliente</h1>
                        <div className="div-labels">
                            <div className="div-label">
                                <label>Nome: </label>
                                <p className="p">{dadosUsuario.nome}</p>
                            </div>
                            <div className="div-label">
                                <label>Telefone: </label>
                                <p className="p">{dadosUsuario.telefone}</p>
                            </div>
                            <div className="div-label">
                                <label>Endereco: </label>
                                <p className="p">{dadosUsuario.endereco}</p>
                            </div>
                            <div className="div-label">
                                <label>Numero: </label>
                                <p className="p">{dadosUsuario.numero}</p>
                            </div>
                            <div className="div-label">
                                <label>CEP: </label>
                                <p className="p">{dadosUsuario.cep}</p>
                            </div>
                            <div className="div-label">
                                <label>E-mail: </label>
                                <p className="p">{dadosUsuario.email}</p>
                            </div>
                        </div>                      
                </div>
                <div className="d-flex">

                    {pedido.map((item) => {
                        return (
                            <div className="card-produto">
                                <h1>Informações do produto</h1>
                                <div className="div-labels">
                                    <div className="div-label">
                                        <label>Produto</label>
                                        <p className="p">{item.produto.nome}</p>
                                    </div>
                                    <div className="div-label">
                                        <label>Preço</label>
                                        <p className="p">{item.produto.valor}</p>
                                    </div>
                                    <div className="div-label">
                                        <label>Quantidade</label>
                                        <p className="p">{item.produto.quantidade}</p>
                                    </div>
                                    <div className="div-label">
                                        <label>Total</label>
                                        <p className="p">{item.pedido.valorTotal}</p>
                                    </div>
                                </div>                      
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer item1="Termos e condições de usos" item2="Políticas e termos" item3="Help desk" item4="Formas de pagamento" />
        </>
    );
}
