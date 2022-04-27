import React from "react";
import "./Menu.css";
import logo from "../../Assets/logo1.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/Context';
import axios from "axios";
import { useHistory } from "react-router-dom";


export function Menu(props) {
	let history = useHistory();
	const { autenticado, mudarAutenticacao, idUsuario, itemsCarrinho, nomeUsuario } = useAuth();

	const RealizarLogoff = () => {
		axios.post("http://localhost:8080/usuarios/logoff/" + idUsuario).then((res) => {
			mudarAutenticacao();
			history.push("/");
		});
	}
	return (
		<>
			<div className="menu">
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="Logo iPet" />
					</Link>
				</div>
				<div className="itens-menu">
					<Link to="/petshop/login">
						<div className="item-menu">
							<h3>{props.menuItem1}</h3>
						</div>
					</Link>
					<Link to="/produtos">
						<div className="item-menu">
							<h3>{props.menuItem2}</h3>
						</div>
					</Link>	
				</div>
				{!autenticado ?
					<div className="itens-acesso">
						<div className="item-acesso">
							<Link to="/login">
								<button className="btn-login">Login</button>
							</Link>
						</div>
						<div className="item-acesso">
							<Link to="/cadastro">
								<button className="btn-cadastro">Cadastro</button>
							</Link>
						</div>
						
					</div>
					:
					<div className="itens-acesso">
						<div className="item-acesso">
							<button className="btn-cadastro" onClick={RealizarLogoff}>Loggof</button>
						</div>
						<div className="item-acesso">
							<div className="icon-car">
								Olá, {nomeUsuario}
							</div>
						</div>
						<div className="item-acesso">
							<div className="icon-car">
								<Link to="/carrinho">
									<FaShoppingCart size={34} className="icon--carrinho" />
									{ itemsCarrinho.length > 0 ?
										<div className="notificao">{itemsCarrinho.length}</div>
										:
										<div></div>
									}
								</Link>
							</div>
						</div>
					</div>
				}

			</div>
		</>
	);
}
