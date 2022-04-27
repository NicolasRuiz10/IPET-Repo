import React, { useState } from "react";
import './Cadastro.css'
import { useHistory } from "react-router-dom";
import { MenuPetshop } from "../menu/MenuPetshop";
import Input from "../../components/input/Input"
import { ButtonVerde } from "../../components/button/Button"
import axios from "axios";
import Toast from "../../components/toast/Toast";

export function Cadastro() {
    let history = useHistory();

    const [showToast, setShowToast] = useState(false);
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [validacao, setvalidacao] = useState(true);

    function setValueToast(value) {
        setShowToast(value);
    }

    function confirmarSenha(e) {
        console.log(senha);
        if (senha === e) {
            setvalidacao(true);
        } else {
            setvalidacao(false);
        }
    }
    function chamarViaCep(e) {
        setCep(e);
        axios.get(`https://viacep.com.br/ws/${e}/json/`).then((res) => {
            setEndereco(res.data.logradouro);
            setBairro(res.data.bairro);
            setCidade(res.data.localidade);
            setEstado(res.data.uf);
        })
    }
    function criarConta() {
        if (email === '' || nome === '') {
            setShowToast(true);
        } else {
            axios.post(`http://localhost:8080/ipet`, {
                nome: nome,
                email: email,
                telefone: telefone,
                cnpj: cnpj,
                senha: senha,
                endereco: endereco,
                cep: cep,
                complemento: complemento,
                numero: numero,
            }).then((res) => {
                if (res.status === 200) {
                    history.push("/petshop/login");
                } else {
                    setShowToast(true);
                }
            })
        }
    }

    function redirectLogin() {
        history.push("/petshop/login");
    }

    return (
        <>
            <Toast text="Necessário preencher todos os campos" color="red" showToast={showToast} changeValueToast={setValueToast} />
            <MenuPetshop menuItem1="PetShop" menuItem2="Produtos" menuItem3="Serviços" />
            <div className="crieConta">
            <h2>Crie sua conta iPet</h2>
            </div>
            <hr />
            <div>
                <div className="tela-login">
                    <div className="card-cadastro">
                        <div className="d-flex">
                            <div className="w-100 pr-1">
                                <Input txt="Nome Completo" placeholder="Digite seu nome completo" enviarDados={setNome} />
                                <Input txt="Email" placeholder="Digite seu email" enviarDados={setEmail} />
                                <Input txt="CNPJ" placeholder="Digite seu CNPJ" enviarDados={setCnpj} />
                                <Input txt="Telefone" placeholder="(XX) X XXXX-XXXX" enviarDados={setTelefone} />
                                <Input txt="Senha" placeholder="Senha" enviarDados={setSenha} />
                                <Input txt="Confirme sua senha" placeholder="Senha" enviarDados={confirmarSenha} />
                                {!validacao ? <label>Senha incorreta</label> : ''}
                            </div>
                            <div className="w-100 pl-1">
                                <Input txt="CEP" placeholder="CEP" enviarDados={chamarViaCep} />
                                <Input txt="Endereço" placeholder="Digite o endereço" value={endereco} />
                                <Input txt="Numero" placeholder="Nº da residência" enviarDados={setNumero} />
                                <Input txt="Complemento" placeholder="Digite o complemento" enviarDados={setComplemento} />
                                <Input txt="Bairro" placeholder="Digite o bairro" value={bairro} />
                                <Input txt="Cidade" placeholder="Digite a cidade" value={cidade} />
                                <Input txt="Estado" placeholder="Digite o estado" value={estado} />
                                <div className="mt-1">
                                </div>
                            </div>
                        </div>
                        <ButtonVerde title="Criar conta" clickButton={criarConta} />
                    </div>
                    <div className="card-caraio">
                    <div className="card-login">
                        <div className="section--login">
                            <h1>
                                Já tem cadastro?
                            </h1>
                            <ButtonVerde title="Login" clickButton={redirectLogin} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cadastro;
