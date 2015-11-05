Ext.define('Map.view.map.Map', {
    extend: 'Ext.ux.GMapPanel',
    alias: 'widget.map',
    region: 'center',
    requires: [
        'Ext.layout.container.Fit',
        'Map.view.map.MapController',
        'Map.view.map.MapModel'
    ],
    layout: 'fit',
    controller: 'map',
    viewModel: 'map',
    center: {
        lat: 15,
        lng: 10
    },
    mapOptions: {
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        zoom: 3
    },

    addMarker: function (marker) {
        var me = this;
        marker = Ext.apply({
            map: this.gmap
        }, marker);
        if (!marker.position) {
            marker.position = new google.maps.LatLng(marker.lat, marker.lng);
        }
        var m = new google.maps.Marker(marker);
        google.maps.event.addListener(m, "click", function () {
            me.fireEvent('markerClick', m); // This fires and event that can be listened to in controllers
        });
        return m;
    }
});
