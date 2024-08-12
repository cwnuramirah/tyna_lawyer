export const LAYOUT = [
	{ title: 'Content on Center', 
		value: 'T C'},
	{ title: 'Title with Content on Right', value: 'T C-T C'},
	{ title: 'Content with Image on Right', value: 'T I-C I'},
	{ title: 'Content with Image on Left', 	value: 'I T-I C'},
	{ title: 'Diagonal Right to Left', 		value: 'T X-X C'},
	{ title: 'Diagonal Right to Left with Image on center', value: 'T X-I I-X C'},
]

/*
	VALUE FORMAT:
		ALWAYS USE 2 COLUMN FORMAT, 
		WHITESPACE IS IMPORTANT
			X X

		FOR NEW ROW, ADD `-`
			X X-X X 	(2 ROW, 2X2 GRID)
			X X-X X-X X (3 ROW, 2X3 GRID)
 */

export function hideImageField(layout) {
	if(layout == undefined) {
		return true
	}

	// Test if there's an I (image) in layout
	const regex = /([I])/gm
	if(regex.test(layout)){
		return false
	} else {
		return true
	}
}