(function(module) {
	"use strict";

	var Plugin = {};
	

	Plugin.init = function(app, middleware, controllers) {
		require('./lib/customRoutes')(app, middleware, controllers);
		require('./lib/adminPage')(app, middleware, controllers);
	};


	require('./lib/nodebb');
	require('./lib/userSettings')(Plugin);
	require('./lib/menuItems')(Plugin);
	require('./lib/clientScripts')(Plugin);
	module.exports = Plugin;
}(module));
