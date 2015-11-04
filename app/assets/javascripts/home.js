// ##### Get data-stations #####
$map = document.getElementById("map");
$measure = document.getElementById("measure");
stations = JSON.parse($map.getAttribute("data-stations"));
pk = JSON.parse($map.getAttribute("data-pk"));

// ##### Change page onclick #####
// TODO
/*$('input[type=radio]').click(function() {
  window.location.href = "/map/" + this.id;
});*/


// ##### Initialize Map #####
var map = L.map('map').setView([48.8, 2.34], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap',
    maxZoom: 18,
}).addTo(map);

// ##### Add Layer #####
var markersLayer = L.featureGroup();
markersLayer.addTo(map);

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
/*
for(i = 0; i < lines.length; i++)
{
  console.log(lines[i]);
}
*/

// ##### Add PK circle #####
var line;
for(i = 0; i < pk.length; i++)
{
  line = pk[i].ligne
  if(pk[i].st_x && pk[i].st_y)
  {
    var circle = L.circle([pk[i].st_y, pk[i].st_x], 50, {
      color: '#789048',
      fillColor: '#C0D860',
      fillOpacity: 1,
      opacity: 1
    });
    circle.type = "PK";
    circle.addTo(markersLayer);
  }
}

// ##### Marker params #####
params = {
  SNCF: {
    color: "#0041B1",
    size: 250
  },
  NETATMO: {
    color: "#F69730",
    size: 100
  }
}

// ##### Add Stations Marker #####
for(i = 0; i < stations.length; i++)
{
  if(stations[i].st_x && stations[i].st_y)
  {
    var circle = L.circle([stations[i].st_y, stations[i].st_x], params[stations[i].operateur].size, {
      color: params[stations[i].operateur].color,
      fillColor: params[stations[i].operateur].color,
      fillOpacity: 1,
      opacity: 1
    });
    circle.id = stations[i].station_id;
    circle.type = stations[i].operateur;
    circle.on('click', getMarkerMeasure);
    circle.addTo(markersLayer);
  }
}

// ##### Show measure onclick #####
function getMarkerMeasure(e)
{
  $.ajax({
    type: "GET",
    url: "/stations/" + e.target.id + "/measures",
    dataType: "json",
    success: function(data){
      console.log(data);
      $measure.innerHTML = "";
    }
  });
}


// ##### Resize markers on zoom #####
