'use strict'

angular.module('blogList').
  component('blogList', {
    //template: "<div class='' > {{ title }} <button ng-click='someClickTest()'>Click Me!</button></div>",
    templateUrl: '../../templates/blog-list.html',
    controller: function($scope) {
      var blogItems = [
        {title: "Some Title", id: 1, description: "This is a book"},
        {title: "Title", id: 2, description: "Is a book"},
        {title: "Some", id: 3, description: "A book"},
        {title: "You know", id: 4, description: "Book"}
      ];

      $scope.items = blogItems;
      console.log('hello');
      $scope.title = 'Hi there';
      $scope.clicks = 0;
      $scope.someClickTest = function() {
        console.log('clicked');
        $scope.clicks += 1;
        $scope.title = `Clicked ${$scope.clicks} time${$scope.clicks == 1 ? '' : 's'}.`;
      }
    }
  });
