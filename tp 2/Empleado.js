class empleado{
    constructor(nombre, fecha, direccion){
        this.nombre = nombre;
        this.fecha = fecha;
        this.direccion = direccion;
    }
}

let Empleados = [];
let i = 0;
function newEmpleado(nombre, fecha, direccion){
    Empleados.push(new empleado(nombre,fecha, direccion));
    Empleados.forEach(function(nombre, fecha, direccion) {
        console.log(nombre, fecha, direccion);
        document.getElementById("tablaM").innerHTML =
        document.getElementById("tablaM").innerHTML + ' <tr> <td width="25%"><label>' + Empleados[i].nombre +  '</label></td> <td width="25%"><label> ' + Empleados[i].fecha + 
        '</label></td> <td width="50%"><label>' + Empleados[i].direccion + '</label></td> </tr> '
        i++;
    })
}