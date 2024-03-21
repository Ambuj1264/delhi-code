export const setCookie = (
  name: string,
  value: string | boolean,
  days: number,
) => {
  const SECONDS_IN_DAY = 24 * 60 * 60;
  const MILLISECONDS_IN_SECOND = 1000;
  const TOTAL_TIME = days * SECONDS_IN_DAY * MILLISECONDS_IN_SECOND;
  const expires = new Date(Date.now() + TOTAL_TIME).toUTCString();

  // Store the cookie in localStorage
  localStorage.setItem(name, JSON.stringify({ value, expires }));
};

export const getCookie = (name: string): string | null => {
  // Retrieve the cookie from localStorage
  const cookie = localStorage.getItem(name);
  if (cookie) {
    const { value, expires } = JSON.parse(cookie);
    // Check if the cookie has expired
    if (new Date(expires) > new Date()) {
      return value;
    } else {
      // Remove the expired cookie
      clearCookie(name);
    }
  }
  return null; // Return null if cookie not found or expired
};

export const clearCookie = (name: string) => {
  // Remove the cookie from localStorage
  localStorage.removeItem(name);
};
