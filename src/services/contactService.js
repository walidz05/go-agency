const API_URL =
  "https://script.google.com/macros/s/AKfycbzkgTjv8ehjiZd1HHbDIPOeQdgdPAsKY_qB8l9YJcK0B_VtSbQ5AkQQYi_si2f4Naq6/exec";

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
