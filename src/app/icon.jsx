import { ImageResponse } from "next/og";

const Favicon = () => {
  return new ImageResponse(
    (
      <img
        src="http://localhost:3000/vite.svg"
        alt="logo"
        width={24}
        height={24}
      />
    ),
    {
      width: 24,
      height: 24,
    }
  );
};

export default Favicon;
