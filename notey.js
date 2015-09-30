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
        var http = new XMLHttpRequest();
        var i=0;
        	var fd = new FormData();    
               var keyArray=Object.keys(data);
               while(typeof(keyArray[i])!="undefined")
                   {
                       fd.append(keyArray[i],data[i]);
                       i++;
                   }
                   
    },
            get:function(url)
    {
        var http = new XMLHttpRequest();
http.open("GET", url, true);
http.onreadystatechange = function() {
	if(http.readyState === 4 && http.status ===200) {
		return(http.responseText);
	}
        	if(http.readyState === 4 && http.status ===404) {
		alert('404');
	}
}
http.send(null);
    }
        };


        