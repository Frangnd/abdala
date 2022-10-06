class rectangulo{
    constructor (base, altura){
        this.altura = altura;
        this.base = base;

    }
    
    CalcarArea(){
        return this.base * this.altura; 
    }
}
function area(b, a){
    let Rectangulo = new rectangulo(b,a);
    document.getElementById("res").innerHTML = Rectangulo.CalcarArea();
}