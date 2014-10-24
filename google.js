var geocoderProvider = 'google';
var httpAdapter = 'https';
// optionnal
var extra = {
    apiKey: 'AIzaSyDpDRKT-2GGtgxsM1Dj9AIez5QV8yXKSGU', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
};

var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter, extra);

// Using callback
geocoder.geocode('29 champs elys¨¦e paris', function(err, res) {
    console.log(res);
});

// Or using Promise
geocoder.geocode('29 champs elys¨¦e paris')
    .then(function(res) {
        console.log(res);
    })
    .catch(function(err) {
        console.log(err);
    });
