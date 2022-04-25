import React from 'react';
import './HomePage.css';
import { IntroPet } from '../../components/introPet/IntroPet';
import logo from '../../Assets/logo1.jpeg'
import { Link } from "react-router-dom";
import { ButtonVerde } from '../../components/button/Button';
import client1 from '../../Assets/client1.png'
import client2 from '../../Assets/client2.png'
import client3 from '../../Assets/client3.png'
import client4 from '../../Assets/client4.png'
import bolaAmarela from '../../Assets/bolaAmarela.png'
import novosClientes from '../../Assets/novosClientes.png'
import dinheiro from '../../Assets/dinheiro.png'
import bolaQuebrada from '../../Assets/bolaQuebrada.png'
import olho from '../../Assets/olho.png'
import { Footer } from '../../components/footer/footer';

export default function HomePetshop() {
    return (
        <>
            <div className="menu">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo iPet" />
                    </Link>
                </div>
                <div className="itens-menu">
                    <Link to="/PetShop">
                        <div className="item-menu">
                            <h3>Catálogo</h3>
                        </div>
                    </Link>
                    <Link to="/produtos">
                        <div className="item-menu">
                            <h3>Pedidos</h3>
                        </div>
                    </Link>
                    <div className="item-menu">
                        <h3>Produtos</h3>
                    </div>
                    <Link to="/dashboard">
                        <div className="item-menu">
                            <h3>Dashboard</h3>
                        </div>
                    </Link>
                </div>
                <div className="itens-acesso">
                    <div className="item-acesso">
                        <ButtonVerde title="Login" />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <ButtonVerde title="Cadastro" />
                    </div>
                </div>
            </div>
            <IntroPet />
            <div className=""></div>
            <section className="clientFeedback">
                <div className="client1">
                    <div className="imgClient1">
                        <img src={client1} alt="none" />
                    </div>
                    "Consegui ter mais visibilidade e aumentar a renda do meu PetShop usando o
                    iPet cadastrando meus produtos e serviços"
                </div>
                <div className="client2">
                    <div className="imgClient2">
                        <img src={client2} alt="none" />
                    </div>
                    “ Consegui ter mais visibilidade e
                    aumentar a renda do meu PetShop
                    usando o iPet e cadastrando meus
                    produtos e serviços “
                </div>
            </section>
            <section className="clientFeedback">
                <div className="client3">
                    <div className="imgClient3">
                        <img src={client3} alt="none" />
                    </div>
                    “ Consegui ter mais visibilidade e
                    aumentar a renda do meu PetShop
                    usando o iPet e cadastrando meus
                    produtos e serviços “
                </div>
                <div className="client4">
                    <div className="imgClient4">
                        <img src={client4} alt="none" />
                    </div>
                    “ Consegui ter mais visibilidade e
                    aumentar a renda do meu PetShop
                    usando o iPet e cadastrando meus
                    produtos e serviços “
                </div>
            </section>

            <section>
                <div className="textParceiro">
                    <h1>Por que ser parceiro do iPet</h1>
                </div>
                <div className="ipetPartner">
                    <div className="partnerimgs">
                        <div>
                            <img src={bolaAmarela} alt="none" />
                            <div className="novosClientes">
                                <img src={novosClientes} alt="none" />
                            </div>
                            <div className="text1">
                                <h1>Novos Clientes</h1>
                            </div>
                        </div>
                        <div>
                            <img src={bolaAmarela} alt="none" />
                            <div className="dinheiro">
                                <img src={dinheiro} alt="none" />
                            </div>
                            <div className="text2">
                                <h1>Mais vendas</h1>
                            </div>
                        </div>
                        <div>
                            <img src={bolaAmarela} alt="none" />
                            <div className="facilGestao">
                                <img src={bolaQuebrada} alt="none" />
                            </div>
                            <div className="text3">
                                <h1>Fácil Gestão</h1>
                            </div>
                        </div>
                        <div>
                            <img src={bolaAmarela} alt="none" />
                            <div className="maisVisibilidade">
                                <img src={olho} alt="none" />
                            </div>
                            <div className="text4">
                                <h1>Fácil Gestão</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer item1="Termos e condições de usos" item2="Políticas e termos" item3="Help desk" item4="Formas de pagamento" />
        </>
    )
}