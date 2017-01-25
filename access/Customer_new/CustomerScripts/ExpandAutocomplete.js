  
       ddsmoothmenu.init({
           mainmenuid: "smooth menu1",
           orientation: 'h',
           classname: 'ddsmoothmenu',
           contentsource: "markup"
       });


     


//------------------autocomplete---------------------

       $(document).ready(function () {
           
           $("input").keyup(function () {

               var bla = $('#txtsearch').val();
               $(".HeaderCSS").each(function () {
                   var htxt = $(this).text();
                   if (htxt.indexOf(bla) > -1) {
                       $(this).show();
                      
                           
                   } else {
                       $(this).hide();
                   }
               });

           });
       });  