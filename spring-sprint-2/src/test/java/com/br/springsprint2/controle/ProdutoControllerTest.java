package com.br.springsprint2.controle;

import com.br.springsprint2.dominio.Produto;
import com.br.springsprint2.repositorio.PetshopRepository;
import com.br.springsprint2.repositorio.ProdutoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = {ProdutoController.class, ProdutoRepository.class, PetshopRepository.class})
class ProdutoControllerTest {

    @MockBean
    private ProdutoRepository repository;

    @MockBean
    private PetshopRepository petRepository;

    @Autowired
    ProdutoController controller;

    Produto produto = new Produto("Rcao para Cachorro", "Racao para cachorro",300.0,"Golden", "cachorro","racao", 100);


    @Test
    void createProdutosSemFoto() {
        when(repository.findAll()).thenReturn(new ArrayList<>());


        ResponseEntity resposta = controller.createProdutosSemFoto(produto,1);
        assertEquals(404, resposta.getStatusCodeValue());

    }

    @Test
    void getProdutos() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.getProdutos();
        assertEquals(204, resposta.getStatusCodeValue());
    }

    @Test
    void getFoto() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.getFoto(1);
        assertEquals(404, resposta.getStatusCodeValue());
    }

    @Test
    void getPetshop() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.getPetshop(1);
        assertEquals(404, resposta.getStatusCodeValue());
    }

    @Test
    void deleteProdutos() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.deleteProdutos(produto.getIdProduto());
        assertEquals(404, resposta.getStatusCodeValue());
    }

    @Test
    void putProduto() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.putProduto(1,produto);
        assertEquals(404, resposta.getStatusCodeValue());
    }

    @Test
    void desfazerCadastro() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.desfazerCadastro();
        assertEquals(204, resposta.getStatusCodeValue());
    }

}