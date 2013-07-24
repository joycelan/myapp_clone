
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
})
