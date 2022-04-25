package com.br.springsprint2.repositorio;

import com.br.springsprint2.dominio.ItensPedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItensPedidoRepository extends JpaRepository<ItensPedido, Integer> {

    ItensPedido findOneById(Integer id);

    List<ItensPedido> findAllByPedidoIdPedido(Integer id);

    List<ItensPedido> findAllByProdutoIdPet(Integer id);
}
