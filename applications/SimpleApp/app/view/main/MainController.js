/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SimpleApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    showComboBoxRemoteTest: function () {
        this.getView().removeAll();

        this.getView().add(Ext.create('SimpleApp.view.main.ComboBoxRemoteTestView', {

        }));
    },
});
