import React, { useState } from "react";
import "./Login.css";
import { Menu } from "../../components/menu/Menu";
import Input from "../../components/input/Input";
import { ButtonVerde } from "../../components/button/Button";
import axios from "axios";
import Toast from "../../components/toast/Toast";
import { useHistory } from "react-router-dom";
import { useAuth } from '../../hooks/Context';
import ContentLoader from "react-content-loader"

export default function Login(props) {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [activeGif, setActiveGif] = useState(false);

    const { mudarAutenticacao, setIdUsuario, setNomeUsuario } = useAuth();

    function setValueEmail(value) {
        setEmail(value);
    }

    function setValuePasssword(value) {
        setPassword(value);
    }

    function setValueToast(value) {
        setShowToast(value);
    }

    async function verificarLogin() {
        setActiveGif(true);
        axios.post("http://34.226.239.106:8080/usuarios/autenticar", {
            email: email,
            senha: password,
        }).then((res) => {
            if (res.status === 200) {
                mudarAutenticacao();
                setIdUsuario(res.data.idUsuario);
                setNomeUsuario(res.data.nome);
                history.push("/");
            } else {
                setActiveGif(false);
                setShowToast(true);
            }
        });
    };
    function redirectCadastro() {
        history.push("/cadastro");
    }
    return (
        <>
            <Toast text="Login ou senha incorretos" color="red" showToast={showToast} changeValueToast={setValueToast} />
            <Menu menuItem1="PetShop" menuItem2="Produtos" menuItem3="Serviços" />
            <div className="acessaConta">
            <h2>Acesse sua conta</h2>
            </div>
            <hr />
            <div className="principal-container">
                <div className="principal-login">
                    <h1>Faça o Login</h1>
                    <Input txt="Email" placeholder="Digite seu email" value={email} enviarDados={setValueEmail} />
                    <Input txt="Senha" placeholder="Digite sua senha" value={password} enviarDados={setValuePasssword} />
                    <div class="gambiarra"><span></span></div>
                    <ButtonVerde title="Entrar" clickButton={verificarLogin}/>
                </div>
                <div className="section-login">
                    <h1>
                        Criar uma conta é rápido,
                        <br />
                        fácil e gratuito!
                    </h1>
                    <p className="p">
                        Com a sua conta da IPet você tem acesso. Ofertas exclusivas, descontos, pode criar gerenciar a sua Assinatura Petz!
                    </p>
                    <ButtonVerde title="Crie sua conta" clickButton={redirectCadastro} />
                </div>
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
        </>
    );
}
