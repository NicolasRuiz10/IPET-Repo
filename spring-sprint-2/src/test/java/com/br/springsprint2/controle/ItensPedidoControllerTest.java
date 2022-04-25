package com.br.springsprint2.controle;

import com.br.springsprint2.repositorio.ItensPedidoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = {ItensPedidoController.class, ItensPedidoRepository.class})
class ItensPedidoControllerTest {

    @Autowired
    ItensPedidoController controller;

    @MockBean
    ItensPedidoRepository repository;

    @Test
    void getAllItensPedido() {
    }

    @Test
    void postItensPedido() {
    }

    @Test
    void putItensPedido() {
    }

    @Test
    void deleteItensPedido() {
    }

    @Test
    void getAllItensProdutoByPedidoId() {
    }

    @Test
    void getAllItensProdutoByPetshopId() {
    }

    @Test
    void getAllItensPedidoByPedidoId() {
    }

    @Test
    void postItensPedidoByPedidoId() {
    }
}