app.factory('patientDashboardServices',['$http',function(http){
return{
  getPatientcounts:function(custid){
   http.get(app.apipath+'patientcount',function(){
        return response;
   });
  }
}
}]);