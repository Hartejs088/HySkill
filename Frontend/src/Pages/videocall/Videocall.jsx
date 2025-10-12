import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const VideoCall = () => {
  const { roomID } = useParams();
  const meetingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const appID = 907292547; // Your ZegoCloud App ID
    const serverSecret = "aa42ca0663492560d85d1887100c5cbc"; // Your Server Secret

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "HySkill User"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: meetingRef.current,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `${window.location.origin}/video/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });

    return () => {
      zp.destroy();
    };
  }, [roomID]);

  const handleEndCall = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "120vh",
        paddingTop: "100px",
        position: "relative",
      }}
    >
      {/* Video container */}
      <div
        ref={meetingRef}
        style={{
          flex: 1,
          paddingTop: "0px",
          width: "100%",
          minHeight: "300px",
          background: "#9c9999ff",
        }}
      />

      {/* End Call button */}
      <button
        onClick={handleEndCall}
        style={{
          position: "absolute",
          top: "6%",
          right: "1%",
          padding: "0.4rem 0.6rem",
          backgroundColor: "#ff4b4b",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          zIndex: 1000,
          fontSize: "clamp(0.8rem, 1vw, 1rem)",
        }}
      >
        End Call
      </button>
    </div>
  );
};

export default VideoCall;
