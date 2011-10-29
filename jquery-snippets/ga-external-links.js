$( "a[class~='external']" ).bind( "click", function() {
	var url = '/outgoing/'+ $( this ).attr( "href" );
	_gaq.push( [ "_trackPageview", url ] );
});