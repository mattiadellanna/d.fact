import Generator from "./generator";
import { ReactComponent as Logo } from "../assets/typo.svg";

export default function BrandMark({ size = 120, showLogo = true, logoPosition = "right" }) {
  const padding = size * 0.1;
  const logoHeight = size - (padding * 4);
  const distance = logoHeight / 2;
  const isRight = logoPosition === "right";

  return (
    <div style={{ height: size, display: "flex", flexDirection: isRight ? "row" : "column", alignItems: "center", gap: distance }} >
      <Generator size={ size } />
      {showLogo && ( <Logo style={{ height: logoHeight, width: "auto", fill: "#4b4b4b", display: "block" }} /> )}
    </div>
  );
}
