import axios from "axios";

// Utility function to hit an endpoint with retries
export async function hitEndpointWithRetry<T>(endpoint: string): Promise<T> {
  let retries = 3;
  while (retries > 0) {
    try {
      // Hit the endpoint
      const response = await axios.get<T>(endpoint);

      // Return the response data if successful
      return response.data;
    } catch (error) {
      console.error(`Error hitting endpoint ${endpoint}: ${error}`);

      // Decrement retries
      retries--;

      // Retry after a delay (you can adjust the delay if needed)
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  // If all retries failed, throw an error or return a default value
  throw new Error(`Failed to hit endpoint ${endpoint} after 3 retries`);
}
