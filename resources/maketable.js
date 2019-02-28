S(document).ready(function(){
	S().ajax('data/list.json',{
		'dataType':'json',
		'success':function(d,a){
			for(la in d){
				console.log(la);
			}
		},
		'error':function(d,attr){
			console.log("Can't load "+attr.url);
		}
	});
});