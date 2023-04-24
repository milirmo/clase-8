/*
let nombre=["milagros","romero",16,"azul"]
for (let i=0; i<nombre.length; i++) {
    document.write(nombre[i]+"<br>")
}
*/
let nums5=[]
let nums3=[]
let suma=[]
/*pedir cantidad*/
let cant=parseInt(prompt("ingrese la cantidad de numeros a ingresar."))
/*ingresar numeros*/
for (i=0; i<cant; i++) {
    nums5[i]=parseInt(prompt("ingrese multiplos de 5"));
    if (nums5[i]%5!=0) {
        i--
    }
}
for (i=0; i<cant; i++) {
    nums3[i]=parseInt(prompt("ingrese multiplos de 3"));
    if (nums3[i]%3!=0) {
        i--
    }
}
/*mostrar numeros*/
for (let n=0; n<nums5.length; n++) {
    document.write("multiplo de cinco: "+nums5[n]+"<br>")
}
for (let m=0; m<nums3.length; m++) {
    document.write("multiplo de tres: "+nums3[m]+"<br>")
}
/*sumas*/
for (i=0; i<cant; i++) {
    suma[i]=nums3[i]+nums5[i]
    document.write("la suma de la "+i+" posicion es: "+suma[i]+"<br>")
}
