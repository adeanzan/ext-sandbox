/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('SimpleApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',

        'Corp.common.field.RequiredText'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home - Modern',
            items: [
                {
                    xtype: 'panel',
                    html: 'Some content on the modern home page'
                },
                {
                    xtype: 'corp-requiredtextfield',
                    label: 'Example Required Text Field',
                }
            ]
        }
    ]
});
