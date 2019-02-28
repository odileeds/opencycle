S(document).ready(function(){
	S().ajax('data/list.json',{
		'dataType':'json',
		'success':function(d,a){
			var la,rows,f,ft,filetypes,table;
			rows = '';
			filetypes = ['shapefile','geojson'];
			for(la in d){
				if(d[la]){
					rows += '<tr><td>'+la+'</td><td class="routes">'+(d[la].routes.about ? '[<a href="'+d[la].routes.about+'">link</a>]':'')+'</td>';
					if(d[la].routes){
						for(f = 0; f < filetypes; f++){
							ft = filetypes[f];
							if(!d[la].routes[ft]){
								rows += '<td>&times;</td>';
							}else{
								rows += '<td>'+(d[la].routes[ft].url ? '['+d[la].routes[ft].url+']':'&times;')+'</td>';
							}
						}
					}
					rows += '</tr>';
					console.log(la);
				}
			}
			table = '<table class="odi"><tr><th>Local authority</th><th class="routes">Routes</th>';
			for(f = 0; f < filetypes; f++){
				table += '<th>'+filetypes[f]+'</th>';
			}
			table += '</tr>'+rows+'</table>';
			S('#table').html(table);
		},
		'error':function(d,attr){
			console.log("Can't load "+attr.url);
		}
	});
});