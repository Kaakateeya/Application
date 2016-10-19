app.factory('authSvc', ['$scope', function(){
	return {
		getLoginCustid:function(){
			return  getLogindata();
		}
		function getLogindata(){
			return var returnobject ={
				loginCustId:localStorage.getItem('cust_id'),
				loginName:localStorage.getItem('cust_name')
			}
		}
	}
}])