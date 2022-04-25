package com.br.springsprint2.controle;

import com.br.springsprint2.dominio.Petshop;
import com.br.springsprint2.repositorio.PetshopRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = {PetshopController.class, PetshopRepository.class})
class PetshopControllerTest {

    @MockBean
    private PetshopRepository repository;

    @Autowired
    PetshopController controller;

   Petshop petshop ;

    @Test
    void createPetshop() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.createPetshop(petshop);
        assertEquals(200, resposta.getStatusCodeValue());
    }

    @Test
    void autenticar() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.autenticar(petshop);
        assertEquals(304, resposta.getStatusCodeValue());
    }

    @Test
    void logoff() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.logoff(1);
        assertEquals(404, resposta.getStatusCodeValue());
    }

    @Test
    void getPetshops() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.getPetshops();
        assertEquals(204, resposta.getStatusCodeValue());
    }

    @Test
    void getPetshop() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.getPetshop(1);
        assertEquals(404, resposta.getStatusCodeValue());
    }

    @Test
    void deletePetshop() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.deletePetshop(1);
        assertEquals(404, resposta.getStatusCodeValue());
    }

    @Test
    void putPetshop() {
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.putPetshop(1,petshop);
        assertEquals(404, resposta.getStatusCodeValue());
    }
}