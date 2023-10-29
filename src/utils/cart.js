export const showOrderTotal = (total) => {
  return total !== 0 ? `$${total}` : "";
};

export const showDurationTotal = (total) => {
  if (total === 0) return "";

  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  const hoursTxt = hours === 0 ? "" : `${hours} hr.`;
  const minTxt = minutes === 0 ? "" : `${minutes} min.`;

  return `Est. Time: ${hoursTxt} ${minTxt}`;
};

export const showStartTime = (startTime) => {
  return startTime ? ` @ ${startTime}` : "";
};

export const showProfessional = (professional) => {
  return professional ? professional.name : "Any Professional";
};

export const showAddOnsDesktop = (addOns) => {
  if (addOns.length === 0) return "";
  else if (addOns.length === 1) return ` with ${addOns.length} addon`;
  else return ` with ${addOns.length} addons`;
};

export const showAddOnsMobile = (addOns) => {
  if (addOns.length === 0) return "";
  else if (addOns.length === 1) return ` + ${addOns.length} addon`;
  else return ` + ${addOns.length} addons`;
};
