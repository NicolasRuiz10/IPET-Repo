package com.br.springsprint2.controle;

import com.br.springsprint2.dominio.ItensPedido;
import com.br.springsprint2.dominio.Pedido;
import com.br.springsprint2.dominio.Produto;
import com.br.springsprint2.repositorio.ItensPedidoRepository;
import com.br.springsprint2.repositorio.PedidoRepository;
import com.br.springsprint2.repositorio.PetshopRepository;
import com.br.springsprint2.repositorio.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/itens")
public class ItensPedidoController {

    @Autowired
    private ItensPedidoRepository itensPedidoRepository;

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private PetshopRepository petshopRepository;

    @CrossOrigin
    @GetMapping
    public ResponseEntity getAllItensPedido() {
        List<ItensPedido> listaItensPedido = itensPedidoRepository.findAll();
        if (listaItensPedido.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(listaItensPedido);
    }

    @CrossOrigin
    @PostMapping("/{idProduto}")
    public ResponseEntity postItensPedido(@PathVariable Integer idProduto,@RequestBody ItensPedido itensPedido) {
        ItensPedido itensPedido1 = itensPedidoRepository.findOneById(itensPedido.getId());
        if (itensPedido == null) {
            Produto produto = produtoRepository.getById(idProduto);
            itensPedido.setProduto(produto);
            return ResponseEntity.status(201).body(itensPedidoRepository.save(itensPedido));
        }
        return ResponseEntity.status(404).body(itensPedido);
    }

    @CrossOrigin
    @PutMapping("/id/{id}")
    public ResponseEntity putItensPedido(
            @PathVariable Integer idItens,
            @PathVariable Integer idProduto,
            @RequestBody ItensPedido itensPedido
    ) {
        if (itensPedidoRepository.existsById(idItens)) {
            itensPedido.setId(idItens);
            Produto produto = produtoRepository.getById(idProduto);
            itensPedido.setProduto(produto);
            return ResponseEntity.status(200).body(itensPedidoRepository.save(itensPedido));
        }
        return ResponseEntity.status(404).build();
    }

    @CrossOrigin
    @DeleteMapping("/id/{id}")
    public ResponseEntity deleteItensPedido(@PathVariable Integer id) {
        if (itensPedidoRepository.existsById(id)) {
            itensPedidoRepository.deleteById(id);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }

    @CrossOrigin
    @GetMapping("/pedido/id/{id}")
    public ResponseEntity getAllItensProdutoByPedidoId(@PathVariable Integer id) {
        if (pedidoRepository.existsById(id)) {
            List<ItensPedido> listaItensPedido = itensPedidoRepository.findAllByPedidoIdPedido(id);
            if (listaItensPedido.isEmpty()) {
                return ResponseEntity.status(204).build();
            }
            return ResponseEntity.status(200).body(listaItensPedido);
        }
        return ResponseEntity.status(404).build();
    }


    @CrossOrigin
    @GetMapping("/pedido/petshop/{idPetshop}")
    public ResponseEntity getAllItensProdutoByPetshopId(@PathVariable Integer idPetshop) {
        if (petshopRepository.existsById(idPetshop)) {
            List<ItensPedido> listaItensPedido = itensPedidoRepository.findAllByProdutoIdPet(idPetshop);
            if (listaItensPedido.isEmpty()) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.status(200).body(listaItensPedido);
        }
        return ResponseEntity.status(404).build();
    }

    @CrossOrigin
    @GetMapping("/pedido/numero/{numero}")
    public ResponseEntity getAllItensPedidoByPedidoId(@PathVariable Integer id) {
        if (pedidoRepository.existsById(id)) {
            List<ItensPedido> listaItensPedido = itensPedidoRepository.findAllByPedidoIdPedido(id);
            if (listaItensPedido.isEmpty()) {
                return ResponseEntity.status(204).build();
            }
            return ResponseEntity.status(200).body(listaItensPedido);
        }
        return ResponseEntity.status(404).build();
    }

    @CrossOrigin
    @PostMapping("/pedido/id/{idPedido}/{idProduto}")
    public ResponseEntity postItensPedidoByPedidoId(
            @PathVariable Integer idPedido,
            @PathVariable Integer idProduto,
            @RequestBody ItensPedido itensPedido
    ) {
        Optional<Pedido> pedido = pedidoRepository.findById(idPedido);
        Optional<Produto> produtos = produtoRepository.findById(idProduto);
        if (pedido.isPresent()) {
            itensPedido.setPedido(pedido.get());
            itensPedido.setProduto(produtos.get());
            itensPedidoRepository.save(itensPedido);
            return ResponseEntity.status(201).body(itensPedido);
        }
        return ResponseEntity.status(404).build();
    }
}
