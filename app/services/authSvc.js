app.factory('authSvc', ['$scope', function(){
	return {
		getLoginCustid:function(){
			return  getLogindata();
		}
		var getLogindata=function(){
			return  returnobject ={
				loginCustId:localStorage.getItem('cust_id'),
				loginName:localStorage.getItem('cust_name')
			};
		};
	};
	
}]);