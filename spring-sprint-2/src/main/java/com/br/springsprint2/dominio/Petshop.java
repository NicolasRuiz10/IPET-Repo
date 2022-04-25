package com.br.springsprint2.dominio;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Petshop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPetshop;

    private String nome;

    private String cnpj;
    private String endereco;
    private int numero;
    private String email;
    private String senha;
    private String cep;
    private String complemento;
    private String telefone;
    private Boolean autenticacao = false;

    public Boolean autenticar(String login, String senha) {
        if (login.equals(this.email) && senha.equals(this.senha)) {
            return true;
        }
        return false;
    }

    @OneToMany(mappedBy = "fkPetShop")
    private List<Produto> produtos;



    public int getIdPetshop() {
        return idPetshop;
    }

    public void setIdPetshop(int idPetshop) {
        this.idPetshop = idPetshop;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Boolean getAutenticacao() {
        return autenticacao;
    }

    public void setAutenticacao(Boolean autenticacao) {
        this.autenticacao = autenticacao;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }

}
