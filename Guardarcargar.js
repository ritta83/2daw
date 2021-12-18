

class Guardarcargar{

    constructor() {

        
    }
      
    guardarDatos() {

        let datos_caja1 = document.getElementById("CAJA1");  
        let datos_caja2 = document.getElementById("CAJA2");  
        let datos_caja3 = document.getElementById("CAJA3");
        let datos_caja4 = document.getElementById("CAJA4");
    
        //let cajasId = [datos_caja1.id, datos_caja2.id, datos_caja3, datos_caja4];
        
        let cajaValue1 = datos_caja1.value;  
        let cajaValue2 = datos_caja2.value;
        let cajaValue3 = datos_caja3.value;
        let cajaValue4 = datos_caja4.value;
    
        let cajasValue_json = {"caja1" : cajaValue1, "caja2" : cajaValue2, "caja3" : cajaValue3, "caja4" : cajaValue4};
    
        let cajasValue_str = JSON.stringify(cajasValue_json);
    
        localStorage.setItem("cajas", cajasValue_str);
    
    }
    
    cargarMercado() {
        
    
        console.log("pasa por 1");
    
        let cajasValue_str = localStorage.getItem("cajas");
        let cajasValue_json = JSON.parse(cajasValue_str);
        
        console.log( cajasValue_json.caja1 );
        console.log( cajasValue_json["caja1"] );
    
        let contador = 1;
    
        for (let key in cajasValue_json) {
    
            let value = cajasValue_json[key];
    
            console.log("mostramos el atributo con la clave " + key);
            console.log(value);
    
            let divcaja = document.getElementById("divcaja" + contador); // cambiar atributos HTML / CSS
            divcaja.style.background = "rgba(34,193,195,1)";
    
            let div_mensaje = document.getElementById(`mensaje` + contador);
            div_mensaje.innerHTML = "<br>En la caja hay " + value + " cliente";
    
            let datos_caja = document.getElementById("CAJA" + contador);  
            datos_caja.value = value;
    
            if (cajasValue_json[key] <= 0) {
                //total_clientes_caja = 0;
                divcaja.style.background = "rgba(216, 7, 7,1)";
                div_mensaje.innerHTML = "<br>Caja cerrada";
            } 
    
            contador++;
        }
    
    }

} 

let guardarCargar = new Guardarcargar();//OBJETO GUARDARCARGAR



