Ext.define('Map.view.main.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.main',
    requires: [
        'Ext.layout.container.Fit',
        'Map.view.main.MainController',
        'Map.view.main.MainModel'
    ],
    layout: 'fit',
    controller: 'main',
    viewModel: 'main',
    items: [],
    listeners: {
        afterrender: 'onAfterViewportRender'
    }
});
