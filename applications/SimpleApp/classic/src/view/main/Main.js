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
        'SimpleApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    title: 'SimpleApp - Classic',

    items: [
        {
            xtype: 'corp-requiredtextfield',
            fieldLabel: 'Example Required Text'
        }
    ]
});
