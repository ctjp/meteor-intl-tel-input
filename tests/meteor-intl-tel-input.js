Tinytest.add('intl-tel-input - Defines', function (test) {
  // Function
  test.equal(typeof $.fn.intlTelInput, 'function');
  test.equal(typeof $.fn.intlTelInput.getCountryData, 'function');
  test.equal(typeof $.fn.intlTelInput.setCountryData, 'function');
});

Tinytest.add('intl-tel-input - Expects', function (test) {
  var countryData = $.fn.intlTelInput.getCountryData();
  test.equal(typeof countryData, 'object');
  test.equal(countryData.length > 0, true);

  $.fn.intlTelInput.setCountryData(countryData);
  test.equal(countryData, $.fn.intlTelInput.getCountryData());
});
