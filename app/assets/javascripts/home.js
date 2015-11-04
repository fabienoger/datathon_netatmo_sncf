// ##### Get data-stations #####
$map = document.getElementById("map");
$measure = document.getElementById("measure");
stations = JSON.parse($map.getAttribute("data-stations"));
pk = JSON.parse($map.getAttribute("data-pk"));

// ##### Change page onclick #####
$('input[type=radio]').click(function() {
  window.location.href = "/map/" + this.id;
});


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
      color: '#A20707',
      fillColor: '#A20707',
      fillOpacity: 1,
      opacity: 1
    });
    circle.type = "PK";
    circle.id = pk[i].pk;
    circle.on('click', getPkMeasure);
    circle.addTo(markersLayer);
  }
}

// ##### Marker params #####
params = {
  SNCF: {
    color: "#C1600B",
    size: 250
  },
  NETATMO: {
    color: "#175A88",
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
  var measureType = $("input[name=measure]:checked").val();
  $.ajax({
    type: "GET",
    url: "/stations/" + e.target.id + "/measures/" + measureType,
    dataType: "json",
    success: function(data){
      console.log(data);
      $measure.style.display = "block";
      $measure.innerHTML = "<img width='100%' height='100' src='/assets/" + e.target.type + ".jpg'>";
      $measure.innerHTML += "<h5>" + data.categ + "</h5><div class='value'>" + parseInt(data.value) + " " + data.unit + "</div>";
    }
  });
}

// ##### Show measure onclick #####
function getPkMeasure(e)
{
  $.ajax({
    type: "GET",
    url: "/pk/" + e.target.id + "/measures/",
    dataType: "json",
    success: function(data){
      console.log(data);
      $measure.style.display = "block";
      $measure.innerHTML = "<img width='100%' height='100' src='/assets/SNCF.jpg'>";
      $measure.innerHTML += "<h5>Température moyenne</h5><div class='value'>" + parseInt(data.temperature_moyenne) + "°C</div>";
    }
  });
}

// ##### Resize markers on zoom #####
