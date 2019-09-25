chrome.app.runtime.onLaunched.addListener(function() {
 var options = {
   'id': 'Guacamole',
   'state': 'maximized',
   'minWidth': 1364,
   'minHeight': 688,
   
 };
 chrome.app.window.create('application.html', (options));
});