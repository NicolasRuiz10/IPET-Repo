package com.br.springsprint2.dominio;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido")
    private int idPedido;

    private String pagamento;

    private Double valorTotal;

    private String status;

    @ManyToOne
    @JoinColumn(name = "fkUsuario")
    private UsuarioLogar fkUsuario;

    @JsonIgnore
    @OneToMany(mappedBy = "pedido", fetch = FetchType.EAGER)
    private Set<ItensPedido> itensPedido;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(int idPedido) {
        this.idPedido = idPedido;
    }

    public UsuarioLogar getFkUsuario() {
        return fkUsuario;
    }

    public void setFkUsuario(UsuarioLogar fkUsuario) {
        this.fkUsuario = fkUsuario;
    }

    public Set<ItensPedido> getItensPedido() {
        return itensPedido;
    }

    public void setItensPedido(Set<ItensPedido> itensPedido) {
        this.itensPedido = itensPedido;
    }

    public String getPagamento() {
        return pagamento;
    }

    public void setPagamento(String pagamento) {
        this.pagamento = pagamento;
    }

    public Double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(Double valorTotal) {
        this.valorTotal = valorTotal;
    }



}
