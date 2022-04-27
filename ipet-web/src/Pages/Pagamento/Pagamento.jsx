import React, { useState } from "react";
import { Menu } from "../../components/menu/Menu";
import Progress from "../../components/progress/Progress";
import "./Pagamento.css";
import { Link, useHistory } from "react-router-dom";
import { ButtonVerde } from "../../components/button/Button";
import { Footer } from "../../components/footer/footer";
import axios from "axios";
import { useAuth } from "../../hooks/Context";

export function Pagamento() {
    const history = useHistory();
    const [formaPagamento, setFormaPagamento] = useState("");
    const [troco, setTroco] = useState(0);
    const { totalCarrinho, itemsCarrinho, idUsuario } = useAuth();

    async function redirectStatus() {
        let idPedido;
        await axios.post(`http://ec2-34-226-239-106.compute-1.amazonaws.com:8080/pedido/usuario/id/${idUsuario}`, {
                pagamento: formaPagamento,
                valorTotal: totalCarrinho,
            }).then((res) => {
                idPedido = res.data.idPedido;
            })
        await itemsCarrinho.forEach((item) => {
            axios.post(`http://ec2-34-226-239-106.compute-1.amazonaws.com:8080/itens/pedido/id/${idPedido}/${item.idProduto}`, {
                qtdProduto: item.quantidade,
            }).then((res) => {
                console.log(res.data);
            })
        })
        history.push(`/status-pedido/${idPedido}`);
    }

    function contextPagamento() {
        var formaPagChecked = document.getElementsByName("FormaPagamento");

        for (var i = 0; i < formaPagChecked.length; i++) {
            if (formaPagChecked[i].checked) {
                if (formaPagChecked[i].value === "dinheiro") {
                    setFormaPagamento("dinheiro");
                } else if (formaPagChecked[i].value === "cartao") {
                    setFormaPagamento("cartao");
                }
            }
        }
    }
    return (
        <>
            <Menu menuItem1="PetShop" menuItem2="Produtos" menuItem3="Serviços" />
            <h2 className="h2">Pagamento</h2>
            <hr />
            <div className="progressBar">
                <Progress />
            </div>
            <div className="principal--pagamento">
                <div className="pagamento-radios">
                    <h3>Escolha a forma de pagamento</h3>
                    <div className="radios">
                        <div className="radio-pag">
                            <input type="radio" name="FormaPagamento" onClick={contextPagamento} value="dinheiro" />
                            <label for="dinheiro">Dinheiro</label>
                            <input type="radio" name="FormaPagamento" onClick={contextPagamento} value="cartao" />
                            <label for="cartao">Cartão</label>
                        </div>
                    </div>
                </div>
                {formaPagamento === 'pix' ?
                    <div className="pagamento">
                        <h3>Chave Pix para o pagamento: A5YYYTWW28882JJJ27712</h3>
                        <img src="https://logopng.com.br/logos/pix-106.png" alt="" />
                        <p>Valor total da compra: R$ {totalCarrinho}</p>
                        <input type="file" />
                    </div>
                    : formaPagamento === 'dinheiro' ?
                        <div className="pagamento">
                            <div className="pagamento-dinheiro">
                                <h3>Pagamento Dinheiro</h3>
                                <p>Valor total da compra: R$ {totalCarrinho}</p>
                            </div>
                        </div>
                        : formaPagamento === 'cartao' ?
                            <div className="pagamento">
                                <div className="pagamento-cartao">
                                    <h3>Pagamento cartão</h3>
                                    <p>Valor total da compra: R$ {totalCarrinho}</p>
                                    <img src="https://kontaazul.com.br/wp-content/uploads/2020/02/bandeira-dos-cartoes-de-credito.png" alt="" />
                                </div>
                            </div>
                            :
                            <div className="pagamento">
                                <h1>Escolha uma forma de pagamento acima</h1>
                            </div>

                }
            </div>
            <div className="botoes-div">
                <div className="btn-finalizar">
                    <ButtonVerde title="Finalizar Compra" clickButton={redirectStatus} />
                </div>
                <Link to="/carrinho">
                    <div className="btn-voltar">
                        <a href="/carrinho">Voltar carrinho</a>
                    </div>
                </Link>
            </div>
            <Footer item1="Termos e condições de usos" item2="Políticas e termos" item3="Help desk" item4="Formas de pagamento" />
        </>
    );
}

export default Pagamento;
