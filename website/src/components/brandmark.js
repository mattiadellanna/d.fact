import Generator from "./generator";
import { ReactComponent as Logo } from "../assets/typo.svg";

export default function BrandMark({ size = 120, showLogo = true, logoPosition = "right", refresh=false}) {
  const padding = size * 0.1;
  const logoHeight = size - (padding * 4);
  const distance = logoHeight / 2;
  const isRight = logoPosition === "right";

  return (
    <div>
      <Generator size={ size } />
      {showLogo && ( <Logo style={{ height: logoHeight, width: "auto", fill: "#4b4b4b", verticalAlign: "middle", margin: distance, display: isRight ? "inline-block" : "block" }} /> )}
    </div>
  );
}
