import Youtube from "react-youtube";

export default function Video({ src, width, height }) {
  const opts = {
    height: height,
    width: width,
  };

  return (
    <div className="bg-primary rounded-sm">
      <div className="mt-4">
        <Youtube videoId={src} opts={opts} />
      </div>
    </div>
  );
}
