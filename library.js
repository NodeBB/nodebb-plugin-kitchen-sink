(function(module) {
	"use strict";

	var Plugin = {};
	

	/* TODO

	filter:uploadImage
	filter:uploadImage
	filter:widgets.getAreas
	filter:widgets.getWidgets
	filter:search.query
	action:email.send
	filter:post.parse
	filter:messaging.parse
	filter:scripts.get
	filter:sounds.get
	action:plugin.deactivate
	action:plugin.activate
	filter:post.save
	filter:post.get
	action:post.save
	filter:post.getPosts
	filter:posts.custom_profile_info
	filter:post.get
	filter:post.getFields
	action:post.setField
	action:topic.edit
	action:post.edit
	filter:post.save
	action:post.delete
	action:post.restore
	filter:uploadFile
	filter:register.check
	filter:auth.init
	action:config.set
	filter:post.parse
	filter:composer.help
	filter:topic.thread_tools
	action:topic.save
	filter:user.create
	action:user.create
	action:post.delete
	action:topic.delete
	filter:widget.render
	filter:widgets.getAreas
	*/

	// action:app.load
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
