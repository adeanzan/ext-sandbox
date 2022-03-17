Ext.define('SimpleApp.view.main.ComboBoxRemoteTestView', {
    extend: 'Ext.panel.Panel',

    items: [
        // A combo box that triggers a load the first time it's expanded
        {
            xtype: 'combobox',
            store: {
                fields: ['abbr', 'name' ],
                proxy: {
                    type: 'rest',
                    url: 'resources/states.json',
                    reader: {
                        type: 'json'
                    }
                },
            },
            lastQuery: '',
            listeners: {
                expand: {
                    fn: function(combo, opts) {
                        combo.getStore().load();
                    },
                    single: true,
                }
            },

            fieldLabel: 'States',
            displayField: 'name',
            valueField: 'abbr',
        }
    ],
});