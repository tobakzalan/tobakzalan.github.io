var wms_layers = [];

var format_Jrsok_0 = new ol.format.GeoJSON();
var features_Jrsok_0 = format_Jrsok_0.readFeatures(json_Jrsok_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jrsok_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jrsok_0.addFeatures(features_Jrsok_0);
var lyr_Jrsok_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jrsok_0, 
                style: style_Jrsok_0,
                interactive: true,
    title: 'Járások<br />\
    <img src="styles/legend/Jrsok_0_0.png" /> Csongrádi<br />\
    <img src="styles/legend/Jrsok_0_1.png" /> Szentesi<br />\
    <img src="styles/legend/Jrsok_0_2.png" /> Kisteleki<br />\
    <img src="styles/legend/Jrsok_0_3.png" /> Hódmezővásárhelyi<br />\
    <img src="styles/legend/Jrsok_0_4.png" /> Mórahalmi<br />\
    <img src="styles/legend/Jrsok_0_5.png" /> Szegedi<br />\
    <img src="styles/legend/Jrsok_0_6.png" /> Makói<br />'
        });
var format_Telepls_1 = new ol.format.GeoJSON();
var features_Telepls_1 = format_Telepls_1.readFeatures(json_Telepls_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Telepls_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Telepls_1.addFeatures(features_Telepls_1);
var lyr_Telepls_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Telepls_1, 
                style: style_Telepls_1,
                interactive: true,
                title: '<img src="styles/legend/Telepls_1.png" /> Település'
            });
var format_llvz_2 = new ol.format.GeoJSON();
var features_llvz_2 = format_llvz_2.readFeatures(json_llvz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_llvz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_llvz_2.addFeatures(features_llvz_2);
var lyr_llvz_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_llvz_2, 
                style: style_llvz_2,
                interactive: true,
                title: '<img src="styles/legend/llvz_2.png" /> Állóvíz'
            });
var format_Vzfolys_3 = new ol.format.GeoJSON();
var features_Vzfolys_3 = format_Vzfolys_3.readFeatures(json_Vzfolys_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vzfolys_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vzfolys_3.addFeatures(features_Vzfolys_3);
var lyr_Vzfolys_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vzfolys_3, 
                style: style_Vzfolys_3,
                interactive: true,
                title: '<img src="styles/legend/Vzfolys_3.png" /> Vízfolyás'
            });
var format_thalzat_4 = new ol.format.GeoJSON();
var features_thalzat_4 = format_thalzat_4.readFeatures(json_thalzat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thalzat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thalzat_4.addFeatures(features_thalzat_4);
var lyr_thalzat_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_thalzat_4, 
                style: style_thalzat_4,
                interactive: true,
    title: 'Úthalózat<br />\
    <img src="styles/legend/thalzat_4_0.png" /> Elsőrendű út<br />\
    <img src="styles/legend/thalzat_4_1.png" /> Másodrendű út<br />\
    <img src="styles/legend/thalzat_4_2.png" /> Egyéb út<br />'
        });
var format_Csongrdmegye_5 = new ol.format.GeoJSON();
var features_Csongrdmegye_5 = format_Csongrdmegye_5.readFeatures(json_Csongrdmegye_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Csongrdmegye_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Csongrdmegye_5.addFeatures(features_Csongrdmegye_5);
var lyr_Csongrdmegye_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Csongrdmegye_5, 
                style: style_Csongrdmegye_5,
                interactive: true,
                title: '<img src="styles/legend/Csongrdmegye_5.png" /> Csongrád megye'
            });

