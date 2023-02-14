var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Sentinel2cloudless2021byEOX_1 = new ol.layer.Tile({
            'title': 'Sentinel-2 cloudless 2021 by EOX',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://s2maps-tiles.eu/wmts?layer=s2cloudless-2021_3857&style=default&tilematrixset=GoogleMapsCompatible&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/jpeg&TileMatrix={z}&TileCol={x}&TileRow={y}'
            })
        });
var format_GTPoints_2 = new ol.format.GeoJSON();
var features_GTPoints_2 = format_GTPoints_2.readFeatures(json_GTPoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GTPoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GTPoints_2.addFeatures(features_GTPoints_2);cluster_GTPoints_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GTPoints_2
});
var lyr_GTPoints_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_GTPoints_2, 
                style: style_GTPoints_2,
                interactive: true,
                title: '<img src="styles/legend/GTPoints_2.png" /> GT-Points'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Sentinel2cloudless2021byEOX_1.setVisible(true);lyr_GTPoints_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Sentinel2cloudless2021byEOX_1,lyr_GTPoints_2];
lyr_GTPoints_2.set('fieldAliases', {'Id': 'Id', 'Forest typ': 'Forest typ', 'Dominant spp': 'Dominant spp', 'Other Spp': 'Other Spp', });
lyr_GTPoints_2.set('fieldImages', {'Id': 'Range', 'Forest typ': 'TextEdit', 'Dominant spp': '', 'Other Spp': '', });
lyr_GTPoints_2.set('fieldLabels', {'Id': 'inline label', 'Forest typ': 'header label', 'Dominant spp': 'header label', 'Other Spp': 'header label', });
lyr_GTPoints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});