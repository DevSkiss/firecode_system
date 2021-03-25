const FireCodeConvert = (firecode) => {
  switch (firecode) {
    case "628-BFP-01":
      return "Fire Code Construction Tax";
    case "628-BFP-02":
      return "Fire Code Realty Tax";
    case "628-BFP-03":
      return "Fire Code Premium Tax";
    case "628-BFP-04":
      return "Fire Code Sales Tax";
    case "628-BFP-05":
      return "Fire Code Proceeds Tax";
    case "628-BFP-06":
      return "Fire Safety Inspection Fee";
    case "628-BFP-07":
      return "Storage Clearance Fee";
    case "628-BFP-08":
      return "Conveyance Clearance Fee";
    case "628-BFP-09":
      return "Installation Clearance Fee";
    case "628-BFP-10":
      return "Fire Code Fines";
    case "628-BFP-11":
      return "Other Fees";
  }
};

export { FireCodeConvert };
