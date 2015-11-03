var map = L.map('map').setView([48.8, 2.34], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap',
    maxZoom: 18,
}).addTo(map);
