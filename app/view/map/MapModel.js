Ext.define('Map.view.map.MapModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.map',
    stores: {
        Markers: {
            storeId: 'Markers',
            autoLoad: false,
            fields: ['lat', 'lng', 'title', 'url'],
            data: [
                {lat: 47.605568, lng: -122.335907, title: "Seattle", url: 'https://en.wikipedia.org/wiki/Seattle'},
                {lat: 41.877120, lng: -87.633971, title: "Chicago", url: 'https://en.wikipedia.org/wiki/Chicago'},
                {lat: 40.711556, lng: -74.009213, title: "New York", url: 'https://en.wikipedia.org/wiki/New_York'},
                {lat: 51.516596, lng: -0.128383, title: "London", url: 'https://en.wikipedia.org/wiki/London'},
                {lat: 55.764156, lng: 37.617370, title: "Moscow", url: 'https://en.wikipedia.org/wiki/Moscow'},
                {lat: 37.558558, lng: 126.989548, title: "Seoul", url: 'https://en.wikipedia.org/wiki/Seoul'},
                {lat: 35.682805, lng: 139.756735, title: "Tokyo", url: 'https://en.wikipedia.org/wiki/Tokyo'},
                {lat: -33.867334, lng: 151.208053, title: "Sydney", url: 'https://en.wikipedia.org/wiki/Sydney'},
                {lat: -33.922646, lng: 18.407470, title: "Cape Town", url: 'https://en.wikipedia.org/wiki/Cape_Town'},
                {
                    lat: -23.550230,
                    lng: -46.628265,
                    title: "Sao Paulo",
                    url: 'https://en.wikipedia.org/wiki/S%C3%A3o_Paulo'
                }
            ]
        }
    }
});
