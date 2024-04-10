export default function YoutubeEmbed({ videoId }) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        // "https://www.youtube.com/embed/IEeOtVJZiLE"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
