// ##### Get data-stations #####
$map = document.getElementById("map");
stations = JSON.parse($map.getAttribute("data-stations"));
pk = JSON.parse($map.getAttribute("data-pk"));

// ##### Initialize Map #####
var map = L.map('map').setView([48.8, 2.34], 9);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap',
    maxZoom: 18,
}).addTo(map);

// ##### Get all the differents lines #####
var lines = [];
for(i = 0; i < pk.length; i++)
{
  line = pk[i].ligne
  if(i > 0 && pk[i - 1].ligne == line)
  {
    continue;
  }
// ##### Push line in array if if not already present #####
  lines.push(pk[i].ligne);
}

// ##### Display lines #####
for(i = 0; i < lines.length; i++)
{
  console.log(lines[i]);
}

// ##### Add PK circle #####
var line;
for(i = 0; i < pk.length; i++)
{
  line = pk[i].ligne
  var circle = L.circle([pk[i].st_y, pk[i].st_x], 200, {
    color: '#951F2B',
    fillColor: '#f03',
    fillOpacity: 0.5
  }).addTo(map);
}

// ##### Add Stations Marker #####
for(i = 0; i < stations.length; i++)
{
  var marker = L.marker([stations[i].st_y, stations[i].st_x]).addTo(map);
  marker.bindPopup("<b>" + stations[i].station_id  + "</b><br>" + stations[i].operateur);
}
