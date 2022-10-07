/**
 * Proxy function to the fetch API.
 * This function was made to abstract away fetch from the codebase.
 * If another service was to be used in the future instead like Axios,
 * only the request() function alone would need to be updated.
 * @param {string} URL - API endpoint
 *
 * @returns {Promise} Promise Object
 */
async function request(URL) {
  const response = await fetch(URL);
  return response.json();
}

export default request;
