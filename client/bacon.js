Template.discover.helpers({
  result: function() {
    var instance = Template.instance();
    return instance.imageResolverRequests.get();
  }
});

Template.discover.onCreated(function() {
  var instance = this;
  var url = this.data.url;
  instance.imageResolverRequests = new ReactiveVar('Waiting for bacon');
  HTTP.get(url, function(error, result) {
    if (error) {
      console.log("No bacon found");
    } else {
      instance.imageResolverRequests.set(result.data);
    }
  });
});
