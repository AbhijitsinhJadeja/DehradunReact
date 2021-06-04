var view = new ol.View({
    center: ol.proj.fromLonLat([78.0322, 30.3165]),
    zoom: 11
})

var overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250,
    },
});

var map = new ol.Map({
    target: 'map',
    layers: [],
    controls: [],
    view: view,
    overlays: [overlay],
});

var osmMap = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    title: 'OSMStandard'
});
map.addLayer(osmMap);