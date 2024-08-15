
import { useEffect } from 'react'

function ChangeDocumentTitle(title) {

	useEffect(() => {
		if (!(title === undefined)) {
			document.title = title + ' | Taufiq Yong & Associates';
		}
	}, [title]);
}

export default ChangeDocumentTitle