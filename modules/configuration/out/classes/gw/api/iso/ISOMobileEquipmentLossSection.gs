package gw.api.iso

/**
 * Empty subclass of ISOMobileEquipmentLossSectionBase, provided so customers can
 * override methods and properties in the base implementation.
 */
@Export
class ISOMobileEquipmentLossSection extends ISOMobileEquipmentLossSectionBase {

  /**
   * Exposure level constructor, used when creating a request for just the
   * given exposure. Implicitly creates an ISOClaimSearchRequest.
   */
  construct(inExposure : Exposure)  {
    super(inExposure)
  } 

  /**
   * Claim level constructor, for adding a new loss section to an existing
   * claim level request.
   */
  construct(inSearchRequest : ISOClaimSearchRequest, inExposure : Exposure) {
    super(inSearchRequest, inExposure)
  }

}
