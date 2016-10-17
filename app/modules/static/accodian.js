 app.controller("AccordionDemoCtrl", ['$scope', function (scope) {
 scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1",
      open: false
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2",
      open: false
    }
  ];
  
 scope.addNew = function() {
   scope.groups.push({
      title: "New One Created",
      content: "Dynamically added new one",
      open: false
    });
  }
  
}]);