/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SimpleApp.Application',

    name: 'SimpleApp',

    requires: [
        'Corp.common.form.field.RequiredTextField',

        // This will automatically load all classes in the SimpleApp namespace
        // so that application classes do not need to require each other.
        'SimpleApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'SimpleApp.view.main.Main'
});
