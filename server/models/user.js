const mg = require('mongoose');

module.exports = () => {
	const user = mg.model('User',
		{ name: String }
	);
};
