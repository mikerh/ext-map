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
    }
});
