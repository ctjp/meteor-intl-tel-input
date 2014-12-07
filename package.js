Package.describe({
  name: 'ctjp:meteor-intl-tel-input',
  summary: 'Meteor package for https://github.com/Bluefieldscom/intl-tel-input',
  version: '3.7.1_2',
  git: 'https://github.com/ctjp/meteor-intl-tel-input.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  //== Use
  // Client only
  api.use('jquery', 'client');

  //== Add files
  // Client only
  api.addFiles([
    'lib/intl-tel-input/build/js/intlTelInput.js',
    'lib/intl-tel-input/build/css/intlTelInput.css',
    'lib/intl-tel-input/build/img/flags.png'
  ], 'client');
});

Package.onTest(function(api) {
  //== Use
  // Client only
  api.use([
    'tinytest',
    'ctjp:meteor-intl-tel-input'
  ], 'client');

  //== Add files
  // Client only
  api.addFiles('tests/meteor-intl-tel-input.js', 'client');
});
