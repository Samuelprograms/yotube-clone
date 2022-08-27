export const setCookie = (name, value, days) => {
	const expiresDate = new Date();
	expiresDate.setTime(expiresDate.getTime() + days * 24 * 60 * 60 * 1000);
	const expiresAt = "expires=" + expiresDate.toUTCString();
	document.cookie = name + "=" + value.toString() + ";" + expiresAt + ";path=/";
};
export const getCookie = (cookieName) => {
	const name = cookieName + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return false;
};
