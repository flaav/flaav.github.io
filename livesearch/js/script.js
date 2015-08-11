var expectSubscriberNames = function(expectedNames, key) {
  element.all(by.repeater(key + ' in subscribers').column(key + '.firstname' + '.lastname')).then(function(arr) {
    arr.forEach(function(wd, i) {
      expect(wd.getText()).toMatch(expectedNames[i]);
    });
  });
};

it('should search across all fields when filtering with a string', function() {
  var searchText = element(by.model('searchText'));
  searchText.clear();
  searchText.sendKeys('m');
  expectSubscriberNames(['Mary', 'Mike', 'Adam'], 'subscriber');

  searchText.clear();
  searchText.sendKeys('76');
  expectSubscriberNames(['John', 'Julie'], 'subscriber');
});
