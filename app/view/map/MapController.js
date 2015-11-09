Ext.define('Map.view.map.MapController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.map',
    requires: [
        'Ext.container.Container',
        'Ext.layout.container.Border',
        'Ext.layout.container.Fit',
        'Ext.ux.GMapPanel',
        'Ext.ux.IFrame',
        'Ext.window.Window'
    ],
    config: {
        listen: {
            // The fireEvent() is coming from a component so we listen on the component event domain
            component: {
                // The component we are listening to is alias : map
                'map': {
                    // The fireEvent() from the map component
                    markerClick: function (marker) {
                        /*
                         * This will create and open a window with a zoomed in street map as well
                         * as open the WikiPedia page from the url on the marker
                         * */
                        Ext.create('Ext.window.Window', {
                            title: marker.title, // Marker title
                            height: 600,
                            width: 1000,
                            modal: true,
                            layout: 'border',
                            maximizable: true,
                            items: [
                                {
                                    xtype: 'gmappanel',
                                    region: 'west',
                                    split: true,
                                    width: 300,
                                    center: {
                                        lat: marker.lat, // Marker latitude
                                        lng: marker.lng // Marker longitude
                                    },
                                    mapOptions: {
                                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                                        zoom: 10
                                    }
                                },
                                {
                                    xtype: 'container',
                                    region: 'center',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'uxiframe',
                                            src: marker.url // Marker URL
                                        }
                                    ]
                                }
                            ]
                        }).show()
                    }
                }
            }
        }
    },
    /*
    * The init method fires before the view is initialized and the markers are loaded from the store
    **/
    init: function () {
        var me = this,
            map = me.getView(), //Reference to map view
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
    },
    /*
    * Method to add a new marker.  This could come from a form and could also use the geocode function
    * */
    addNewMarker: function (btn) {
        var map = btn.up('map'),
            marker = {
                lat: 31.633725,
                lng: -7.993092,
                title: "Marrakesh",
                url: 'https://en.wikipedia.org/wiki/Marrakesh',
                animation: google.maps.Animation.DROP
            };
        map.addMarker(marker)
    }
});
