/*
 *  - - - - - - - - - - - - - - - - - - - - 
 *	Creator: Tony CHU
 *	Library Name: JadeI (ji)
 *	Vesion: 1.0
 *	- - - - - - - - - - - - - - - - - - - - 
 *	Modify History:
 * 	2017-09-05     First Drift
 *
 */
var ji = {
	    
    helloWorld: function(){
        console.log('Hello World from JadeI');
    },
			
	replaceEmptyNullString: function(str){
		if(str == null || $.trim(str) == ''){
			return "N/A";
		}
		else{
			return str;
		}
	},
	
	replaceEmptyNullNumber: function(num){
		if(num == null || $.trim(num)== ''){
			return 0;
		}
		else{
			return num;
		}
	},
	
	// Suitble for element is position fixed and maintain position while window.resize.
	resizeAndCenterOnceTime: function(ele){
		ele.style.position = 'fixed';		
		var windowWidth = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

		var windowHeight = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

		var eleWidth = ele.offsetWidth;
		var customCenterPaddingWidth = (windowWidth - eleWidth) / 2;
		ele.style.left = customCenterPaddingWidth+"px";

		var eleHeight = ele.offsetHeight;
		var customCenterPaddingTop = (windowHeight - eleHeight) / 2;
		ele.style.top = customCenterPaddingTop+"px";	
	},
	
	resizeAndCenterMultiTime: function(ele){		
		ele.style.position = 'fixed';
		window.addEventListener("resize", function(){		
			var windowWidth = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
			
			var windowHeight = window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;

			var eleWidth = ele.offsetWidth;
			var customCenterPaddingWidth = (windowWidth - eleWidth) / 2;
			ele.style.left = customCenterPaddingWidth+"px";

			var eleHeight = ele.offsetHeight;
			var customCenterPaddingTop = (windowHeight - eleHeight) / 2;
			ele.style.top = customCenterPaddingTop+"px"; 
		});		
	},
	
	quickFullScreenLoadingBlocker: function(img){
		var randomID = this.randomComplexStringMaker();
		$("body").append("<div class='ji-fullScreenBlocker' id='ji-fullScreenBlocker-"+randomID+"'><img id='ji-fullScreenBlocker-img-"+randomID+"' src='"+img+"'/></div>");		
		return $('#ji-fullScreenBlocker-'+randomID).get(0);
	},
	

	randomStringMaker: function(str_length){
		if(str_length==null || str_length < 10){ var str_length = 10; }
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < str_length; i++){
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;		
	},

	randomComplexStringMaker: function(str_length){
		var d = new Date();
		var n = d.getTime()+"";
		if(str_length==null){ var str_length = 20; }
		var text = "";		
		str_length = str_length - n.length;
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < str_length; i++){
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return n+text;		
	},

	imageValidation: function(path){
		var task = {
			result: ''
		};	
		$("body").append("<img id='ji-imgValidation' style='display:none;'/>");
		var img = new Image();
		img.onload = function() {
			var tmpImg = {
			    src:  img.src,
			    width: img.width,
			    height: img.height
			};
			$('#ji-imgValidation').remove();
			task.result = tmpImg;			 		    
		}
		img.onerror = img.onabort = function() {
			$('#ji-imgValidation').remove();
			task.result = false;
		}		
		img.src = path;
		document.getElementById("ji-imgValidation").src= img.src;
		return task;
	},

}