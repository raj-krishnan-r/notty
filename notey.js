var notey = {};
notey = 
        {
            init:function ()
    {
    },sel:function (sel)
    {
        if(sel.charAt(0)==="#")
            {
        return document.getElementById(sel.substring(1,sel.length));               
            }
    }
        };
         datap({apple:"Fruit",car:"vehicle"});
 function datap(ob)
 {
     console.log(Object.keys(ob));
 }

        