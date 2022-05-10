#include <stdio.h>
#include <string.h>

int main()
{
    char string[200];
    int duzina;
    
    printf("Unesite string\n");
    gets(string);
    duzina =strlen(string);

    printf("Duzina stringa je = %d",duzina);
    
    return 0;
}
