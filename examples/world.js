
var map = L.map('map', {
    center: [0, 0],
    zoom: 2,
});

map.date=new Date('01/01/2021') ;
// add the calendar
L.control.datepicker({minDate:'2018-01-01', maxDate:'2021-12-31'}).addTo(map) ;

let layers=L.control.layers({},{}).addTo(map)

//sea ice concentrations - daily
layers.addOverlay(
    L.tileLayer.time(
        "http://gibs.earthdata.nasa.gov/wmts/epsg3857/best/{layer}/default/{time}/{tileMatrixSet}/{z}/{y}/{x}.jpeg", 
        {
            layer: "MODIS_Terra_CorrectedReflectance_TrueColor",
            tileMatrixSet: "GoogleMapsCompatible_Level9",
            tileSize: 256,
            format: "image/jpg",
            freq:'daily',
            attribution: "NASA-GIBS",
        }
    ).addTo(map) ,
    "MODIS - Daily"
);


//graticule - for completeness
L.graticule({
    intervalLat: 10,
    intervalLng: 30,
    latBounds: [-180,181],
    centerLatLabels:false,
    style:{
        color: "#bababa",
        weight: 1, 
    },
}).addTo(map)