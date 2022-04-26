import React from "react";
import "./Carrinho.css";
import { Menu } from "../../components/menu/Menu";
import { ItemCarrinho } from "../../components/carrinho/ItemCarrinho";
import Progress from "../../components/progress/Progress";
import { ButtonVerde } from "../../components/button/Button";
import { Footer } from "../../components/footer/footer";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/Context";


export function Carrinho() {
  const history = useHistory();
  const { totalCarrinho, itemsCarrinho } = useAuth();

  function rediretPagamento() {
    history.push('/pagamento')
    console.log(itemsCarrinho);
  }
  return (
    <>
      <Menu menuItem1="PetShop" menuItem2="Produtos" menuItem3="Serviços" />
      <h2 className= 'h2-carrinho'>Meu Carrinho</h2>
      <hr />
      <div className="principal--carrinho">
        <div className="navBar--carrinho">
          <div className="progressBar">
            <Progress />
          </div>
        </div>
        <div className="box-carrinho">
          <div className="itens-carrinho">
            <div className="item-title">
              <h1>Produto</h1>
              <hr />
              <h1>Descrição</h1>
              <hr />
              <h1>Preço</h1>
              <hr />
              <h1>Quantidade</h1>
              <hr />
              <h1>Total</h1>
            </div>
            {
              itemsCarrinho.map((item, key) => (
                <div className="itens" key={key}>
                  <ItemCarrinho
                    urlImg={`http://34.226.239.106:8080/produtos/pegar-foto/${item.idProduto}`}
                    descProduto={item.nome}
                    preco={item.valor}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <table border="1">
          <tr>
            <th>Total:</th>
            <td>R$ {totalCarrinho.toFixed(2)}</td>
          </tr>
        </table>
        <div className="btn-proximo">
          <ButtonVerde title="Fechar pedido" clickButton={rediretPagamento} />
        </div>
      <Link to="/produtos">
      <div className="btn-escolher">
        <a href="/produtos">Escolher mais produtos</a>
      </div>
      </Link>
      </div>
      <Footer item1="Termos e condições de usos" item2="Políticas e termos" item3="Help desk" item4="Formas de pagamento" />
    </>
  );
}

export default Carrinho;
