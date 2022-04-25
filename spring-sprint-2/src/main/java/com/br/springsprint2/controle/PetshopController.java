package com.br.springsprint2.controle;

import com.br.springsprint2.dominio.Petshop;
import com.br.springsprint2.repositorio.PetshopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.status;

@RestController
@RequestMapping("/ipet")
public class PetshopController {
    @Autowired
    private PetshopRepository repository;




    @CrossOrigin
    @PostMapping
    public ResponseEntity createPetshop(@RequestBody Petshop novoPetshop) {
        repository.save(novoPetshop);
        return ResponseEntity.status(200).build();
    }

    @CrossOrigin
    @PostMapping("/autenticar")
    public ResponseEntity autenticar(@RequestBody Petshop petshop) {
        List<Petshop> petshops = repository.findAll();
        for (Petshop petshop1 : petshops) {
            if (petshop1.autenticar(petshop.getEmail(), petshop.getSenha())) {
                petshop1.setAutenticacao(true);
                putPetshop(petshop1.getIdPetshop(),petshop1);
                return status(200).body(petshop1);
            } else {
                petshop1.setAutenticacao(false);
                repository.save(petshop1);
            }
        } return status(201).build();
    }

    @CrossOrigin
    @PostMapping("/logoff/{id}")
    public ResponseEntity logoff(@PathVariable int id) {
        if (repository.existsById(id)) {
        Petshop p = repository.findById(id).get();
            p.setAutenticacao(false);
            putPetshop(id,p);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    };

    @CrossOrigin
    @GetMapping
    public ResponseEntity getPetshops() {
        List<Petshop> lista = repository.findAll();
        return lista.isEmpty() ? ResponseEntity.status(204).build() : ResponseEntity.status(200).body(lista);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getPetshop(@PathVariable int id) {
        return ResponseEntity.of(repository.findById(id));
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deletePetshop(@PathVariable int id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity putPetshop(@PathVariable int id,
                                     @RequestBody Petshop petshopAtualizado) {
        if (repository.existsById(id)) {
            petshopAtualizado.setIdPetshop(id);
            repository.save(petshopAtualizado);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
