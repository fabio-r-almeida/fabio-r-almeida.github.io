const checkbox_deficientes = document.getElementById('deficientes')
const checkbox_eletricos = document.getElementById('eletricos')
const checkbox_pagos = document.getElementById('pagos')
const checkbox_gratuitos = document.getElementById('gratuitos')
var deficientes_ativos = false;

var types = [false,false,false,true]; //["deficientes", "ev", "pagos", "parking"];
var types_files = ["deficientes", "ev", "pagos", "parking"];

  
checkbox_deficientes.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      types[0] = true;
      get_updated_parking();
    } else {
      types[0] = false;
      get_updated_parking();
    }
  })
  
  checkbox_eletricos.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      types[1] = true;
      get_updated_parking();
    } else {
      types[1] = false;
      get_updated_parking();
    }
  })
  
  checkbox_pagos.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      types[2] = true;
      get_updated_parking();
    } else {
      types[2] = false;
      get_updated_parking();
    }
  })
  
  checkbox_gratuitos.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      types[3] = true;
      get_updated_parking();
    } else {
      types[3] = false;
      get_updated_parking();
    }
  })
  
function jsonConcat(o1, o2) {
    for (var key in o2) {
     o1[o1.length++] = o2[key];
    }
    return o1;
   }


function update_(i) {
    return new Promise((resolve, reject) => {

    var currentDate = new Date();
    var timestamp = currentDate.getTime();
    $.get("http://fabio-almeida.com/OeirasValley/parking/" + types_files[i] + ".geojson?" + timestamp, function(data) {
            if(types[i] == true)
            resolve(data)
            else 
            resolve(JSON.parse('{  "type": "FeatureCollection",  "features": []}'))     
    });
})
}

setInterval(function() {
    get_updated_parking();
    }, 30000);