lyr_Jrsok_0.setVisible(true);lyr_Telepls_1.setVisible(true);lyr_llvz_2.setVisible(true);lyr_Vzfolys_3.setVisible(true);lyr_thalzat_4.setVisible(true);lyr_Csongrdmegye_5.setVisible(true);
var layersList = [lyr_Jrsok_0,lyr_Telepls_1,lyr_llvz_2,lyr_Vzfolys_3,lyr_thalzat_4,lyr_Csongrdmegye_5];
lyr_Jrsok_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TELHAT_ID': 'TELHAT_ID', 'TELNEV': 'TELNEV', 'KSHKOD': 'KSHKOD', 'TELNAGYSAG': 'TELNAGYSAG', 'KISTERSEG': 'KISTERSEG', 'AGGLO': 'AGGLO', });
lyr_Telepls_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'BELTER_': 'BELTER_', 'BELTER_ID': 'BELTER_ID', 'TELNEV': 'TELNEV', });
lyr_llvz_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TO_': 'TO_', 'TO_ID': 'TO_ID', 'BENT': 'BENT', });
lyr_Vzfolys_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'FOLYO_': 'FOLYO_', 'FOLYO_ID': 'FOLYO_ID', 'BENT': 'BENT', });
lyr_thalzat_4.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'UTAK_': 'UTAK_', 'UTAK_ID': 'UTAK_ID', 'DXF_LAYER': 'DXF_LAYER', 'DXF_COLOR': 'DXF_COLOR', 'DXF_THICKN': 'DXF_THICKN', 'DXF_TYPE': 'DXF_TYPE', 'DXF_ELEVAT': 'DXF_ELEVAT', 'DXF_CURVE': 'DXF_CURVE', 'REND': 'REND', 'FORG': 'FORG', });
lyr_Csongrdmegye_5.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'MEGYE_': 'MEGYE_', 'MEGYE_ID': 'MEGYE_ID', 'M': 'M', });
lyr_Jrsok_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TELHAT_ID': 'TextEdit', 'TELNEV': 'TextEdit', 'KSHKOD': 'Range', 'TELNAGYSAG': 'TextEdit', 'KISTERSEG': 'TextEdit', 'AGGLO': 'Range', });
lyr_Telepls_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'BELTER_': 'TextEdit', 'BELTER_ID': 'TextEdit', 'TELNEV': 'TextEdit', });
lyr_llvz_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TO_': 'TextEdit', 'TO_ID': 'TextEdit', 'BENT': 'Range', });
lyr_Vzfolys_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'FOLYO_': 'TextEdit', 'FOLYO_ID': 'TextEdit', 'BENT': 'Range', });
lyr_thalzat_4.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'UTAK_': 'TextEdit', 'UTAK_ID': 'TextEdit', 'DXF_LAYER': 'TextEdit', 'DXF_COLOR': 'Range', 'DXF_THICKN': 'TextEdit', 'DXF_TYPE': 'TextEdit', 'DXF_ELEVAT': 'TextEdit', 'DXF_CURVE': 'Range', 'REND': 'Range', 'FORG': 'Range', });
lyr_Csongrdmegye_5.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'MEGYE_': 'TextEdit', 'MEGYE_ID': 'TextEdit', 'M': 'Range', });
lyr_Jrsok_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TELHAT_ID': 'no label', 'TELNEV': 'no label', 'KSHKOD': 'no label', 'TELNAGYSAG': 'no label', 'KISTERSEG': 'no label', 'AGGLO': 'no label', });
lyr_Telepls_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'BELTER_': 'no label', 'BELTER_ID': 'no label', 'TELNEV': 'no label', });
lyr_llvz_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TO_': 'no label', 'TO_ID': 'no label', 'BENT': 'no label', });
lyr_Vzfolys_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'FOLYO_': 'no label', 'FOLYO_ID': 'no label', 'BENT': 'no label', });
lyr_thalzat_4.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'UTAK_': 'no label', 'UTAK_ID': 'no label', 'DXF_LAYER': 'no label', 'DXF_COLOR': 'no label', 'DXF_THICKN': 'no label', 'DXF_TYPE': 'no label', 'DXF_ELEVAT': 'no label', 'DXF_CURVE': 'no label', 'REND': 'no label', 'FORG': 'no label', });
lyr_Csongrdmegye_5.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'MEGYE_': 'no label', 'MEGYE_ID': 'no label', 'M': 'no label', });
lyr_Csongrdmegye_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});