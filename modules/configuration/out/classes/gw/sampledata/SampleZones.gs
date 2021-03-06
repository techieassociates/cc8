package gw.sampledata
uses gw.pl.persistence.core.Bundle
uses gw.api.databuilder.ZoneBuilder
uses gw.api.databuilder.ZoneLinkBuilder
uses gw.api.util.DataImportTestUtil
uses java.lang.Throwable

@Export
class SampleZones  extends SampleDataBase {

  static function loadZone(code:String, type:ZoneType, country:Country) : Zone {
    return gw.api.database.Query.make(entity.Zone).compare("Code", Equals, code).compare("ZoneType", Equals, type).compare("Country", Equals, country).select().single()
  }

  static property get California() : Zone {
    return loadZone("CA", ZoneType.TC_STATE, Country.TC_US)
  } 

  static property get USZip02883() : Zone {
    return loadZone("02883", ZoneType.TC_ZIP, Country.TC_US)
  }
  static property get CAProvinceBC() : Zone {
    return loadZone("BC", ZoneType.TC_PROVINCE, Country.TC_CA)
  }

  construct(inCache : SampleDataCache) {
    super(inCache)
  }

  override property get Description() : String {
    return "Zones"
  }

  override function testSampleData(bundle : Bundle) {
    // if zones have already been loaded, do not add more
    if (gw.api.database.Query.make(entity.Zone).select().Count == 0) {
      try {
        DataImportTestUtil.importZoneData();    
      } catch(e : Throwable) {
        buildZones(bundle)
      }
    }
  }
  
  function buildZones(bundle : Bundle) {
    // state 
    new ZoneBuilder().withCodeAndName("AK").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("AZ").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("CO").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("FL").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("HI").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("ID").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("MI").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("MT").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("NM").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("NV").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("NJ").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("OR").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("UT").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("WA").withZoneType("state").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("WY").withZoneType("state").withCountry("us").create(bundle)
    
    // counties
    var caZone = new ZoneBuilder().withCodeAndName("CA").withZoneType("state").withCountry("us").create(bundle)

    var county1 = new ZoneBuilder().withName("San Mateo").withCode("CA:San Mateo").withZoneType("county").withCountry("us").create(bundle)
    new ZoneLinkBuilder().onZone1(caZone).onZone2(county1).create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Imperial").withCode("CA:Imperial").withZoneType("county").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Kern").withCode("CA:Kern").withZoneType("county").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Los Angeles").withCode("CA:Los Angeles").withZoneType("county").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Orange").withCode("CA:Orange").withZoneType("county").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Riverside").withCode("CA:Riverside").withZoneType("county").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("San Bernardino").withCode("CA:San Bernardino").withZoneType("county").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("San Diego").withCode("CA:San Diego").withZoneType("county").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("San Luis Obispo").withCode("CA:San Luis Obispo").withZoneType("county").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Santa Barbara").withCode("CA:Santa Barbara").withZoneType("county").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Ventura").withCode("CA:Ventura").withZoneType("county").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("San Francisco").withCode("CA:San Francisco").withZoneType("county").withCountry("us"))
                         .create(bundle)
  
    // cities
    var city1 = new ZoneBuilder().withName("San Mateo").withCode("CA:San Mateo").withZoneType("city").withCountry("us").create(bundle)
    new ZoneLinkBuilder().onZone1(caZone).onZone2(city1).create(bundle)
    new ZoneLinkBuilder().onZone1(county1).onZone2(city1).create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Pasadena").withCode("CA:Pasadena").withZoneType("city").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Palmdale").withCode("CA:Palmdale").withZoneType("city").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Mira Loma").withCode("CA:Mira Loma").withZoneType("city").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("Rancho Cucamonga").withCode("CA:Rancho Cucamonga").withZoneType("city").withCountry("us"))
                         .create(bundle)
    new ZoneLinkBuilder().onZone1(caZone)
                         .onZone2(new ZoneBuilder().withName("San Francisco").withCode("CA:San Francisco").withZoneType("city").withCountry("us"))
                         .create(bundle)
    
    // postal codes
    var zip1 = new ZoneBuilder().withCodeAndName("94404").withZoneType("zip").withCountry("us").create(bundle)
    new ZoneLinkBuilder().onZone1(zip1).onZone2(city1).create(bundle)
    new ZoneLinkBuilder().onZone1(caZone).onZone2(zip1).create(bundle)
    new ZoneLinkBuilder().onZone1(county1).onZone2(zip1).create(bundle)
    
    new ZoneBuilder().withCodeAndName("94101").withZoneType("zip").withCountry("us").create(bundle)
    new ZoneBuilder().withCodeAndName("94102").withZoneType("zip").withCountry("us").create(bundle)
  }
}
