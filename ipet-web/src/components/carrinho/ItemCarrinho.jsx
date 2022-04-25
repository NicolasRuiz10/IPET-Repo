import React, { useState } from "react";
import "./ItemCarrinho.css";
import { useAuth } from "../../hooks/Context";

export function ItemCarrinho({ urlImg, descProduto, preco }) {
    const [quantidade, setQuantidade] = useState(1);
    const { setTotalCarrinho, totalCarrinho } = useAuth();
    const [totalValorProduto, setTotalValorProduto] = useState(preco);

    function aumentarTotal() {
        let total = preco * quantidade;
        setTotalValorProduto(total + preco);
        setTotalCarrinho(totalCarrinho + total);
    }

    function diminuirTotal() {
        setTotalCarrinho(totalCarrinho - preco);
        setTotalValorProduto(totalValorProduto - preco);
    }

    function diminuirQuantidade() {
        setQuantidade(quantidade - 1)
        diminuirTotal();
    }

    function aumentarQuantidade() {
        setQuantidade(quantidade + 1)
        aumentarTotal();
    }

    return (
        <>
            <div className="box-item-carinho">
                <div className="section-itens--img">
                    <img className="imagemProduto" alt="" src={urlImg} />
                </div>

                <div className="section-itens--desc">
                    <div className="descricaoProduto">
                        <p>{descProduto}</p>
                    </div>
                </div>


                <div className="section-itens--preco">
                    <div className={preco}>R$ {preco}</div>
                </div>

                <div className="section-itens--qtd">
                    <div className="item-quantity">
                        <button className="button-add" disabled={quantidade < 2} onClick={diminuirQuantidade}>-</button>
                        <p>{quantidade}</p>
                        <button className="button-add" onClick={aumentarQuantidade}>+</button>
                    </div>
                </div>

                <div className="section-itens--total">
                    <div>R$ {totalValorProduto.toFixed(2)}</div>
                </div>
            </div>
        </>
    );
}
