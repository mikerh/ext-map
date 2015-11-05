Ext.application({
    name: 'Map',
    extend: 'Map.Application',
    requires: [
        'Map.view.main.Main'
    ],
    mainView: 'Map.view.main.Main'
});
