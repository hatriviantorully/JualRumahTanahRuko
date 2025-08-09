export default function Header() {
  const BASE_PATH = import.meta.env.BASE_URL || "/JualRumahTanahRuko/";
  return (
    <header className="app-header">
      <img
        src={`${BASE_PATH}images/globe.png`}
        alt="globe icon"
        className="globe-icon"
      />
      <h1>Abu Abdillah Rully Hatrivianto</h1>
      <h2>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#25D366"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.903 11.903 0 0 0 3.48 20.52L2 22l1.48-1.48A11.903 11.903 0 0 0 20.52 3.48zM12 19a7 7 0 0 1-3.58-1L6 18l.93-2.42A7 7 0 1 1 12 19zm-1.6-4.6l1.7 1.7a.5.5 0 0 0 .7 0l2-2a.5.5 0 0 0 0-.7l-1.7-1.7a.5.5 0 0 0-.7 0l-2 2a.5.5 0 0 0 0 .7z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#007AFF"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.48 2.53.74 3.87.74a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1c-9.39 0-17-7.61-17-17a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.34.26 2.66.74 3.87a1 1 0 0 1-.21 1.11l-2.2 2.2z" />
        </svg>
        https://wa.me/6282283515398
      </h2>
    </header>
  );
}
