import React, { useState, useEffect } from "react";
import "./PedidoPetshop.css";
import { MenuPetshop } from "../menu/MenuPetshop";
import axios from "axios";
import { FaOpencart } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import Modal from "react-modal"

Modal.setAppElement("#root")
export default function PedidoPetshop() {
    // let history = useHistory();
    // const { idPetshop, itemsCarrinho } = useAuth();
    const [pedido, setPedido] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [statusAberto, setStatusAberto] = useState(0);
    const [statusAndamento, setStatusAndamento] = useState(0);
    const [statusFinalizado, setStatusFinalizado] = useState(0);
    const [status, setStatus] = useState();

    function openModal() {
        setIsOpen(true);
    }

    function cleseModal() {
        setIsOpen(false);
    }

    function mudarStatus(status) {
        setStatus(status)
    }

    

    function verificarStatus(pedido) {
        var aberto = 0;
        var andamento = 0;
        var finalizado = 0;
        pedido.map((p) => {
            if (p.pedido.status == "aberto" || p.pedido.status == null) {
                aberto++;
                setStatusAberto(aberto);
            } else if (p.pedido.status == "finalizado"){
                finalizado++;
                setStatusFinalizado(finalizado);
            } else if (p.pedido.status == "andamento"){
                andamento++;
                setStatusAndamento(andamento);
            } 
        })
    }
    useEffect(() => {
        const fetchPedido = async () => {
            // const { data } = await axios.get(
            //   "http://34.226.239.106:8080/itens/pedido/petshop/1"
            // );
            const { data } = await axios.get(
                "http://localhost:8081/itens/pedido/petshop/1"
            );
            setPedido(data);
            verificarStatus(data);
        };
        fetchPedido(); 
    }, [])
    return (
        <>
            <MenuPetshop menuItem1="PetShop" menuItem2="Produtos" menuItem3="Serviços" />
            <div id="principal-pedido">
                <div id="pedidos">
                    <div id="pedidos-card">
                        <div className="card-pedidos-status" id="card-yellow" onClick={() => mudarStatus(null)}>
                            <h2>Abertos</h2>
                            <h2>{statusAberto}</h2>
                            <FaOpencart size={30} />
                        </div>
                        <div className="card-pedidos-status" id="card-blue" onClick={() => mudarStatus('andamento')}>
                            <h2>Em andamento</h2>
                            <h2>{statusAndamento}</h2>
                            <MdDeliveryDining size={30} />
                        </div>
                        <div className="card-pedidos-status"  id="card-green" onClick={() => mudarStatus('finalizado')}>
                            <h2>Finalizados</h2>
                            <h2>{statusFinalizado}</h2>
                            <BsCartCheckFill size={30} />
                        </div>
                    </div>
                    <h4 id="title-ped">Pedidos</h4>
                    {
                        pedido
                        .filter(p => p.pedido.status == status)
                        .map((p) => 
                            <div key={p.index} className="pedidos-list">
                            <div className="pedido-card">
                                <div className="pedido-card-info">
                                    <span>ID Pedido</span>
                                    <p>{p.id}</p>
                                </div>
                                <div className="pedido-card-info">
                                    <span>Produto</span>
                                    <p>{p.produto.nome}</p>
                                </div>
                                <div className="pedido-card-info">
                                    <span>Valor Total</span>
                                    <p>{p.pedido.valorTotal}</p>
                                </div>
                                <div className="pedido-card-info">
                                    <span>Pagamento</span>
                                    <p>{p.pedido.pagamento}</p>
                                </div>
                                <div className="pedido-card-info">
                                    <span>Cliente</span>
                                    <p>{p.pedido.fkUsuario.nome}</p>
                                </div>
                                <div className="pedido-card-info">
                                    <span>Telefone</span>
                                    <p>{p.pedido.fkUsuario.telefone}</p>
                                </div>
                                <div className="pedido-card-info">
                                    <span>Status</span>
                                    <p>Aberto</p>
                                </div>
                            </div>
                            <div id="btn-pedidos">
                                <button id="btn-detalhes-pedido" onClick={openModal}>Detalhe do pedido</button>
                                <button id="btn-detalhes-entrega">Entregar Pedido</button>
                            </div>
                    </div>
                        )
                    }

                    {
                    pedido
                    .filter(p => p.pedido.status == null)
                    .map((p) => 
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={cleseModal}
                        contentLabel="Exemplo Modal"
                        overlayClassName="modal-overlay"
                        className="model-content"
                        key={p.index}
                    >
                        <div id="container-modal">
                            <div className="modal-info-pedido">
                                <p>Informações do pedido</p>
                                <div className="dados-pedidos-modal">
                                    <div className="input-pedidos-modal">
                                        <div className="modal-pedido-card-info">
                                            <h6>Nome do produto</h6>
                                            <span>{p.produto.nome}</span>
                                        </div>
                                        <div className="modal-pedido-card-info">
                                            <h6>Descrição produto</h6>
                                            <span>{p.produto.descricao}</span>
                                        </div>
                                        <div className="modal-pedido-card-info">
                                            <h6>Marca</h6>
                                            <span>{p.produto.marca}</span>
                                        </div>
                                        <div className="modal-pedido-card-info">
                                            <h6>Tipo de Produto</h6>
                                            <span>{p.produto.tipoProduto}</span>
                                        </div>
                                        <div className="modal-pedido-card-info">
                                            <h6>Forma pagamento</h6>
                                            <span>{p.pedido.pagamento}</span>
                                        </div>
                                        <div className="modal-pedido-card-info">
                                            <h6>Valor Pedido</h6>
                                            <span>{p.pedido.valorTotal}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-info-cliente">
                                <p>Informações do cliente</p>
                                <div className="dados-pedidos-modal">
                                    <div className="input-pedidos-modal-cliente">
                                        <div className="modal-pedido-card-info-cliente">
                                            <h6>Nome do cliente</h6>
                                            <span>{p.pedido.fkUsuario.nome}</span>
                                        </div>
                                        <div className="modal-pedido-card-info-cliente">
                                            <h6>Email</h6>
                                            <span>{p.pedido.fkUsuario.email}</span>
                                        </div>
                                        <div className="modal-pedido-card-info-cliente">
                                            <h6>Telefone</h6>
                                            <span>{p.pedido.fkUsuario.telefone}</span>
                                        </div>
                                        <div className="modal-pedido-card-info-cliente">
                                            <h6>CPF</h6>
                                            <span>{p.pedido.fkUsuario.cpf}</span>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <div className="modal-info-endereco">
                                <p>Endereço</p>
                                <div className="dados-pedidos-modal">
                                    <div className="input-pedidos-modal-cliente">
                                        <div className="modal-pedido-card-info-cliente">
                                            <h6>CEP</h6>
                                            <span>{p.pedido.fkUsuario.cep}</span>
                                        </div>
                                        <div className="modal-pedido-card-info-cliente">
                                            <h6>Logradouro</h6>
                                            <span>{p.pedido.fkUsuario.endereco}</span>
                                        </div>
                                        <div className="modal-pedido-card-info-cliente">
                                            <h6>Número</h6>
                                            <span>{p.pedido.fkUsuario.numero}</span>
                                        </div>
                                        <div className="modal-pedido-card-info-cliente">
                                            <h6>Complemento</h6>
                                            <span>{p.pedido.fkUsuario.complement}</span>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <h6 id="status-modal">Status: <span>Aberto</span></h6>
                        <div id="btn-modal">
                                <button id="btn-detalhes-recebe">Receber Pedido</button>
                                <button id="btn-detalhes-close" onClick={cleseModal}>Fechar Modal</button>
                        </div>
                        
                    </Modal>
                    )}
                </div>
            </div>            
        </>
    );
}
