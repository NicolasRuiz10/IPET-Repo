package com.br.springsprint2.repositorio;

import com.br.springsprint2.dominio.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Integer> {

    Pedido findOneByIdPedido(Integer numero);


}
