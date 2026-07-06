const API_URL =
  "https://script.google.com/macros/s/AKfycbza2PkTuGuaaDuDEXG8qNh-yZVs6fcxpTP8mRSY8yvYDOOKRhnLlfLOBLaCMwb0W25O/exec";

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
