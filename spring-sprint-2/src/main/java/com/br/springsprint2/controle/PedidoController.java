package com.br.springsprint2.controle;

import com.br.springsprint2.dominio.Pedido;
import com.br.springsprint2.dominio.Petshop;
import com.br.springsprint2.dominio.Produto;
import com.br.springsprint2.dominio.UsuarioLogar;
import com.br.springsprint2.repositorio.PedidoRepository;
import com.br.springsprint2.repositorio.ProdutoRepository;
import com.br.springsprint2.repositorio.UsuarioLogarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.status;

@RestController
@RequestMapping("pedido")
public class PedidoController {

    @Autowired
    private PedidoRepository repository;

    @Autowired
    private UsuarioLogarRepository userRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @CrossOrigin
    @PostMapping("/usuario/id/{id}")
    public ResponseEntity postPedidoByUsuarioId(
            @PathVariable Integer id,
            @RequestBody Pedido pedido
    ) {
        Optional<UsuarioLogar> usuario = userRepository.findById(id);
        if (usuario.isPresent()) {
            pedido.setFkUsuario(usuario.get());
            pedido.setStatus("aberto");
            return ResponseEntity.status(201).body(repository.save(pedido));
        }
        return ResponseEntity.status(404).build();
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getPedidos() {
        List<Pedido> lista = repository.findAll();
        return lista.isEmpty() ? ResponseEntity.status(204).build() : ResponseEntity.status(200).body(lista);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getPedido(@PathVariable int id) {
        return ResponseEntity.of(repository.findById(id));
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deletePedido(@PathVariable int id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity putPedido(@PathVariable int id,
                                    @RequestBody Pedido pedidoAtualizado) {
        if (repository.existsById(id)) {
            pedidoAtualizado.setIdPedido(id);
            repository.save(pedidoAtualizado);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}
