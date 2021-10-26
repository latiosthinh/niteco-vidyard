const resultItem = ( obj ) => {
	let feature = ''
	Object.values( obj.feature ).map( f => feature += `<li>${f}</li>` )

	return `<a href=${obj.url} class="result-item">
				<div class="entry-thumbnail">
					<img src="${obj.img}" alt="${obj.title}">
				</div>

				<div class="entry-content">
					<h2 class="ttu">${obj.title}</h2>
					<p>${obj.excerpt}</p>
					<ul>
						${feature}
					</ul>
					<p class="price">Price: ${obj.price} VND</p>
				</div>
			</a>`
}

export default resultItem