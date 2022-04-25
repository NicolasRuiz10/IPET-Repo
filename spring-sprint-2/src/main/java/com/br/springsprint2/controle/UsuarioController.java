package com.br.springsprint2.controle;

import com.br.springsprint2.dominio.UsuarioLogar;
import com.br.springsprint2.repositorio.UsuarioLogarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.status;

@RestController
@RequestMapping("usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioLogarRepository repository;

    @CrossOrigin
    @PostMapping
    public ResponseEntity createUsuario(@RequestBody UsuarioLogar novoUsuario) {
        repository.save(novoUsuario);
        return status(HttpStatus.CREATED).build();
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getUsuarios() {
        List<UsuarioLogar> lista = repository.findAll();
        return lista.isEmpty() ? ResponseEntity.status(204).build() : ResponseEntity.status(200).body(lista);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getUsuario(@PathVariable int id) {
        return ResponseEntity.of(repository.findById(id));
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deleteUsuario(@PathVariable int id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @CrossOrigin
    @PostMapping("/autenticar")
    public ResponseEntity autenticar(@RequestBody UsuarioLogar ususario) {
        List<UsuarioLogar> usuarios = repository.findAll();
        for (UsuarioLogar usuario : usuarios) {
            if (usuario.autenticar(ususario.getEmail(), ususario.getSenha())) {
                usuario.setAutenticacao(true);
                repository.save(usuario);
                return ResponseEntity.status(200).body(usuario);
            } else {
                usuario.setAutenticacao(false);
                repository.save(usuario);
            }
        } return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @PostMapping("/logoff/{id}")
    public ResponseEntity logoff(@PathVariable int id) {
        if (repository.existsById(id)) {
            UsuarioLogar u = repository.findById(id).get();
            u.setAutenticacao(false);
            repository.save(u);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity putUsuario(@PathVariable int id,
                                     @RequestBody UsuarioLogar usuarioAtualizado) {
        if (repository.existsById(id)) {
            usuarioAtualizado.setIdUsuario(id);
            repository.save(usuarioAtualizado);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
