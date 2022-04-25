package com.br.springsprint2.Fila;

public class FilaObj<T> {

        // Atributos
        private int tamanho;
        private T[] fila;

        public FilaObj(int tamanho) {
            this.tamanho = 0;
            this.fila = (T[]) new Object[tamanho];
        }

    // Métodos
        /* Método isEmpty() - retorna true se a fila está vazia e false caso contrário */
        public boolean isEmpty() {
            return tamanho == 0;
        }

        /* Método isFull() - retorna true se a fila está cheia e false caso contrário */
        public boolean isFull() {
            return tamanho == fila.length;
        }

        /* Método insert - recebe um elemento e insere esse elemento na fila
                           no índice tamanho, e incrementa tamanho
         */
        public void insert(T info) {
            if (isFull()) {
                System.out.println("Fila cheia");
            }
            else {
                fila[tamanho++] = info;
            }
        }

        /* Método peek - retorna o primeiro elemento da fila, sem removê-lo */
        public T peek() {
            return fila[0];
        }

        /* Método poll - remove e retorna o primeiro elemento da fila, se a fila não estiver
           vazia. Quando um elemento é removido, a fila "anda", e tamanho é decrementado
         */
        public T poll() {
            T primeiro = peek(); // salva o primeiro elemento da fila

            if (!isEmpty()) { // se a fila não está vazia
                // faz a fila andar
                for (int i = 0; i < tamanho - 1; i++) {
                    fila[i] = fila[i+1];
                }
                fila[tamanho-1] = null;    // limpa o último cara da fila
                tamanho--;                 // decrementa tamanho
            }

            return primeiro;
        }

        /* Método exibe() - exibe o conteúdo da fila */
        public void exibe() {
            if (isEmpty()) {
                System.out.println("A fila está vazia");
            }
            else {
                System.out.println("\nElementos da fila:");
                for (int i = 0; i < tamanho; i++) {
                    System.out.println(fila[i]);
                }
            }
        }

    public Integer contaTodos() {
            Integer qtd = 0;
        if (isEmpty()) {
          return 0;
        }
        else {
            for (int i = 0; i < tamanho; i++) {
                System.out.println(fila[i]);
                qtd++;
            }
            return qtd;
        }
    }

    }
