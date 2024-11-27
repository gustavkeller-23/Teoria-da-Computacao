#include <stdio.h>

#define TAM_ENTRADA 8

int main() {
    
    char w[TAM_ENTRADA]= "aba#bba\0";
    int i = 0, j = TAM_ENTRADA-2;

    printf("Iterativo\n");

    if (j%2 == 1){ //Verifica se os 2 lados tem o mesmo número de caracteres
        printf("FALSE");
        return 0;
    }

    while (w[i] == w[j]) {
        i++;
        j--;
        if (j == i){
            printf("TRUE");
            return 0;
        }
    }
    printf("FALSE");
    return 0;
}