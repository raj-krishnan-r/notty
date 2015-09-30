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
    },
            post:function(data)
    {
               console.log(Object.keys(data));
    }
        };


        