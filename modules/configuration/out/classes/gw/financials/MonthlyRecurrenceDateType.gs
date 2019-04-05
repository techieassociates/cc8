package gw.financials
uses gw.lang.Export
uses java.lang.String

@Export
enum MonthlyRecurrenceDateType {

  SPECIFIC_DATE(\ -> displaykey.Wizard.NewCheckWizard.CheckInstructions.Recurrence.SubsequentChecks.Frequency.Monthly.SpecificDate), 
  WEEKDAY(\ -> displaykey.Wizard.NewCheckWizard.CheckInstructions.Recurrence.SubsequentChecks.Frequency.Monthly.Weekday)

  var _displayName : block() : String

  private construct(inDisplayName : block() : String) {
    _displayName = inDisplayName
  }
  
  override function toString() : String {
    return _displayName()
  }
}
