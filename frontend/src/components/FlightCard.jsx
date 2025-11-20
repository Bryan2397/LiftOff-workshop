import { useNavigate } from "react-router-dom";

const FlightCard = ({ f }) => {
  const navigate = useNavigate();
  console.log(f);

  function formatDuration(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  console.log(h, m);
  return `${h}h ${m}m`;
  }
  function timeToText(time){
    return new Date(time).toLocaleDateString("en-US",{
            
            hour: "numeric",
            minute: "2-digit",
            hour12: true
    });
  }
  
  return (
    <article style={styles.resultCard}>
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr auto", alignItems: "center", gap: 12 }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{f.airline} <span style={styles.badge}>{f.flightNo}</span></div>
                    <div style={{ fontSize: 12, color: "#666" }}>{f.fromCode} → {f.addressTo}</div>
                  </div>
                  <div>
                    <div style={styles.time}>{timeToText(f.departureTime)}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{f.from}</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 12, color: "#666" }}>{formatDuration(f.durationMin)}</div>
                    <div style={{ fontSize: 12 }}>{f.stops === 0 ? "Nonstop" : `${f.stops} stop`}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={styles.time}>{f.arrive}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{f.to}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={styles.price}>${f.price.toFixed(2)}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>★ {f.rating}</div>
                  </div>
                </div>

                <div style={{ marginTop: 8, display: "flex", gap: 12, alignItems: "center" }}>
                  {f.amenities.wifi && <span style={styles.amenity}>WiFi</span>}
                  {f.amenities.meals && <span style={styles.amenity}>Meals</span>}
                  {f.amenities.entertainment && <span style={styles.amenity}>Entertainment</span>}
                  <button 
                    style={styles.selectBtn}
                    onClick={() => navigate(`/flight/${f._id}`)}
                  >
                    Select Flight
                  </button>

                </div>
              </article>
  );
}
const styles = {
  page: { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", color: "#111" },
  container: { maxWidth: 1000, margin: "0 auto", padding: "0 18px" },
  header: {
  background: "#faf9f9ff",
  border: "1px solid #e9eef5",
  borderRadius: "20px",          // 💡 curves all corners (top + bottom)
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",  // adds soft depth
  margin: "12px auto",           // centers and adds breathing room
  width: "95%",                  // optional: gives space from window edges
  padding: "4px 0",              // keeps internal layout nice
  },    
  headerFlex: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 10px" },
  brand: { fontWeight: 800, fontSize: 28, padding: "16px 0" },
  nav: { display: "flex", gap: 18 },
  link: { textDecoration: "none", color: "#333", padding: "14px 0" },
  authButtons: { display: "flex", gap: "10px", alignItems: "center" },
  loginBtn: { border: "1px solid #2f6feb", color: "#2f6feb", background: "white", padding: "8px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: 600 },
  signupBtn: { border: "1px solid #2f6feb", background: "#2f6feb", color: "white", padding: "8px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: 600 },

  //color of background
  hero: {
  background: "#f6f7fbce",
  padding: "28px 0 40px",
  borderRadius: "20px",                     // 💡 curved edges all around
  width: "95%",                             // match header width
  margin: "20px auto",                      // center it with spacing
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" // subtle depth shadow
    },
  heroInner: { display: "grid", gap: 16 },
  title: { margin: 0, fontSize: 24 },

  //color of filtering section
  card: { background: "#ffffffff", border: "1px solid #e6e6e6", borderRadius: 12, padding: 16, display: "grid", gap: 12, boxShadow: "0 1px 2px rgba(0,0,0,.04)" },
  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  label: { display: "grid", gap: 6, fontSize: 12, color: "#444" },
  input: { height: 38, padding: "0 10px", borderRadius: 8, border: "1px solid #cfd7df", fontSize: 14, background: "#fff" },
  button: { height: 40, border: "1px solid #2f6feb", background: "#2f6feb", color: "white", borderRadius: 8, fontWeight: 600, cursor: "pointer" },

  //color of the flight data card
  resultCard: { background: "#ffffffff", border: "1px solid #e7ebf0", borderRadius: 12, padding: 16, boxShadow: "0 1px 2px rgba(0,0,0,.04)" },
  time: { fontSize: 16, fontWeight: 700 },
  price: { fontSize: 18, fontWeight: 800 },
  badge: { fontSize: 12, background: "#eef3ff", color: "#2f6feb", padding: "2px 6px", borderRadius: 6, marginLeft: 6 },
  amenity: { fontSize: 12, color: "#4b5563", background: "#f3f4f6", padding: "4px 8px", borderRadius: 6 },
  selectBtn: { marginLeft: "auto", border: "1px solid #2f6feb", background: "#2f6feb", color: "#fff", borderRadius: 8, height: 34, padding: "0 12px", cursor: "pointer" },
  footer: { borderTop: "1px solid #eee", padding: "16px 0", color: "#666", background: "#fff" },
};

export default FlightCard;


