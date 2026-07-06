const API_URL =
  "https://script.google.com/macros/s/AKfycbxfyi994TJkvZiexU6rzv66ge_17P-gmIAtTJ9sB7gwOAZ7IIKTrPtNCLHAXW76p0Y/exec";

export const sendContact = async (formData) => {
  const body = new FormData();

  Object.entries(formData).forEach(([key, value]) => {
    body.append(key, value);
  });

  const response = await fetch(API_URL, {
    method: "POST",
    body,
    redirect: "follow",
  });

  const text = await response.text();

  console.log(text);

  return text;
};
