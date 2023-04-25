/*
let nombre=["milagros","romero",16,"azul"]
for (let i=0; i<nombre.length; i++) {
    document.write(nombre[i]+"<br>")
}
*/
let a=[]
let b=[]
let c=[]
/*pedir cantidad*/
let cant=parseInt(prompt("ingrese la cantidad de numeros a ingresar."))
/*ingresar numeros*/
for (i=0; i<cant; i++) {
    a[i]=parseInt(prompt("ingrese multiplos de 5"));
    if (a[i]%5!=0) {
        i--
    }
}
for (i=0; i<cant; i++) {
    b[i]=parseInt(prompt("ingrese multiplos de 3"));
    if (b[i]%3!=0) {
        i--
    }
}
/*mostrar numeros*/
for (let n=0; n<a.length; n++) {
    document.write("multiplo de cinco: "+a[n]+"<br>")
}
for (let m=0; m<b.length; m++) {
    document.write("multiplo de tres: "+b[m]+"<br>")
}
/*sumas*/
for (i=0; i<cant; i++) {
    c[i]=b[i]+a[i]
    document.write("la suma de la "+i+" posicion es: "+c[i]+"<br>")
}