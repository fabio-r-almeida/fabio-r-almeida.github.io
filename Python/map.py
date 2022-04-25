import folium
from sqlalchemy import false


mapObj = folium.Map(location=[38.71395,-9.2612], zoom_start=13, min_zoom=13)

bordersStyle1 = {
    'color': 'blue',
    'weight': 3,
    'fillColor': 'white',
    'fillOpacity': 0
}

bordersStyle2 = {
    'color': 'white',
    'weight': 0,
    'fillColor': 'white',
    'fillOpacity': 0.7
}

layer1 = folium.GeoJson(
    data=(open("./Backup/oeiras.geojson", 'r').read()), name="Oeiras", style_function=lambda x: bordersStyle1).add_to(mapObj)

mapObj.save('output1.html')