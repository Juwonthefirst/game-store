import { ImageResponse } from "next/og";

const Favicon = () => {
  return new ImageResponse(
    <img src="http://localhost:3000/vite.svg" alt="logo" />,
    {
      width: 14,
      height: 14,
    }
  );
};

export default Favicon;
