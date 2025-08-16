import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [response, setResponse] = useState({
		data: null,
		error: null,
		isLoading: true,
	});

	useEffect(() => {
		let newResponse = { ...response };
		const controller = new AbortController();
		const signal = controller.signal;
		(async () => {
			try {
				const response = await fetch(url, { signal });
				const data = await response.json();
				if (response.status >= 400) newResponse.error = data;
				else newResponse.data = data;
			} catch (error) {
				newResponse.error = { error: error.message };
			} finally {
				newResponse.isLoading = false;
				setResponse(newResponse);
			}
		})();

		return () => {
			controller.abort();
		};
	}, [url]);

	return response;
};

export { useFetch };
