var deficientes_ativos = false;

var types = [false,false,false,true]; //["deficientes", "ev", "pagos", "parking"];
var types_files = ["deficientes", "ev", "pagos", "parking"];

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
    $.get("./parking/" + types_files[i] + ".geojson?" + timestamp, function(data) {
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