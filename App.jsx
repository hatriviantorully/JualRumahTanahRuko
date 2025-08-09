import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  // Menyusun semua entri berdasarkan data yang ada
  const entryElements = data.map((entry) => (
    <Entry key={entry.id} {...entry} />
  ));

  // Tanggal update terakhir (misalnya, sekarang)
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <main className="container">
        <div className="update-info">
          <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>
            Last updated: {lastUpdated}
          </p>
        </div>
        {entryElements}
      </main>
    </>
  );
}
