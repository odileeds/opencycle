S(document).ready(function(){
	S().ajax('data/list.json',{
		'dataType':'json',
		'success':function(d,a){
			var la,rows,f,ft,filetypes,table,t,typ;
			rows = '';
			types = ['routes','infrastructure'];
			filetypes = ['shapefile','geojson','kml'];
			for(la in d){
				if(d[la]){
					rows += '<tr><td>'+la+'</td>';
					for(t = 0; t < types.length; t++){
						typ = d[la][types[t]];
						rows += '<td class="'+types[t]+'">'+(typ && typ.about ? '[<a href="'+typ.about+'">link</a>]':'')+'</td>';
						for(f = 0; f < filetypes.length; f++){
							ft = filetypes[f];
								console.log(ft,typ)
							if(typ && typ.files && typ.files[ft]){
								rows += '<td class="'+types[t]+' file tick">'+(typ.files[ft].url ? '<a href="'+typ.files[ft].url+'">&#9989;</a>':'&times;')+'</td>';
							}else rows += '<td class="'+types[t]+' file">&#10006;</td>';
						}
					}
					rows += '</tr>';
				}
			}
			table = '<table class="opencycle"><tr><th>Local authority</th>';
			for(t = 0; t < types.length; t++){
				table += '<th class="'+types[t]+'">'+types[t]+'</th>';
				for(f = 0; f < filetypes.length; f++) table += '<th class="'+types[t]+' file">'+filetypes[f]+'</th>';
			}
			table += '</tr>'+rows+'</table>';
			S('#table').html(table);
		},
		'error':function(d,attr){
			console.log("Can't load "+attr.url);
		}
	});
});