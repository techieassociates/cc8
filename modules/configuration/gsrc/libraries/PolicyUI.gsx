package libraries

@Export
enhancement PolicyUI : entity.Policy
{
  /*
   * Used by the EditableVehicleCoveragesLV list view to decide whether PIP specific fields should
   * be available
   */
  function isPIPCoverageType(type : CoverageType) : boolean {
    return type == "PAPIP_AR"
      || type == "PAPIP_DC"
      || type == "PAPIP_DE"
      || type == "PAPIP_FL"
      || type == "PAPIP_HI"
      || type == "PAPIP_KS"
      || type == "PAPIP_KY"
      || type == "PAPIP_MA"
      || type == "PAPIP_MD"
      || type == "PAPIP_MI"
      || type == "PAPIP_MN"
      || type == "PAPIP_ND"
      || type == "PAPIP_NJ"
      || type == "PAPIP_NY"
      || type == "PAPIP_OR"
      || type == "PAPIP_PA"
      || type == "PAPIP_TX"
      || type == "PAPIP_UT"
      || type == "PAPIP_WA"
      || type == "CAPIP_DE"
      || type == "CAPIP_FL"
      || type == "CAPIP_HI"
      || type == "CAPIP_KS"
      || type == "CAPIP_KY"
      || type == "CAPIP_MA"
      || type == "CAPIP_MD"
      || type == "CAPIP_MI"
      || type == "CAPIP_MN"
      || type == "CAPIP_ND"
      || type == "CAPIP_NJ"
      || type == "CAPIP_NY"
      || type == "CAPIP_OR"
      || type == "CAPIP_PA"
      || type == "CAPIP_TX"
      || type == "CAPIP_UT"
      || type == "CAPIP_WA"
      || type == "CA_PIP_AR"
      || type == "CA_PIP_DC"
  }

  /*
   * The following methods are used to categorize a variety of state-specific PIP coverages into a smaller number 
   * of simple groups so that various rules and UI pages can ask whether the current coverage provides death benefits 
   * or lost wages, for example.
   */
  function coversPIPBasics(type : CoverageType) : boolean {
    return isPIPCoverageType(type)
  }
  
  function coversPIPWageLoss(type : CoverageType) : boolean {
    return type == "PAPIP_AR"
      || type == "PAPIP_DC"
      || type == "PAPIP_DE"
      || type == "PAPIP_FL"
      || type == "PAPIP_HI"
      || type == "PAPIP_KS"
      || type == "PAPIP_KY"
      || type == "PAPIP_MA"
      || type == "PAPIP_MD"
      || type == "PAPIP_MI"
      || type == "PAPIP_MN"
      || type == "PAPIP_ND"
      || type == "PAPIP_NY"
      || type == "PAPIP_OR"
      || type == "PAPIP_PA"
      || type == "PAPIP_UT"
      || type == "PAPIP_WA"
      || type == "CAPIP_DE"
      || type == "CAPIP_FL"
      || type == "CAPIP_HI"
      || type == "CAPIP_KS"
      || type == "CAPIP_KY"
      || type == "CAPIP_MA"
      || type == "CAPIP_MD"
      || type == "CAPIP_MI"
      || type == "CAPIP_MN"
      || type == "CAPIP_ND"
      || type == "CAPIP_NY"
      || type == "CAPIP_OR"
      || type == "CAPIP_PA"
      || type == "CAPIP_UT"
      || type == "CAPIP_WA"
      || type == "CA_PIP_AR"
      || type == "CA_PIP_DC"
  }
  
  function coversPIPExtraMedical(type : CoverageType) : boolean {
    return type == "PAPIP_AR"
      || type == "PAPIP_DC"
      || type == "PAPIP_DE"
      || type == "PAPIP_FL"
      || type == "PAPIP_HI"
      || type == "PAPIP_KS"
      || type == "PAPIP_KY"
      || type == "PAPIP_MA"
      || type == "PAPIP_MD"
      || type == "PAPIP_MI"
      || type == "PAPIP_MN"
      || type == "PAPIP_ND"
      || type == "PAPIP_NJ"
      || type == "PAPIP_NY"
      || type == "PAPIP_OR"
      || type == "PAPIP_PA"
      || type == "PAPIP_TX"
      || type == "PAPIP_UT"
      || type == "PAPIP_WA"
      || type == "CAPIP_DE"
      || type == "CAPIP_FL"
      || type == "CAPIP_HI"
      || type == "CAPIP_KS"
      || type == "CAPIP_KY"
      || type == "CAPIP_MA"
      || type == "CAPIP_MD"
      || type == "CAPIP_MI"
      || type == "CAPIP_MN"
      || type == "CAPIP_ND"
      || type == "CAPIP_NJ"
      || type == "CAPIP_NY"
      || type == "CAPIP_OR"
      || type == "CAPIP_PA"
      || type == "CAPIP_TX"
      || type == "CAPIP_UT"
      || type == "CAPIP_WA"
      || type == "CA_PIP_AR"
      || type == "CA_PIP_DC"
  }
  
  function coversPIPAddlServices(type : CoverageType) : boolean {
    return type == "PAPIP_DE"
      || type == "PAPIP_KS"
      || type == "PAPIP_MA"
      || type == "PAPIP_MD"
      || type == "PAPIP_MI"
      || type == "PAPIP_MN"
      || type == "PAPIP_ND"
      || type == "PAPIP_NY"
      || type == "PAPIP_OR"
      || type == "PAPIP_WA"
      || type == "CAPIP_DE"
      || type == "CAPIP_KS"
      || type == "CAPIP_MA"
      || type == "CAPIP_MD"
      || type == "CAPIP_MI"
      || type == "CAPIP_MN"
      || type == "CAPIP_ND"
      || type == "CAPIP_NY"
      || type == "CAPIP_OR"
      || type == "CAPIP_WA"
  }
  
  function coversPIPDeathBenefits(type : CoverageType) : boolean {
    return type == "PAPIP_AR"
      || type == "PAPIP_FL"
      || type == "PAPIP_HI"
      || type == "PAPIP_NJ"
      || type == "PAPIP_NY"
      || type == "PAPIP_PA"
      || type == "CAPIP_FL"
      || type == "CAPIP_HI"
      || type == "CAPIP_NJ"
      || type == "CAPIP_NY"
      || type == "CAPIP_PA"
      || type == "CA_PIP_AR"
  }
  
  function coversPIPFuneralExpenses(type : CoverageType) : boolean {
    return type == "PAPIP_DC"
      || type == "PAPIP_DE"
      || type == "PAPIP_HI"
      || type == "PAPIP_KS"
      || type == "PAPIP_KY"
      || type == "PAPIP_MA"
      || type == "PAPIP_MI"
      || type == "PAPIP_MN"
      || type == "PAPIP_NJ"
      || type == "PAPIP_OR"
      || type == "PAPIP_PA"
      || type == "PAPIP_UT"
      || type == "PAPIP_WA"
      || type == "CAPIP_DE"
      || type == "CAPIP_HI"
      || type == "CAPIP_KS"
      || type == "CAPIP_KY"
      || type == "CAPIP_MA"
      || type == "CAPIP_MI"
      || type == "CAPIP_MN"
      || type == "CAPIP_NJ"
      || type == "CAPIP_OR"
      || type == "CAPIP_PA"
      || type == "CAPIP_UT"
      || type == "CAPIP_WA"
      || type == "CA_PIP_DC"
  }
  
}