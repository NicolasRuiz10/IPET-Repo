import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [autenticado, setAutenticado] = useState(false);
    const [autenticadoPetshop, setAutenticadoPetshop] = useState(false);
    const [idUsuario, setIdUsuario] = useState('');
    const [idPetshop, setIdPetshop] = useState('');
    const [nomePetshop, setNomePetshop] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [itemsCarrinho, setItemsCarrinho] = useState([]);
    const [totalCarrinho, setTotalCarrinho] = useState(0);

    function mudarAutenticacao() {
        setAutenticado(!autenticado);
    }

    return (
        <AuthContext.Provider value={{  autenticado, 
                                        mudarAutenticacao, 
                                        setIdUsuario, 
                                        idUsuario, 
                                        itemsCarrinho, 
                                        setItemsCarrinho,
                                        totalCarrinho,
                                        setTotalCarrinho,
                                        idPetshop,
                                        setIdPetshop,
                                        nomePetshop,
                                        setNomePetshop,
                                        nomeUsuario,
                                        setNomeUsuario,
                                        autenticadoPetshop,
                                        setAutenticadoPetshop,
                                        }}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("Erro de context, provider");
    }

    return context;
}

export { useAuth, AuthProvider };