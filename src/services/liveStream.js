import AgoraRTC from "agora-rtc-sdk-ng";
import { BehaviorSubject } from "rxjs";
import {
  generateRandomChannelId,
  generateRandomUserId,
  generateTokenAndUid,
} from "./generateToken";

export let rtc = {
  client: null,
  localAudioTrack: null,
  localVideoTrack: null,
};
let options = {
  appId: "9055215653d147deb58cf6762469854e",
};
export let remoteUsers = [];
export let updateUserInfo = new BehaviorSubject();
export let liveUsersList = [];

export const createRTCClient = (type) => {
  if (type === "live") {
    rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
  } else {
    rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });
  }
};

// To join a call with tracks (video or audio)
export const localUser = async (token, uuid, type, channel) => {
  if (type === "live") {
    await rtc.client.setClientRole("audience");
  }
  await rtc.client.join(options.appId, channel, token, uuid);

  if (type !== "live") {
    rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack({
      encoderConfig: "120p",
    });
    rtc.localVideoTrack.play("local-player");
    await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
  }
};

export const agoraServerEvents = (rtc) => {
  rtc.client.on("user-published", async (user, mediaType) => {
    console.log(user, mediaType, "user-published");
    await rtc.client.subscribe(user, mediaType);
    if (mediaType === "video") {
      const remoteVideoTrack = user.videoTrack;

      setTimeout(() => {
        remoteVideoTrack.play("remote-playerlist"); //+ user.uid);
      }, 100);
    }
    if (mediaType === "audio") {
      const remoteAudioTrack = user.audioTrack;
      remoteAudioTrack.play();
    }
  });
  rtc.client.on("user-unpublished", (user) => {
    console.log(user, "user-unpublished");
  });

  rtc.client.on("user-joined", (user) => {
    const id = user.uid;
    remoteUsers.push({ uid: +id });
    liveUsersList.push({ uid: +id });
    updateUserInfo.next(id);
    console.log("user-joined", user, remoteUsers, "event1");
  });
};

export const leaveCall = async () => {
  rtc.localAudioTrack.close();
  rtc.localVideoTrack.close();
  document.getElementById("linkId").innerHTML = ``;
  await rtc.client.leave();
  localStorage.clear();
};

export const joinLiveCall = async (channelId) => {
  try {
    const randomUserId = await generateRandomUserId();
    const rtcDetails = await generateTokenAndUid(
      randomUserId,
      channelId,
      "audience"
    );
    createRTCClient("live");
    agoraServerEvents(rtc);
    await localUser(rtcDetails.token, randomUserId, "live", channelId);
  } catch (error) {
    console.log(error, "error");
  }
};

export const startCall = async () => {
  const randomChannelId = await generateRandomChannelId();
  const randomUserId = await generateRandomUserId();
  const rtcDetails = await generateTokenAndUid(
    randomUserId,
    randomChannelId,
    "publisher"
  );
  localStorage.setItem("channelId", randomChannelId);
  createRTCClient("");
  agoraServerEvents(rtc);
  await localUser(rtcDetails.token, randomUserId, "", randomChannelId);
  document.getElementById("linkId").innerHTML = `<h4> ${
    process.env.REACT_APP_REACT_URL
  }/audience/${localStorage.getItem("channelId")}</a></h4>`;
};
