Ext.define('Map.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: [
        'Map.view.map.Map'
    ],

    onAfterViewportRender: function (vp) {
        var map = Ext.widget('map'), // Create the Map widget
            store = map.getViewModel().getStore('Markers'), // Get the store from the ViewModel
            markers = [], // Create and empty markers array
            data;
        // Load the store
        store.load(function (records) {
            // Iterate through each record
            Ext.each(records, function (record) {
                data = record.getData(); // Get the data object from each record
                markers.push(data); // Push the objects onto the markers array
            });
        });
        map.markers = markers;  // Set the markers config for the Map component to the markers array
        vp.add(map); // Add the map to the viewport
    }
});
