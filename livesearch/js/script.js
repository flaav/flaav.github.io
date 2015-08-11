var expectSubscriberNames = function(expectedNames, key) {
  element.all(by.repeater(key + ' in subscribers').column(key + '.firstname' + '.lastname')).then(function(arr) {
    arr.forEach(function(wd, i) {
      expect(wd.getText()).toMatch(expectedNames[i]);
    });
  });
};
