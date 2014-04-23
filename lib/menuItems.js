"use strict";

module.exports = function(Plugin) {
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

	Plugin.addAdminNavigation = function(header, callback) {
		header.plugins.push({
			route: '/kitchen-sink',
			icon: 'fa-tint',
			name: 'Kitchen Sink'
		});

		callback(null, header);
	};
};