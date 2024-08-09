export const LAYOUT = [
	{ title: 'Content on Center', 
		value: 'TC'},
	{ title: 'Title with Content on Right', value: 'T-C'},
	{ title: 'Content with Image on Right', value: 'T I - C I'},
	{ title: 'Content with Image on Left', 	value: 'I T - I C'},
	{ title: 'Diagonal Right to Left', 		value: 'T X - X C'},
	{ title: 'Diagonal Right to Left with Image on center', value: 'T X - I I - X C'},
]

export function hideImageField(layout) {
	if(layout == undefined) {
		return true
	}

	const regex = /([I])/gm
	if(regex.test(layout)){
		return false
	} else {
		return true
	}
}