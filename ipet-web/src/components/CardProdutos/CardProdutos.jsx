import React from "react";
import { useHistory } from "react-router-dom";

import "./CardProdutos.css";
import { ButtonVerde } from "../../components/button/Button";
import { useAuth } from "../../hooks/Context";


const CardProdutos = ({ produto }) => {
  const history = useHistory();
  const { itemsCarrinho, setItemsCarrinho, setTotalCarrinho, totalCarrinho, autenticado } = useAuth();
  function adicionarItem() {
    if(autenticado) {
      setItemsCarrinho([...itemsCarrinho, produto])
      setTotalCarrinho(totalCarrinho + produto.valor);
    } else {
      history.push('/login');
    }
  }
  return (
    <div className="card">
      <div className="card--imagem">
        <img src={`http://localhost:8080/produtos/pegar-foto/${produto.idProduto}`} alt="" />
        <hr />
      </div>
      <div className="card--desc">
        <div className="text-area-desc">
          <h3>{produto.descricao}</h3>
        </div>
      </div>
      <div className="card--preco">
        <h2>R$ {produto.valor}</h2>
      </div>
      <div className="card--label">
        <p className="p">{produto.quantidade} disponíveis</p>
      </div>
      <div className="card--btn">
        <ButtonVerde className="btn" title="Adicionar ao carrinho" clickButton={adicionarItem}/>
      </div>
    </div>
  );
};

export { CardProdutos };
