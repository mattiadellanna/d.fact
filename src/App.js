import Generator from "./components/generator";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gap: "24px",
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      <Generator size={40} />
      <span className="logo">D.Fact</span>
      
    </div>
  );
}


export default App;
