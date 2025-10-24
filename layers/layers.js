var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KL_Wards_1 = new ol.format.GeoJSON();
var features_KL_Wards_1 = format_KL_Wards_1.readFeatures(json_KL_Wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KL_Wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KL_Wards_1.addFeatures(features_KL_Wards_1);
var lyr_KL_Wards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KL_Wards_1, 
                style: style_KL_Wards_1,
                popuplayertitle: 'KL_Wards',
                interactive: true,
    title: 'KL_Wards<br />\
    <img src="styles/legend/KL_Wards_1_0.png" /> ATHIRATTUKUNNU<br />\
    <img src="styles/legend/KL_Wards_1_1.png" /> CHEENGODE<br />\
    <img src="styles/legend/KL_Wards_1_2.png" /> CHEEYAMBAM<br />\
    <img src="styles/legend/KL_Wards_1_3.png" /> CHERUKUNNU<br />\
    <img src="styles/legend/KL_Wards_1_4.png" /> CHUNDAKOLLY<br />\
    <img src="styles/legend/KL_Wards_1_5.png" /> GANDHINAGAR<br />\
    <img src="styles/legend/KL_Wards_1_6.png" /> IRULAM<br />\
    <img src="styles/legend/KL_Wards_1_7.png" /> KELAMANGALAM<br />\
    <img src="styles/legend/KL_Wards_1_8.png" /> KENICHIRA<br />\
    <img src="styles/legend/KL_Wards_1_9.png" /> KOLERI<br />\
    <img src="styles/legend/KL_Wards_1_10.png" /> KOTTAKOLLY<br />\
    <img src="styles/legend/KL_Wards_1_11.png" /> KOTTAVAYAL<br />\
    <img src="styles/legend/KL_Wards_1_12.png" /> MANALVAYAL<br />\
    <img src="styles/legend/KL_Wards_1_13.png" /> MARIYANAD<br />\
    <img src="styles/legend/KL_Wards_1_14.png" /> MOODAKOLLY<br />\
    <img src="styles/legend/KL_Wards_1_15.png" /> NADAVAYAL<br />\
    <img src="styles/legend/KL_Wards_1_16.png" /> NELLIKKARA<br />\
    <img src="styles/legend/KL_Wards_1_17.png" /> PAPLASSERI<br />\
    <img src="styles/legend/KL_Wards_1_18.png" /> POOTHADI<br />\
    <img src="styles/legend/KL_Wards_1_19.png" /> THAZAMUNDA<br />\
    <img src="styles/legend/KL_Wards_1_20.png" /> THOOTHALERI<br />\
    <img src="styles/legend/KL_Wards_1_21.png" /> VAKERI<br />\
    <img src="styles/legend/KL_Wards_1_22.png" /> VALAVAYAL<br />\
    <img src="styles/legend/KL_Wards_1_23.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KL_Wards_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KL_Wards_1];
lyr_KL_Wards_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_KL_Wards_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_KL_Wards_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_KL_Wards_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});