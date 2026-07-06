const API_URL =
  "https://script.google.com/macros/s/AKfycbxUzsu53hmpNrV4M0pq7yb0urEYtB4bkJjnGBGLOGcQfKwnME4aCjU1fGQ6vhQuPwX7/exec";

export const sendContact = async (formData) => {
  const body = new FormData();

  Object.keys(formData).forEach((key) => {
    body.append(key, formData[key]);
  });

  const response = await fetch(API_URL, {
    method: "POST",
    body,
  });

  return response.json();
};
