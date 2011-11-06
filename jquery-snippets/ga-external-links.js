$( "a[class~='external']" ).bind( "click", function() {
	var url = '/outgoing/'+ $( this ).attr( "href" );
	_gaq.push( [ "_trackPageview", url ] );
});

// jQuery 1.7 `on` instead of `bind`
$( "a[class~='external']" ).on( "click", function() {
	var url = '/outgoing/'+ $( this ).attr( "href" );
	_gaq.push( [ "_trackPageview", url ] );
});