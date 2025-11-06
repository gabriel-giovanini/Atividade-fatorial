var num = +prompt("Digite um número para ver o fatorial dele");

const fazFatorial = (num) => {
    let fatorial = 1;

    for(var i = num; i>=1; i-=1){
        fatorial *= i; 
    }

    return fatorial;
}



document.write(fazFatorial(num))
