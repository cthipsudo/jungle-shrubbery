import config from "../config";

const grabFFXIVChar = () => {
  return fetch(
    `${config.API_ENDPOINT}character/${config.CHAR_ID}?private_key=${config.TOKEN_KEY}`,
    { mode: "cors" }
  ).then((res) =>
    !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  );
};

const grabCharTitle = (id) => {
  return fetch(
    `${config.API_ENDPOINT}Title?private_key=${config.TOKEN_KEY}&ids=${id}`,
    { mode: "cors" }
  ).then((res) =>
    !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  );
};

const grabCharJobIcon = (id) => {
  return fetch(
    `${config.API_ENDPOINT}ClassJob?private_key=${config.TOKEN_KEY}&ids=${id}`,
    { mode: "cors" }
  ).then((res) =>
    !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  );
};

const initChar = () => {
  let outData = {};
  const rawData = grabFFXIVChar();
  rawData.then((data) => {
    //const titleData = grabCharTitle(data.Character.Title);
    outData = data;
  });
  return outData;
};

export default {
  grabFFXIVChar,
  grabCharTitle,
  grabCharJobIcon,
};
