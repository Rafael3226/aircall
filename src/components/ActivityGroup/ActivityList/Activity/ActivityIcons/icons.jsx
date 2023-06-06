import {
  BsFillTelephoneInboundFill,
  BsFillTelephoneOutboundFill,
  BsFillTelephoneFill,
  BsVoicemail,
  BsFillTelephoneXFill,
} from "react-icons/bs";
import styled from "styled-components";

const Missed = styled(BsFillTelephoneXFill)`
  color: red;
`;

export const ICONS = {
  inbound: <BsFillTelephoneInboundFill />,
  outbound: <BsFillTelephoneOutboundFill />,
  voicemail: <BsVoicemail />,
  missed: <Missed />,
  default: <BsFillTelephoneFill />,
};
