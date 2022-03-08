/**
 * Example of extending an Ext component in a package
 */
Ext.define('Corp.common.form.field.RequiredTextField', {
    extend: 'Ext.form.field.Text',

    allowBlank: false
});