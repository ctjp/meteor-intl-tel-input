Package.describe({
  name: 'ctjp:meteor-intl-tel-input',
  summary: 'Meteor package for https://github.com/Bluefieldscom/intl-tel-input',
  version: '3.7.1_1',
  git: 'https://github.com/ctjp/meteor-intl-tel-input.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use('jquery', 'client');
  
  api.addFiles([
    'lib/intl-tel-input/build/js/intlTelInput.js',
    'lib/intl-tel-input/build/css/intlTelInput.css',
    'lib/intl-tel-input/build/img/flags.png'
  ], 'client');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'ctjp:meteor-intl-tel-input'
  ], 'client');

  api.addFiles('tests/meteor-intl-tel-input.js', 'client');
});
