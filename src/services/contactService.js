const API_URL =
  "https://script.google.com/macros/s/AKfycbxhJjTUpTZz_pjeDon7S3hwfrKxzcUDF6AnrSa6DG2tDR-YZMY1LGIL8_cfXS--Xx9D/exec";

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
