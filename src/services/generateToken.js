import axios from "axios";

export const generateTokenAndUid = async (uid, channel, type) => {
  let url = `${process.env.REACT_APP_AGORA_BACKEND}/rtc/${channel}/${type}/uid/${uid}`;
  const data = await axios.get(url);
  return { uid: uid, token: data.data.rtcToken };
};
export const generateRandomChannelId = async () => {
  const random = (Math.random() + 1).toString(36).substring(7);
  return random;
};
export const generateRandomUserId = async () => {
  const random = Math.floor(Math.random() * 100000 + 1);
  return random;
};
