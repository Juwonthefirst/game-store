import { useState, useEffect } from "react";

export const useFetch = (url) => {
	const [response, setResponse] = useState({
		data: null,
		error: null,
		isLoading: true,
	});

	useEffect(async () => {
		let newResponse = { ...response };
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (response.status >= 400) newResponse.error = data;
			else newResponse.data = data;
		} catch (error) {
			newResponse.error = { error: error.message };
		} finally {
			newResponse.isLoading = false;
			setResponse(newResponse);
		}
	}, []);
	
	return response;
};
