var routesFiles = [
    require('./main'),
    require('./example')
];

module.exports.create = function(bot) {
    routesFiles.forEach(routeFile => routeFile.create(bot));
}