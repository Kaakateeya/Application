app.directive('partnerDirective',function(){
return {
    restrict:'EA',
    scope:{
        array:'='
    },
    templateUrl:'app/Templates/partnerdirectiveTemplate.html',
    link:function(element,$scope){
        
    }
}
});