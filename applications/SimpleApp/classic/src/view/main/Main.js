/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SimpleApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Corp.common.form.field.RequiredTextField',

        'SimpleApp.view.main.MainController',
        'SimpleApp.view.main.MainModel',
        'SimpleApp.view.main.List',

        'SimpleApp.view.main.ComboBoxRemoteTestView',
    ],

    controller: { xclass: 'SimpleApp.view.main.MainController' },
    viewModel: 'main',

    title: 'SimpleApp - Classic',

    tbar: [
        {
            xtype: 'button',
            text: 'Tests',
            menu: [
                { text: 'Combo Box - Remote', handler: 'showComboBoxRemoteTest' },
            ]
        }
    ],

    items: [
        {
            xtype: 'panel',
            html: 'Use the menu above to navigate this application'
        }
    ]
});
