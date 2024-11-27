#include <stdio.h>

#define TAM_ENTRADA 8

int main() {

    char w[TAM_ENTRADA]= "abb#aba\0";
    int i = 0, j = TAM_ENTRADA-2;

    r1: printf("Monolitico\n");
    r2: if (w[i] == w[j]) goto r3; else goto r8;
    r3: i++;
    r4: j--;
    r5: if (j == i) goto r6; else goto r2;
    r6: printf("TRUE");
    r7: return 0;
    r8: printf("FALSE");
    r9: return 0;
}