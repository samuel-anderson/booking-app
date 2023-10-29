import { showDurationTotal, showStartTime } from "../../../../utils/cart";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { styles } from "../mobile-cart.component";

const MobilCartHeader = ({ durationTotal, startTime, onClick, isClosed }) => {
  return (
    <div className="order">
      <div className="order-text">
        Your order{" "}
        <span className="order-duration">
          {showDurationTotal(durationTotal)}
        </span>
        <span className="order-duration">{showStartTime(startTime)}</span>
      </div>

      <IconButton onClick={onClick}>
        {isClosed ? (
          <ExpandLessIcon style={styles.grayIcon} />
        ) : (
          <ExpandMoreIcon style={styles.grayIcon} />
        )}
      </IconButton>
    </div>
  );
};

export default MobilCartHeader;
