export const apiURL = getAPIURL();

function getAPIURL() {
	if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
		return "http://localhost:5000/tentino-db-auth-storage/us-central1";
	} else {
		return "https://us-central1-tentino-db-auth-storage.cloudfunctions.net";
	}
}
