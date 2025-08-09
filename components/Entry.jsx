export default function Entry(props) {
  const BASE_PATH = import.meta.env.BASE_URL || "/JualRumahTanahRuko/";
  const updatedDate = props.updatedAt ? new Date(props.updatedAt) : new Date();
  const formattedDate = updatedDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="journal-entry">
      <div className="info-container">
        <div className="location-header">
          <img
            className="marker"
            src={`${BASE_PATH}images/marker.png`}
            alt="map marker icon"
          />
          <span className="city">{props.city}</span>
          <span className="separator">|</span>
          <a
            href={props.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <h2 className="entry-title">{props.title}</h2>

        <p style={{ fontSize: "0.8rem", color: "#555" }}>
          Diperbarui: {formattedDate}
        </p>

        {/* Scrollable Deskripsi */}
        <div className="entry-text-scrollable">
          {Array.isArray(props.text) ? (
            <ul>
              {props.text.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{props.text}</p>
          )}
        </div>
      </div>

      {/* Gambar */}
      {props.images && props.images.length > 0 && (
        <div className="carousel-container">
          <div
            className={`carousel-scroll ${
              props.images.length <= 1 ? "no-scroll" : ""
            }`}
          >
            {props.images
              .filter((img) => img && img.src)
              .map((img) => (
                <img
                  key={img.src}
                  className="carousel-image"
                  src={img.src}
                  alt={img.alt || "image"}
                />
              ))}
          </div>
        </div>
      )}

      {/* Video */}
      {props.videos && props.videos.length > 0 && (
        <div className="video-container">
          {props.videos.map((vid) => (
            <video
              key={vid.src}
              className="entry-video"
              controls
              preload="metadata"
              src={vid.src} // fallback src langsung di video tag
            >
              <source src={vid.src} type={vid.type} />
              Browser Anda tidak mendukung video tag.
            </video>
          ))}
        </div>
      )}
    </article>
  );
}
