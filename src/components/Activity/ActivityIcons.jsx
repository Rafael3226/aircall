import React from "react";

import {
  BsTelephoneInboundFill,
  BsTelephoneOutboundFill,
  BsTelephone,
  BsVoicemail,
} from "react-icons/bs";

const icons = {
  inbound: <BsTelephoneInboundFill />,
  outbound: <BsTelephoneOutboundFill />,
  voicemail: <BsVoicemail />,
  default: <BsTelephone />,
};

const ActivityIcons = ({ tag }) => {
  if (Object.keys(icons).includes(tag)) return icons[tag];
  return icons["default"];
};

export default ActivityIcons;
