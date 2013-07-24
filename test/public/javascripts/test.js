
$(document).ready(function(){
	$("#test").click(function() {
		alert("YES!!");
		console.log('eeeee');
	});

//	$('#back').ckick(function(){
	
	
//	});

	$("#sendcgi").click(function() {
		return $.ajax({ 
			url: "test.cgi",
			dataType: 'text',
			data: 'ans1=123&ans2=456', //from click event
			success: function(data, textStatus, xhr) {
				console.log(data);
				$('div#content').text(data+'---> status: '+xhr.status);
			},
			complete: function(xhr, textStatus) {
				console.log(xhr.status);
			}
		});
	})
	$('form#honpac input#honpac').click(function(){
		var arr =[];
		arr['title']=$('input#title').val();
		arr['email']=$('input#email').val();
		arr['name']=$('input#name').val();
		arr['data']=$('input#data').val();
		post(arr);
	});
	function post(arr){
		console.log(arr);
		/* $.fixture("/cgi-bin/admin/honpac.cgi", function(originalSettings, settings, headers){
		 *             console.log('sssss',originalSettings)
		 *                         return  [200, "success",originalSettings.data, {} ]
		 *                                 });*/
		return $.ajax({ 
			type:'POST',
			url: '/cgi-bin/admin/honpac.cgi',
			data: $("form#honpac").serialize(),
			success: function(data, textStatus, xhr) {
				$('div#honpac div#message').text(data+'---> status: '+xhr.status);
			},
			complete: function(xhr, textStatus) {
				console.log(xhr.status);
			}
		});
	} //end honpac
})
