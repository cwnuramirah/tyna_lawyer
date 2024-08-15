import { useEffect, useState } from 'react'
import client from '../client';

const useData = (query, initValue) => {
	const [data, setData] = useState(initValue)

	useEffect(() => {
		const getData = async () => {
			try {
			  const res = await client.fetch(query);
			  setData(res);
			} catch (err) {
			  console.log(err);
			}
		  };
		
		getData()

	}, [query])

	return data
}

export default useData