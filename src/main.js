import data from './data'
import resultItem from './item'

window.addEventListener( 'DOMContentLoaded', () => {
	const tick      = 2000
	const input     = document.querySelector( '#search-form input' )
	const select    = document.querySelector( '#search-form select' )
	const resultDiv = document.querySelector( '.result' )

	let searchType = 'content'
	select.addEventListener( 'change', function( e ) {
		searchType = e.target.value
	} )

	const getData = () => {
		let html = ''
		data.map( d => {
			const feature = Object.values( d.feature )
			const content = [d.title, d.excerpt, ...feature].join( ',' ).toLowerCase()
			
			const price = parseInt( d.price.replace( /\./g, '' ) )

			if ( 'content' === searchType && content.match( input.value ) ) {
				html += resultItem( d )
			}

			if ( 'price' === searchType && price <= parseInt( input.value ) ) {
				html += resultItem( d )
			}
		} )
		
		resultDiv.innerHTML = html
	}

	let timer = null
	input.addEventListener( 'keydown', function() {
		if ( input.value.length === 0 || input.value.match( /\s+/ ) ) {
			resultDiv.innerHTML = ''
			return
		}

		clearTimeout( timer )
		timer = setTimeout( getData, tick )
	} )

	document.addEventListener( 'click', function( e ) {
		if ( ! [ select, input, resultDiv ].includes( e.target ) ) {
			resultDiv.innerHTML = ''
		}
	} )

	// <script type="text/javascript" async src="https://play.vidyard.com/embed/v4.js"></script>
	const videoScript = document.querySelector( 'script#vidyard' )
	
	setTimeout(() => {
		videoScript.setAttribute( 'src', videoScript.dataset.src )
	}, 1000);
} )