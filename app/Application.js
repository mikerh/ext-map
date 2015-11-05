Ext.define('Map.Application', {
    extend: 'Ext.app.Application',
    name: 'Map',
    stores: [],
    launch: function () {

    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
