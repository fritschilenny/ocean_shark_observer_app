const sharks = [
    {
        name: 'Great White Shark',
        species: 'Carcharodon carcharias',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/800px-White_shark.jpg',
        lat: 28.3852, 
        lon: -81.5639, 
        radius: 500000
    },
    {
        name: 'Tiger Shark',
        species: 'Galeocerdo cuvier',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tiger_shark.jpg/800px-Tiger_shark.jpg',
        lat: 25.7617, 
        lon: -80.1918, 
        radius: 400000
    },
    {
        name: 'Hammerhead Shark',
        species: 'Sphyrnidae',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Scalloped_hammerhead_shark.jpg/800px-Scalloped_hammerhead_shark.jpg',
        lat: 34.0522, 
        lon: -118.2437, 
        radius: 200000
    },
    {
        name: 'Whale Shark',
        species: 'Rhincodon typus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Whale_shark_Georgia_aquarium.jpg/1024px-Whale_shark_Georgia_aquarium.jpg',
        lat: 12.9094, 
        lon: 123.5942,
        radius: 1000000
    },
    {
        name: 'Basking Shark',
        species: 'Cetorhinus maximus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Cetorhinus_maximus_by_greg_skomal.JPG/1024px-Cetorhinus_maximus_by_greg_skomal.JPG',
        lat: 54.2361, 
        lon: -4.5481,
        radius: 800000
    },
    {
        name: 'Mako Shark',
        species: 'Isurus oxyrinchus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Shortfin_mako_shark.jpg/1024px-Shortfin_mako_shark.jpg',
        lat: 35.0, 
        lon: 18.0,
        radius: 600000
    },
    {
        name: 'Oceanic Whitetip Shark',
        species: 'Carcharhinus longimanus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Oceanic_whitetip_shark.jpg/1024px-Oceanic_whitetip_shark.jpg',
        lat: 25.0343, 
        lon: -77.3963,
        radius: 700000
    },
    {
        name: 'Blue Shark',
        species: 'Prionace glauca',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Blue_shark_from_the_side.jpg/1024px-Blue_shark_from_the_side.jpg',
        lat: 36.7783, 
        lon: -119.4179,
        radius: 1200000
    },
    {
        name: 'Thresher Shark',
        species: 'Alopias vulpinus',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Common_thresher_shark_in_the_Red_Sea.jpg/1024px-Common_thresher_shark_in_the_Red_Sea.jpg',
        lat: 11.3325, 
        lon: 124.1144,
        radius: 300000
    },
    {
        name: 'Bull Shark',
        species: 'Carcharhinus leucas',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Bull_shark_Beqa_Lagoon_Fiji_2007.jpg/1024px-Bull_shark_Beqa_Lagoon_Fiji_2007.jpg',
        lat: 11.5167, 
        lon: -85.3500,
        radius: 250000
    }
];

const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

sharks.forEach(shark => {
    const circle = L.circle([shark.lat, shark.lon], {
        radius: shark.radius,
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);
    circle.bindPopup(`<b>${shark.name}</b><br>${shark.species}<br><img src="${shark.image}" alt="${shark.name}" width="100">`);
});