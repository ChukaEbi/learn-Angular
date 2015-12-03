githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;
  console.log(self.searchTerm);
  self.doSearch = function() {
    if(self.searchTerm){
    Search.query(self.searchTerm)
    .then(function(response) {
      console.log(response.data);
      self.searchResult = response.data;
    });
  }
  };
}]);
