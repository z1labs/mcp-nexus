import dateFormat from "dateformat";
import helpers from "@/lib/helpers";

import styles from "@/components/pages/dashboard/widgets/trackers/style.module.scss";

export default function CustomTooltip({
  active,
  payload,
  isWithoutFormatNumberPopupValue = false,
  popupValueSymbol = "",
}) {
  if (active && payload && payload.length) {
    const { date, value } = payload[0].payload;
    return date && value ? (
      <div className={styles.tooltip}>
        <ul>
          <li>
            <span>Date</span>
            {dateFormat(date, "d mmm yyyy", true)}
          </li>
          <li>
            <span>Value</span>
            {isWithoutFormatNumberPopupValue
              ? value
              : helpers.formatNumber(value, 2)}{" "}
            {popupValueSymbol}
          </li>
        </ul>
      </div>
    ) : null;
  }

  return null;
}
