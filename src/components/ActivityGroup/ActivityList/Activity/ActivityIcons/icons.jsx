import {
  BsFillTelephoneInboundFill,
  BsFillTelephoneOutboundFill,
  BsTelephone,
  BsVoicemail,
  BsFillTelephoneXFill,
} from "react-icons/bs";
import styled from "styled-components";

const InboundMissed = styled(BsFillTelephoneXFill)`
  color: #ee481b;
`;

export const ICONS = {
  inbound: <BsFillTelephoneInboundFill />,
  outbound: <BsFillTelephoneOutboundFill />,
  voicemail: <BsVoicemail />,
  missed: <InboundMissed />,
  default: <BsTelephone />,
};
