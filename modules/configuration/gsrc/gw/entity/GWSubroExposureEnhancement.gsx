package gw.entity
uses gw.api.financials.CurrencyAmount
uses java.math.BigDecimal

@Export
enhancement GWSubroExposureEnhancement : entity.Exposure
{
  function getClaimCostRecSubroOnlyCC(aReserveLine: ReserveLine) : CurrencyAmount {
     var total = this.Claim.getRecoveriesIterator( false /*newAndModifiedOnly*/ )
                     .toList().sumCurrencyAmount( \ t -> {
                                                               var rec = t
                                                               if (rec.CostType == "claimcost" 
  	                                                           and rec.RecoveryCategory == "subro"
  	                                                           and rec.ReserveLine == aReserveLine) { 
                                                                 return rec.ClaimAmount
                                                               } else {
                                                                 return null
                                                               }
                                                             })

    return (total == null) ? new CurrencyAmount( BigDecimal.ZERO, this.getClaim().Currency ) : total
  }
}
