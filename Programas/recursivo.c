#include <stdio.h>

#define TAM_ENTRADA 8

int verificaSimetriaPalavra(char palavra[TAM_ENTRADA], int pontoInicial, int pontoFinal){
    if (palavra[pontoInicial] == palavra[pontoFinal]){
        if(pontoInicial != pontoFinal)
            return verificaSimetriaPalavra(palavra, pontoInicial+1, pontoFinal-1);
        else 
            return 1;
    }
    return 0;
}

int main() {
    
    char w[TAM_ENTRADA]= "aba#bba\0";
    int i = 0, j = TAM_ENTRADA-2;

    printf("Recursivo\n");
    if ((TAM_ENTRADA-2)%2 == 1){ //Verifica se os 2 lados tem o mesmo número de caracteres
        printf("FALSE");
        return 0;
    }
    
    if(verificaSimetriaPalavra(w, i, j))
        printf("TRUE");
    else 
        printf("FALSE");
    return 0;
}

