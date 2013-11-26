'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var D2WebAppGenerator = module.exports = function D2WebAppGenerator( args, options, config ) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function() {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(D2WebAppGenerator, yeoman.generators.Base);

D2WebAppGenerator.prototype.askFor = function askFor() {
};

D2WebAppGenerator.prototype.app = function app() {
  this.mkdir('app');
};

D2WebAppGenerator.prototype.angularConfiguration = function angularConfiguration() {

};

D2WebAppGenerator.prototype.bootstrapConfiguration = function bootstrapConfiguration() {

};

D2WebAppGenerator.prototype.packageConfiguration = function packageConfiguration() {
  this.copy('_package.json', 'package.json');
  this.copy('Gruntfile.js', 'Gruntfile.js');

  this.copy('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');
};
