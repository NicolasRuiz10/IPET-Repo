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
            <section className="section-produtos-intro">
                <h2>Produtos</h2>
                <hr />
            </section>
                <div className="filtro--produtos">
                    <h3>Filtrar Produtos</h3>
                    <hr />
                    <Input
                        enviarDados={setBusca}
                        value={busca}
                        placeholder="Pesquisar produto.."
                    />
                </div>

            <section className="card-empresas">
                <div className="card-empresas-info">
                    <div className="logo-empresa">
                        <img src="data:image/png;base64,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" alt="" srcset="" />
                    </div>
                    <div className="detalhes-empresa">
                        <h3>Cobasi</h3>
                        <p>R$ 5,00 <span>Taxa de entrega</span></p>
                        <p>5 KM <span>Distância</span></p>
                    </div>
                    <div className="button-empresa">
                        <a>Ver produtos</a>
                    </div>
                </div>

                <div className="card-empresas-info">
                    <div className="logo-empresa">
                        <img src="data:image/png;base64,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" alt="" srcset="" />
                    </div>
                    <div className="detalhes-empresa">
                        <h3>Petz</h3>
                        <p>R$ 3,00 <span>Taxa de entrega</span></p>
                        <p>3 KM <span>Distância</span></p>
                    </div>
                    <div className="button-empresa">
                        <a>Ver produtos</a>
                    </div>
                </div>
                <div className="card-empresas-info">
                    <div className="logo-empresa">
                        <img src="https://isinaliza.vteximg.com.br/arquivos/ids/173981-1000-1000/1943-placa-atencao-area-de-teste-pvc-semi-rigido-26x18cm-fixacao-1.jpg?v=636848934015200000" alt="" srcset="" />
                    </div>
                    <div className="detalhes-empresa">
                        <h3>Teste</h3>
                        <p>R$ 3,00 <span>Taxa de entrega</span></p>
                        <p>40 min <span>Entrega</span></p>
                    </div>
                    <div className="button-empresa">
                        <a>Ver produtos</a>
                    </div>
                </div>
                <div className="card-empresas-info">
                    <div className="logo-empresa">
                        <img src="https://isinaliza.vteximg.com.br/arquivos/ids/173981-1000-1000/1943-placa-atencao-area-de-teste-pvc-semi-rigido-26x18cm-fixacao-1.jpg?v=636848934015200000" alt="" srcset="" />
                    </div>
                    <div className="detalhes-empresa">
                        <h3>Teste</h3>
                        <p>R$ 3,00 <span>Taxa de entrega</span></p>
                        <p>40 min <span>Entrega</span></p>
                    </div>
                    <div className="button-empresa">
                        <a>Ver produtos</a>
                    </div>
                </div>
                <div className="card-empresas-info">
                    <div className="logo-empresa">
                        <img src="https://isinaliza.vteximg.com.br/arquivos/ids/173981-1000-1000/1943-placa-atencao-area-de-teste-pvc-semi-rigido-26x18cm-fixacao-1.jpg?v=636848934015200000" alt="" srcset="" />
                    </div>
                    <div className="detalhes-empresa">
                        <h3>Teste</h3>
                        <p>R$ 3,00 <span>Taxa de entrega</span></p>
                        <p>40 min <span>Entrega</span></p>
                    </div>
                    <div className="button-empresa">
                        <a>Ver produtos</a>
                    </div>
                </div>
                <div className="card-empresas-info">
                    <div className="logo-empresa">
                        <img src="https://isinaliza.vteximg.com.br/arquivos/ids/173981-1000-1000/1943-placa-atencao-area-de-teste-pvc-semi-rigido-26x18cm-fixacao-1.jpg?v=636848934015200000" alt="" srcset="" />
                    </div>
                    <div className="detalhes-empresa">
                        <h3>Teste</h3>
                        <p>R$ 3,00 <span>Taxa de entrega</span></p>
                        <p>40 min <span>Entrega</span></p>
                    </div>
                    <div className="button-empresa">
                        <a>Ver produtos</a>
                    </div>
                </div>
                <div className="card-empresas-info">
                    <div className="logo-empresa">
                        <img src="https://isinaliza.vteximg.com.br/arquivos/ids/173981-1000-1000/1943-placa-atencao-area-de-teste-pvc-semi-rigido-26x18cm-fixacao-1.jpg?v=636848934015200000" alt="" srcset="" />
                    </div>
                    <div className="detalhes-empresa">
                        <h3>Teste</h3>
                        <p>R$ 3,00 <span>Taxa de entrega</span></p>
                        <p>40 min <span>Entrega</span></p>
                    </div>
                    <div className="button-empresa">
                        <a>Ver produtos</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Produtos;
