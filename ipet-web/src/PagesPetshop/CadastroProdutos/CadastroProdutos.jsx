import React, { useState } from "react";
import "./CadastroProdutos.css";
import { MenuPetshop } from "../menu/MenuPetshop";
import { Footer } from "../../components/footer/footer";
import Toast from "../../components/toast/Toast";
import axios from "axios";
import { Button } from "../../components/button/Button";
import ContentLoader from "react-content-loader";
import { useAuth } from "../../hooks/Context";

export default function CadastroProdutos(props) {
    const { idPetshop } = useAuth();
    const [showToast, setShowToast] = useState(false);
    const [img, setImg] = useState("");
    const [file, setFile] = useState("");
    const [colorToast, setColorToast] = useState("");
    const [textToast, setTextToast] = useState("");
    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [valor, setValor] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [tipoProduto, setTipoProduto] = useState("");
    const [tipoPet, setTipoPet] = useState("");
    const [descricao, setDescricao] = useState("");
    const [activeGif, setActiveGif] = useState(false);

    async function desfazePrimeiroCadastro() {
        setActiveGif(true);
        axios.delete(`http://localhost:8080/produtos/desfazerPrimeirocadastro/${idPetshop}`)
            .then((resp) => {
                console.log(resp.status);
                if (resp.status === 200) {
                    setActiveGif(false);
                    setShowToast(true);
                    setColorToast("green");
                    setTextToast("Primeiro produto excluido com sucesso");
                } else if (resp.status === 204) {
                    setActiveGif(false);
                    setShowToast(true);
                    setColorToast("red");
                    setTextToast("Não há produto para ser excluido");
                } else {
                    setActiveGif(false);
                    setShowToast(true);
                    setColorToast("red");
                    setTextToast("Erro inesperado");
                }
            })

    }

    async function gravar() {
        setActiveGif(true);
        if (nome !== '' || descricao !== '', valor !== '') {
            const response = await axios
                .post(`http://localhost:8080/produtos/${idPetshop}`, {
                    nome: nome,
                    descricao: descricao,
                    valor: valor,
                    marca: marca,
                    especie: tipoPet,
                    quantidade: quantidade,
                    tipoProduto: tipoProduto,
                    IdPet: idPetshop
                })
            var formatImg = new FormData();
            formatImg.append("foto", img);
            if (response.data) {
                axios
                    .patch(
                        `http://localhost:8080/produtos/atualizar-foto/${response.data}`,
                        formatImg,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    )
                    .then((res) => {
                        setColorToast("green");
                        setActiveGif(false);
                        setTextToast("Produto cadastrado com sucesso");
                    });
                }
            } else {
                setShowToast(true);
                setColorToast("red");
                setTextToast("Necessário preencher todos os campos");
                setActiveGif(false);
            }
    }

    function setValueToast(value) {
        setShowToast(value);
    }

    function setValueImg(e) {
        setImg(e.target.files[0]);
    }

    function setValueTxt(e) {
        setFile(e.target.files[0]);
    }

    function download(filename, textInput) {

        var element = document.createElement('a');
        element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
        element.setAttribute('download', filename);
        document.body.appendChild(element);
        element.click();
        //document.body.removeChild(element);
    }
    
      function teste(){
        axios.get(`http://localhost:8080/produtos/arqTxt/produtos`).then(res => {
          download("produtos.txt", res.data)
        })
      }

    function send(e) {
        var formData = new FormData();
        formData.append("txt", file);
        formData.append("image", img);
        if (file !== "" || img !== "") {
            axios
                .post("http://localhost:8080/produtos/txt", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    setShowToast(true);
                    setColorToast("green");
                    setTextToast("Produto cadastrado com sucesso");
                });
        } else {
            setShowToast(true);
            setColorToast("red");
            setTextToast("Necessário anexar todos os arquivos");
        }
    }

    function desfazer() {
        axios.delete("http://localhost:8080/produtos/desfazer-cadastro").then(res => {
            console.log(res, 'resposta');
            if (res.status === 200) {
                setShowToast(true);
                setColorToast("green");
                setTextToast("último cadastro foi desfeito com sucesso");
            }
        })
    }
    return (
        <>
            <Toast
                text={textToast}
                color={colorToast}
                showToast={showToast}
                changeValueToast={setValueToast}
            />
            <MenuPetshop />
            <div className="id">
                <p>ID PetShop: {idPetshop}</p>
            </div>
            <div className="cadastroTitleDiv">
                <h1>Cadastro de produto</h1>
                <hr />
            </div>
            <div className="principal-cadastro-div">
                <div className="info-produto-div">
                    <h5>Dados do Produto</h5>
                    <div className="input-produto-div">
                        <p>Nome do produto: </p>
                        <input
                            type="text"
                            placeholder="Digite o nome do produto"
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <p>Marca do produto: </p>
                        <input
                            type="text"
                            placeholder="Digite a marca do produto"
                            onChange={(e) => setMarca(e.target.value)}
                        />
                        <p>Valor do produto: </p>
                        <input
                            type="number"
                            placeholder="Digite o valor do produto"
                            onChange={(e) => setValor(e.target.value)}
                        />
                        <p>Quantidade: </p>
                        <input
                            type="number"
                            placeholder="Digite a quantidade do produto"
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                        <p>Tipo do produto: </p>
                        <input
                            type="text"
                            placeholder="Digite o tipo do produto"
                            onChange={(e) => setTipoProduto(e.target.value)}
                        />
                        <p>Tipo do pet: </p>
                        <input
                            type="text"
                            placeholder="Digite o tipo do pet"
                            onChange={(e) => setTipoPet(e.target.value)}
                        />
                        <p>Descrição do produto: </p>
                        <textarea
                            type="text"
                            placeholder="Digite a descrição do produto"
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
                </div>
                <div className="anexoImg-div">
                    <h5>Escolha a foto do produto</h5>
                    <label htmlFor="imagem" className="label">
                        {!img.name ? "Escolher imagem" : img.name}
                    </label>
                    <input id="imagem" type="file" onChange={setValueImg} />
                </div>
            </div>
            <div className="section-btn-adicionar">
                <button id="adicionar-produto" onClick={gravar}>
                    Adicionar Produto
                </button>
                        <button id="desfazer-primeiro-produto" onClick={desfazePrimeiroCadastro}>
                            Desfazer Primeiro Cadastro
                </button>
            </div>
            <div className="gif">
                {
                    !activeGif ? '' :
                    <ContentLoader
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
                    </ContentLoader>
                }
            </div>
            <div className="cadastroTitleDiv">
                <h1>Importação de produtos em lote</h1>
                <hr />
            </div>
            <div className="importacao">
                <div className="enviarText">
                    <p>Para receber nosso documento de layout envie um e-mail para: 212-3a-grupo2@bandtec.com.br </p>
                </div>
                <div className="baixarButton">
                    <label htmlFor="imagem" className="label">
                        {!img.name ? "Escolher imagem" : img.name}
                    </label>
                    <input id="imagem" type="file" onChange={setValueImg} />
                </div>
                <div className="baixarButton">
                    <label htmlFor="txt" className="label">
                        {!file.name ? "Escolher arquivo txt" : file.name}
                    </label>
                    <input id="txt" type="file" onChange={setValueTxt} />
                </div>
                <div className="baixarButton">
                    <Button btnTitle="Cadastrar produto" clickButton={send} />
                    <div id="btn-desfazer">
                        <button onClick={desfazer}>Desfazer</button>
                    </div>
                </div>
            </div>

            <div className="cadastroTitleDiv mt-1">
                <h1>Importação de produtos em lote</h1>
                <hr />
                <Button btnTitle="baixar produtos" clickButton={teste} />
                <Footer
                    item1="Termos e condições de usos"
                    item2="Políticas e termos"
                    item3="Help desk"
                    item4="Formas de pagamento"
                />
            </div>
        </>
    );
}
