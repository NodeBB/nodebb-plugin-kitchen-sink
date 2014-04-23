"use strict";

module.exports = function(Plugin) {
	// filter:header.build
	Plugin.addNavigation = function(header, callback) {
		header.navigation = header.navigation.concat(
			[
				{
					route: '/demo',
					class: '',
					text: "Kitchen Sink"
				}
			]
		);

		callback(null, header);
	};

	// filter:admin.header.build
	Plugin.addAdminNavigation = function(header, callback) {
		header.plugins.push({
			route: '/kitchen-sink',
			icon: 'fa-tint',
			name: 'Kitchen Sink'
		});

		callback(null, header);
	};
};