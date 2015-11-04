// ##### Get data-stations #####
$map = document.getElementById("map");
stations = JSON.parse($map.getAttribute("data-stations"));
console.log(stations);

// ##### Initialize Map #####
var map = L.map('map').setView([48.8, 2.34], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap',
    maxZoom: 18,
}).addTo(map);

// ##### Add Markers #####
for(i = 0; i < stations.length; i++)
{
  var marker = L.marker([stations[i].st_y, stations[i].st_x]).addTo(map);
}
