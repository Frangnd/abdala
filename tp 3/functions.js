class CEmpleado{
    constructor(nombreC, categoria, antiguedad, idioma, hijosG, presentismo, km, funcion, sindicato, jubilacion, obraSocial, adicional){
        this.nombreC = nombreC;
        this.categoria = categoria;
        this.antiguedad = antiguedad;
        this.idioma = idioma;
        this.hijosG = hijosG;
        this.presentismo = presentismo;
        this.km = km;
        this.funcion = funcion;
        this.sindicato = sindicato;
        this.jubilacion = jubilacion;
        this.obraSocial = obraSocial;
        this.adicional = adicional;
      
    }
    CSueldoBasico(){
        let a=0;
        let p1='', p2='', p3='';
        for(let i=0; i<this.categoria.length; i++){
            if(this.categoria[i]!='|')
                if(a==0)
                    p1=p1+this.categoria[i];
                else if(a==1)
                    p2=p2+this.categoria[i];
                else if(a==2)
                    p3=p3+this.categoria[i];
                else
                    i=10000;
            else
                a++;
        }
        p1 = p1.trimEnd(); p2 = p2.trimEnd(); p3 = p3.trimEnd();
        
        let sueldoBasico=0;
        if(p1 = 'B-2')
            if(p3 = 'Junior') sueldoBasico = 91181,57;
            else if(p3 = 'Semi-Senior') sueldoBasico =  99508,87;
            else if(p3 = 'Senior') sueldoBasico = 107836,17;
        else if(p1 = 'B-10')
            if(p3 = 'Junior') sueldoBasico = 86522,94;
            else if(p3 = 'Semi-Senior') sueldoBasico = 94384,37;
            else if(p3 = 'Senior') sueldoBasico =  102245,81;
        else if(p1 = 'B-11')
            if(p3 = 'Junior') sueldoBasico =  84892,41;
            else if(p3 = 'Semi-Senior') sueldoBasico = 92590,80;
            else if(p3 = 'Senior') sueldoBasico = 100289,19;
        else{ } 

        return sueldoBasico;
    }
    CSueldoBruto(){
        let sueldoBruto = 0;
        let sueldoBasico = 0, sueldoAntiguedad = 0, sueldoIdioma = 0, sueldoTitulo = 0
        let sueldoPresentismo = 0, sueldoFuncion = 0, sueldoObjetivos = 0, sueldoAdicionales = 0
     
        sueldoBasico = this.CSueldoBasico();
        
        sueldoAntiguedad = sueldoBasico / 100 * this.antiguedad;
       
        if (this.idioma != 'Español') sueldoIdioma = sueldoBasico/100*8;
        
       
        if(this.presentismo = true) sueldoIdioma = sueldoBasico/100*2;
        
        if(this.funcion = 'Coordinador Grupo') sueldoFuncion = sueldoBasico/100*10;
        else if(this.funcion = 'Lider de Equipo') sueldoFuncion = sueldoBasico/100*20;
      
        sueldoBruto = sueldoBasico + sueldoAntiguedad + sueldoIdioma + sueldoTitulo + sueldoPresentismo + sueldoFuncion + sueldoAdicionales * sueldoObjetivos + this.adicional;
        console.log(sueldoBruto);
        return sueldoBruto;
      
    }
    CRetenciones(){
        let retencionTotal=0;
        if(this.jubilacion==true)
            retencionTotal=retencionTotal + (this.CSueldoBasico()/100*11);
        if(this.obraSocial==true)
            retencionTotal=retencionTotal + (this.CSueldoBasico()/100*3);
        if(this.sindicato==true)
            retencionTotal=retencionTotal + (this.CSueldoBasico()/100*1);
        return retencionTotal;
    }
    CSueldoNeto(){ return this.CSueldoBruto() - this.CRetenciones() }
}

let Empleados = [];
let i = 0;
function CrearEmpleado(nombreC, categoria, antiguedad, idioma, hijosG, presentismo, km, funcion, sindicato, jubilacion, obraSocial, adicional){
    Empleados.push(new CEmpleado(nombreC, categoria, antiguedad, idioma, hijosG, presentismo, km, funcion, sindicato, jubilacion, obraSocial, adicional));
    Empleados.forEach(function(){
        document.getElementById("tablaM").innerHTML =
        document.getElementById("tablaM").innerHTML + 
        ' <tr> <td><label>' + Empleados[i].nombreC + '</label></td> <td><label> ' + CCategoria(Empleados[i].categoria) + 
        '</label></td> <td><label>' + Empleados[i].antiguedad + ' A&ntilde;os' +  '</label></td> <td><label>' + Empleados[i].idioma + 
        '</label></td> <td><label>' + Empleados[i].hijosG +  '</label></td> <td><label>' + TrueFalse(Empleados[i].presentismo) + 
        '</label></td> <td><label>' + Empleados[i].km + 'Km' + '</label></td> <td><label>' + TrueFalse(Empleados[i].funcion) + 
        '</label></td> <td><label>' + TrueFalse(Empleados[i].sindicato) + '</label></td> <td><label>' + TrueFalse(Empleados[i].jubilacion) + 
        '</label></td> <td><label>' + TrueFalse(Empleados[i].obraSocial) +  '</label></td> <td><label>' + '$' + Empleados[i].adicional + 
        '</label></td> <td><label>' + '$' + Empleados[i].CSueldoNeto().toFixed(2) + '</label></td> </tr> '
        i++;
    })
}

function TrueFalse(aux){
    if(aux==true)
        return 'Si';
    else if(aux==false)
        return 'No';
    else if(aux==undefined)
        return '-';
    else 
        return aux;
}        

function CCategoria(category){
    let a=0;
    let p1='', p2='', p3='';
    for(let i=0; i<category.length; i++){
        if(category[i]!='|')
            if(a==0)
                p1=p1+category[i];
            else if(a==1)
                p2=p2+category[i];
            else if(a==2)
                p3=p3+category[i];
            else
                i=10000;
        else
            a++;
    }
    p1 = p1.trimEnd();
    p2 = p2.trimEnd();
    p3 = p3.trimEnd();

    answer = p1 + ' ' + p3;
    return answer;
}