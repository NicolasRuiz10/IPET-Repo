package com.br.springsprint2.repositorio;

import com.br.springsprint2.dominio.Petshop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PetshopRepository extends JpaRepository<Petshop, Integer> {
}
