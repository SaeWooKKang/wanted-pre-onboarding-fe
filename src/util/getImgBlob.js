export const getImgBlob = async (url) => {
  let res;
  const response = await fetch(url);
  const imageBlob = await response.blob();
  const reader = new FileReader();

  reader.readAsDataURL(imageBlob);
  reader.onloadend = () => {
    const base64data = reader.result;
    res = base64data;
  };
  return res;
};
