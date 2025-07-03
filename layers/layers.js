var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Colonia_1 = new ol.format.GeoJSON();
var features_Colonia_1 = format_Colonia_1.readFeatures(json_Colonia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colonia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colonia_1.addFeatures(features_Colonia_1);
var lyr_Colonia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colonia_1, 
                style: style_Colonia_1,
                popuplayertitle: 'Colonia',
                interactive: false,
                title: '<img src="styles/legend/Colonia_1.png" /> Colonia'
            });
var format_Actoresenterritorio_2 = new ol.format.GeoJSON();
var features_Actoresenterritorio_2 = format_Actoresenterritorio_2.readFeatures(json_Actoresenterritorio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Actoresenterritorio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Actoresenterritorio_2.addFeatures(features_Actoresenterritorio_2);
var lyr_Actoresenterritorio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Actoresenterritorio_2, 
                style: style_Actoresenterritorio_2,
                popuplayertitle: 'Actores en territorio',
                interactive: true,
                title: '<img src="styles/legend/Actoresenterritorio_2.png" /> Actores en territorio'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Colonia_1.setVisible(true);lyr_Actoresenterritorio_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Colonia_1,lyr_Actoresenterritorio_2];
lyr_Colonia_1.set('fieldAliases', {'gid': 'gid', 'nombre': 'nombre', 'areakm2': 'areakm2', 'perimetro': 'perimetro', 'popup': 'popup', });
lyr_Actoresenterritorio_2.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'RUBRO': 'RUBRO', 'CONTACTO': 'CONTACTO', });
lyr_Colonia_1.set('fieldImages', {'gid': 'Range', 'nombre': 'TextEdit', 'areakm2': 'TextEdit', 'perimetro': 'TextEdit', 'popup': 'TextEdit', });
lyr_Actoresenterritorio_2.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'RUBRO': '', 'CONTACTO': 'TextEdit', });
lyr_Colonia_1.set('fieldLabels', {'gid': 'no label', 'nombre': 'no label', 'areakm2': 'no label', 'perimetro': 'no label', 'popup': 'no label', });
lyr_Actoresenterritorio_2.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'inline label - always visible', 'RUBRO': 'inline label - always visible', 'CONTACTO': 'inline label - always visible', });
lyr_Actoresenterritorio_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});