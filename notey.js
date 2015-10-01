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
            /*
             *Notes get method returns https response object recieved for the URL para
             -meter pased, to the callback function defined
             *in the function call like notey.get('url.html',function(data){alert(data)}); 
             */
            post:function(url,data,callback)
    {
        var http = new XMLHttpRequest();
        var i=0;
        	var fd = new FormData();    
               var keyArray=Object.keys(data);
               while(typeof(keyArray[i])!=='undefined')
                   {
                       fd.append(keyArray[i],data[keyArray[i]]);
                       i++;
                   }
                   http.open("post",url,true);
                    http.send(fd);
                    http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState === 4) {callback(http);}
}
    },
            get:function(url,callback)
    {
        var http = new XMLHttpRequest();
http.open("GET", url, true);
http.onreadystatechange = function() {
if(http.readyState === 4) {callback(http);}}
http.send(null);
    }
        };



        