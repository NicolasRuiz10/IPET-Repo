import React, { useEffect, useState } from "react";
import "./Produtos.css";
import { Menu } from "../../components/menu/Menu";
import Input from "../../components/input/Input";
import { CardProdutos } from "../../components/CardProdutos/CardProdutos";
import Toast from "../../components/toast/Toast";
import axios from "axios";
import ContentLoader from "react-content-loader";

export function Produtos(props) {
    const [produtos, setProdutos] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [busca, setBusca] = useState("");
    const [produtosBase, setProdutosBase] = useState("");
    const [petshopProduto, setPetshopProduto] = useState("");

    function setValueToast(value) {
        setShowToast(value);
    }

    useEffect(() => {
        axios.get("http://localhost:8080/produtos").then((res) => {
            setProdutos(res.data);
            setProdutosBase(res.data);
        });
    }, [])

    const buscaLowerCase = busca.toLowerCase()
    const produtosFiltrados = produtos
        .filter((produto) => produto.nome.toLowerCase().includes(buscaLowerCase))

    function filtroMarca() {
        const filtroMarca = [];
        const filtroPet = [];
        const filtroProduto = [];
        const filtroPetShop = [];
        var marcaCheck = document.getElementsByName("marcaCheck");
        for (var i = 0; i < marcaCheck.length; i++) {
            if (marcaCheck[i].checked) {
                if (marcaCheck[i].value === "9") {
                    var lojapet2 = 2;
                    setPetshopProduto(2);
                    filtroPetShop.push(lojapet2);
                }
                if (marcaCheck[i].value === "8") {
                    var lojapet1 = 1;
                    setPetshopProduto(1);
                    filtroPetShop.push(lojapet1);
                }
                if (marcaCheck[i].value === "7") {
                    var marca_1 = "Golden";
                    filtroMarca.push(marca_1);
                } else if (marcaCheck[i].value === "6") {
                    var marca_2 = "Me.Au";
                    filtroMarca.push(marca_2);
                } else if (marcaCheck[i].value === "5") {
                    var marca_3 = "Nutrilus";
                    filtroMarca.push(marca_3);
                } else if (marcaCheck[i].value === "4") {
                    var marca_4 = "Magnus";
                    filtroMarca.push(marca_4);
                } else if (marcaCheck[i].value === "3") {
                    var marca_5 = "True";
                    filtroMarca.push(marca_5);
                } else if (marcaCheck[i].value === "2") {
                    var marca_6 = "LCM";
                    filtroMarca.push(marca_6);
                } else if (marcaCheck[i].value === "1") {
                    var marca_7 = "Snacks";
                    filtroMarca.push(marca_7);
                } else if (marcaCheck[i].value === "Cachorro") {
                    var tipoPet_1 = "Cachorro";
                    filtroPet.push(tipoPet_1);
                } else if (marcaCheck[i].value === "Gato") {
                    var tipoPet_2 = "Gato";
                    filtroPet.push(tipoPet_2);
                } else if (marcaCheck[i].value === "Outros") {
                    var tipoPet_3 = "Outros";
                    filtroPet.push(tipoPet_3);
                } else if (marcaCheck[i].value === "Ração") {
                    var tipoProduto_1 = "Ração";
                    filtroProduto.push(tipoProduto_1);
                } else if (marcaCheck[i].value === "Ração") {
                    var tipoProduto_2 = "Pestiscos";
                    filtroProduto.push(tipoProduto_2);
                } else if (marcaCheck[i].value === "Acessório") {
                    var tipoProduto_3 = "Acessório";
                    filtroProduto.push(tipoProduto_3);
                } else if (marcaCheck[i].value === "Roupas") {
                    var tipoProduto_4 = "Roupas";
                    filtroProduto.push(tipoProduto_4);
                } else if (marcaCheck[i].value === "Brinquedos") {
                    var tipoProduto_5 = "Brinquedos";
                    filtroProduto.push(tipoProduto_5);
                }
            }
            filtoPesquisa(filtroMarca, filtroPet, filtroProduto, filtroPetShop);
        }
    };

    async function filtoPesquisa(filtroMarca, filtroTipoPet, filtroProduto, filtroPetShop) {
        var novosProdutos = [];
        produtos.map((p) => {
            if (filtroMarca.length > 0) {
                filtroMarca.forEach((f) => {
                    if (p.marca === f) {
                        novosProdutos.push(p);
                    }
                });
            }
            if (filtroTipoPet.length > 0) {
                filtroTipoPet.forEach((f) => {
                    if (p.especie === f) {
                        novosProdutos.push(p);
                    }
                });
            }
            if (filtroPetShop.length > 0) {
                filtroPetShop.forEach((f) => {
                    if (p.idPet === f) {
                        novosProdutos.push(p);
                    }
                });
            }
            if (filtroProduto.length > 0) {
                filtroProduto.forEach((f) => {
                    if (p.tipoProduto === f) {
                        novosProdutos.push(p);
                    }
                });
            }
            return true;
        });
        if (novosProdutos.length > 0) {
            setProdutos(novosProdutos);
        } else {
            setProdutos(produtosBase)
        }
    }
    return (
        <>
            <Toast text="Login ou senha incorretos" color="green" showToast={showToast} changeValueToast={setValueToast} />
            <Menu menuItem1="PetShop" menuItem2="Produtos" menuItem3="Serviços" />
            <div className="produto">
                <h2>Produtos</h2>
                {
                    petshopProduto === 1 ?
                        <div className="produtosPetShop">
                            <span>Produtos do PetShop: Cobasi</span>
                        </div>
                        :
                        petshopProduto === 2 ?
                            <div className="produtosPetShop">
                                <span>Produtos do PetShop: Petz</span>
                            </div>
                            :
                            <div className="produtosPetShop">
                                <span>Produtos do PetShop: Todos</span>
                            </div>
                }
            </div>
            <hr />
            <div className="informacao-compra">
                <span>* Favor comprar produtos de um único PetShop</span>
            </div>
            <div className="principal">
                <div className="filtro--produtos">
                    <h3>Filtrar Produtos</h3>
                    <hr />
                    <Input
                        enviarDados={setBusca}
                        value={busca}
                        placeholder="Pesquisar produto.."
                    />
                    <h3>Pet</h3>
                    <hr />
                    {/* CheckBox Pet */}
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="Cachorro"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Cachorro</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="Gato"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Gato</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="Outros"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Outros</label>
                    </div>
                    <h3>Tipo Produtos</h3>
                    <hr />
                    {/* CheckBox tipoProduto */}
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="Ração"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Ração</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="Petiscos"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Petiscos</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="Acessório"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Acessórios</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="Roupas"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Roupas</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="Brinquedos"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Brinquedos</label>
                    </div>
                    {/* CHECKBOX MARCAS */}
                    <h3>Marca</h3>
                    <hr />
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="7"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Golden</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="6"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Me.Au</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="5"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Nutrilus</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="4"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Magnus</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="3"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">True</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="2"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">LCM</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="1"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Snacks</label>
                    </div>
                    <h3>PetShop</h3>
                    <hr />

                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="8"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Cobasi</label>
                    </div>
                    <div className="checkBox">
                        <input
                            type="checkbox"
                            name="marcaCheck"
                            value="9"
                            onClick={filtroMarca}
                        />
                        <label for="marcaCheck">Petz</label>
                    </div>
                </div>
                <div className="card--principal">
                    {
                        produtos.length > 0 ?
                            produtosFiltrados.map((produto, key) => (
                                <CardProdutos key={key} produto={produto} />

                            )) :
                            <ContentLoader
                                className="center"
                                speed={2}
                                width={400}
                                height={150}
                                viewBox="0 0 400 150"
                                backgroundColor="#2484ec"
                                foregroundColor="#fec302"
                                {...props}
                            >
                                <circle cx="265" cy="77" r="63" />
                                <circle cx="141" cy="82" r="36" />
                                <circle cx="51" cy="88" r="22" />
                            </ContentLoader>}
                </div>
            </div>
        </>
    );
}

export default Produtos;
