var datos = {};


var misDatos = info => {
    datos.tiposDiesel = info; 
    var html = "";

    html += "<table border='1'>";
    html += "<tr>";
    html += "<th>ID</th>";
    html += "<th>Nombre</th>";
    html += "<th>Tipo de Diésel</th>";
    html += "<th>Descripción</th>";
    html += "<th>Composición Química</th>";
    html += "<th>Precio por Litro (MXN)</th>";
    html += "</tr>";

    
    datos.tiposDiesel.map(diesel => {
        html += "<tr>";
        html += "<td>" + diesel.id + "</td>";
        html += "<td>" + diesel.nombre + "</td>";
        html += "<td>" + diesel.tipoDiesel + "</td>";
        html += "<td>" + diesel.descripcion + "</td>";
        html += "<td>" + diesel.composicionQuimica + "</td>";
        html += "<td>" + diesel.precioPorLitro + "</td>";
        html += "</tr>";
    });

    html += "</table>";
    document.getElementById("resultados").innerHTML = html;
};


var script = document.createElement("script");
script.src = "tiposD.jsonp";  
document.body.appendChild(script);



