package gw.sampledata

uses gw.pl.persistence.core.Bundle

@Export
class SampleSeczonesRegions extends SampleDataBase {

  construct(inCache : SampleDataCache) {
    super(inCache)
  }

  override property get Description() : String {
    return "SecurityZone, Region, and RegionZone"
  }

  override function minimalTestSampleData(bundle : Bundle) {
    // Rename default zone loaded by SystemTables.xml
    var autoAndPropertySecurityZone = bundle.add(gw.api.database.Query.make(entity.SecurityZone).compare("PublicID", Equals, "default_data:1").select().AtMostOneRow)
    autoAndPropertySecurityZone.Name = "Auto and Property"
    autoAndPropertySecurityZone.Description = "All auto, property, and liability claims"
    
    new gw.api.databuilder.SecurityZoneBuilder()
      .withPublicId("demo_sample:2")
      .withDescription("All workers comp claims")
      .withName("Workers Comp")
      .create(bundle)
    new gw.api.databuilder.SecurityZoneBuilder()
      .withDescription("All travel claims")
      .withName("Travel")
      .create(bundle)
  }

  override function testSampleData(bundle : Bundle) {
    
    minimalTestSampleData(bundle)

    var regionDemoSample1 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:1")
      .withName("Western Region")
      .create(bundle)


    var regionDemoSample2 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:2")
      .withName("Eastern Region")
      .create(bundle)


    var regionDemoSample3 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:3")
      .withName("Eastern Part of Mid-west")
      .create(bundle)


    var regionDemoSample4 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:4")
      .withName("Western Part of Mid-west")
      .create(bundle)


    var regionDemoSample5 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:5")
      .withName("Alexandria Claims Center")
      .create(bundle)


    var regionDemoSample6 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:6")
      .withName("Birmingham Claims Center")
      .create(bundle)


    var regionDemoSample7 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:7")
      .withName("Boise Claims Center")
      .create(bundle)


    var regionDemoSample8 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:8")
      .withName("Boston Claims Center")
      .create(bundle)


    var regionDemoSample9 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:9")
      .withName("Bridgeport Claims Center")
      .create(bundle)


    var regionDemoSample10 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:10")
      .withName("Cleveland Claims Center")
      .create(bundle)


    var regionDemoSample11 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:11")
      .withName("Dallas Claims Center")
      .create(bundle)


    var regionDemoSample12 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:12")
      .withName("Denver Claims Center")
      .create(bundle)


    var regionDemoSample13 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:13")
      .withName("Los Angeles Claims Center - HI")
      .create(bundle)


    var regionDemoSample14 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:14")
      .withName("Los Angeles Claims Center - SoCal")
      .create(bundle)


    var regionDemoSample15 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:15")
      .withName("Minneapolis Claims Center")
      .create(bundle)


    var regionDemoSample16 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:16")
      .withName("Phoenix Claims Center")
      .create(bundle)


    var regionDemoSample17 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:17")
      .withName("Portland Claims Center")
      .create(bundle)


    var regionDemoSample18 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:18")
      .withName("Sacramento Claims Center")
      .create(bundle)


    var regionDemoSample19 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:19")
      .withName("Salt Lake City Claims Center")
      .create(bundle)


    var regionDemoSample20 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:20")
      .withName("St. Louis Claims Center")
      .create(bundle)


    var regionDemoSample21 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:21")
      .withName("Tampa Claims Center")
      .create(bundle)


    var regionDemoSample22 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:22")
      .withName("Trenton Claims Center")
      .create(bundle)


    var regionDemoSample23 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:23")
      .withName("LA Local Area")
      .create(bundle)


    var regionDemoSample24 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:24")
      .withName("San Diego Local Area")
      .create(bundle)


    var regionDemoSample25 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:25")
      .withName("Chicago Local Area")
      .create(bundle)


    var regionDemoSample26 = new gw.api.databuilder.RegionBuilder()
      .withPublicId("demo_sample:26")
      .withName("Southwest Illinois Local Area")
      .create(bundle)

    (\->{
    // NOTE pdalbora 9-Dec-2010 -- I removed the (unused) local variable declarations
    // here because the debug info for Gosu methods blows up if the method has more
    // too many local variables. PL-15001
    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("AK")
      .withCountry("US")
      .withPublicId("demo_sample:1")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("AZ")
      .withCountry("US")
      .withPublicId("demo_sample:2")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA")
      .withCountry("US")
      .withPublicId("demo_sample:3")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CO")
      .withCountry("US")
      .withPublicId("demo_sample:4")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("HI")
      .withCountry("US")
      .withPublicId("demo_sample:5")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("ID")
      .withCountry("US")
      .withPublicId("demo_sample:6")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MT")
      .withCountry("US")
      .withPublicId("demo_sample:7")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NM")
      .withCountry("US")
      .withPublicId("demo_sample:8")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NV")
      .withCountry("US")
      .withPublicId("demo_sample:9")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("OR")
      .withCountry("US")
      .withPublicId("demo_sample:10")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("UT")
      .withCountry("US")
      .withPublicId("demo_sample:11")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("WA")
      .withCountry("US")
      .withPublicId("demo_sample:12")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("WY")
      .withCountry("US")
      .withPublicId("demo_sample:13")
      .onRegion(regionDemoSample1)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CT")
      .withCountry("US")
      .withPublicId("demo_sample:14")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("DC")
      .withCountry("US")
      .withPublicId("demo_sample:15")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("DE")
      .withCountry("US")
      .withPublicId("demo_sample:16")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("FL")
      .withCountry("US")
      .withPublicId("demo_sample:17")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("GA")
      .withCountry("US")
      .withPublicId("demo_sample:18")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MA")
      .withCountry("US")
      .withPublicId("demo_sample:19")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MD")
      .withCountry("US")
      .withPublicId("demo_sample:20")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("ME")
      .withCountry("US")
      .withPublicId("demo_sample:21")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NC")
      .withCountry("US")
      .withPublicId("demo_sample:22")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NH")
      .withCountry("US")
      .withPublicId("demo_sample:23")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NJ")
      .withCountry("US")
      .withPublicId("demo_sample:24")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NY")
      .withCountry("US")
      .withPublicId("demo_sample:25")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("PA")
      .withCountry("US")
      .withPublicId("demo_sample:26")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("PR")
      .withCountry("US")
      .withPublicId("demo_sample:27")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("RI")
      .withCountry("US")
      .withPublicId("demo_sample:28")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("SC")
      .withCountry("US")
      .withPublicId("demo_sample:29")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("VA")
      .withCountry("US")
      .withPublicId("demo_sample:30")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("VT")
      .withCountry("US")
      .withPublicId("demo_sample:31")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("WV")
      .withCountry("US")
      .withPublicId("demo_sample:32")
      .onRegion(regionDemoSample2)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("AL")
      .withCountry("US")
      .withPublicId("demo_sample:33")
      .onRegion(regionDemoSample3)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL")
      .withCountry("US")
      .withPublicId("demo_sample:34")
      .onRegion(regionDemoSample3)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IN")
      .withCountry("US")
      .withPublicId("demo_sample:35")
      .onRegion(regionDemoSample3)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("KY")
      .withCountry("US")
      .withPublicId("demo_sample:36")
      .onRegion(regionDemoSample3)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MI")
      .withCountry("US")
      .withPublicId("demo_sample:37")
      .onRegion(regionDemoSample3)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MS")
      .withCountry("US")
      .withPublicId("demo_sample:38")
      .onRegion(regionDemoSample3)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("TN")
      .withCountry("US")
      .withPublicId("demo_sample:39")
      .onRegion(regionDemoSample3)
      .withZoneType("State")
      .create(bundle)
    })()

    (\-> {
    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("OH")
      .withCountry("US")
      .withPublicId("demo_sample:40")
      .onRegion(regionDemoSample3)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("WI")
      .withCountry("US")
      .withPublicId("demo_sample:41")
      .onRegion(regionDemoSample3)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("AR")
      .withCountry("US")
      .withPublicId("demo_sample:42")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IA")
      .withCountry("US")
      .withPublicId("demo_sample:43")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("KS")
      .withCountry("US")
      .withPublicId("demo_sample:44")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("LA")
      .withCountry("US")
      .withPublicId("demo_sample:45")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MN")
      .withCountry("US")
      .withPublicId("demo_sample:46")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("OK")
      .withCountry("US")
      .withPublicId("demo_sample:47")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MO")
      .withCountry("US")
      .withPublicId("demo_sample:48")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("ND")
      .withCountry("US")
      .withPublicId("demo_sample:49")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NE")
      .withCountry("US")
      .withPublicId("demo_sample:50")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("SD")
      .withCountry("US")
      .withPublicId("demo_sample:51")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("TX")
      .withCountry("US")
      .withPublicId("demo_sample:52")
      .onRegion(regionDemoSample4)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("DC")
      .withCountry("US")
      .withPublicId("demo_sample:53")
      .onRegion(regionDemoSample5)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MD")
      .withCountry("US")
      .withPublicId("demo_sample:54")
      .onRegion(regionDemoSample5)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NC")
      .withCountry("US")
      .withPublicId("demo_sample:55")
      .onRegion(regionDemoSample5)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("VA")
      .withCountry("US")
      .withPublicId("demo_sample:56")
      .onRegion(regionDemoSample5)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("WV")
      .withCountry("US")
      .withPublicId("demo_sample:57")
      .onRegion(regionDemoSample5)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("AL")
      .withCountry("US")
      .withPublicId("demo_sample:58")
      .onRegion(regionDemoSample6)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("KY")
      .withCountry("US")
      .withPublicId("demo_sample:59")
      .onRegion(regionDemoSample6)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MS")
      .withCountry("US")
      .withPublicId("demo_sample:60")
      .onRegion(regionDemoSample6)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("TN")
      .withCountry("US")
      .withPublicId("demo_sample:61")
      .onRegion(regionDemoSample6)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("ID")
      .withCountry("US")
      .withPublicId("demo_sample:62")
      .onRegion(regionDemoSample7)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MT")
      .withCountry("US")
      .withPublicId("demo_sample:63")
      .onRegion(regionDemoSample7)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MA")
      .withCountry("US")
      .withPublicId("demo_sample:64")
      .onRegion(regionDemoSample8)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("ME")
      .withCountry("US")
      .withPublicId("demo_sample:65")
      .onRegion(regionDemoSample8)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NH")
      .withCountry("US")
      .withPublicId("demo_sample:66")
      .onRegion(regionDemoSample8)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("VT")
      .withCountry("US")
      .withPublicId("demo_sample:67")
      .onRegion(regionDemoSample8)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CT")
      .withCountry("US")
      .withPublicId("demo_sample:68")
      .onRegion(regionDemoSample9)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NY")
      .withCountry("US")
      .withPublicId("demo_sample:69")
      .onRegion(regionDemoSample9)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("RI")
      .withCountry("US")
      .withPublicId("demo_sample:70")
      .onRegion(regionDemoSample9)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL")
      .withCountry("US")
      .withPublicId("demo_sample:71")
      .onRegion(regionDemoSample10)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IN")
      .withCountry("US")
      .withPublicId("demo_sample:72")
      .onRegion(regionDemoSample10)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MI")
      .withCountry("US")
      .withPublicId("demo_sample:73")
      .onRegion(regionDemoSample10)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("OH")
      .withCountry("US")
      .withPublicId("demo_sample:74")
      .onRegion(regionDemoSample10)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("WI")
      .withCountry("US")
      .withPublicId("demo_sample:75")
      .onRegion(regionDemoSample10)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("AR")
      .withCountry("US")
      .withPublicId("demo_sample:76")
      .onRegion(regionDemoSample11)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("LA")
      .withCountry("US")
      .withPublicId("demo_sample:77")
      .onRegion(regionDemoSample11)
      .withZoneType("State")
      .create(bundle)
    })()

    (\-> {
    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("OK")
      .withCountry("US")
      .withPublicId("demo_sample:78")
      .onRegion(regionDemoSample11)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("TX")
      .withCountry("US")
      .withPublicId("demo_sample:79")
      .onRegion(regionDemoSample11)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CO")
      .withCountry("US")
      .withPublicId("demo_sample:80")
      .onRegion(regionDemoSample12)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("WY")
      .withCountry("US")
      .withPublicId("demo_sample:81")
      .onRegion(regionDemoSample12)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("HI")
      .withCountry("US")
      .withPublicId("demo_sample:82")
      .onRegion(regionDemoSample13)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Imperial")
      .withCountry("US")
      .withPublicId("demo_sample:83")
      .onRegion(regionDemoSample14)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Kern")
      .withCountry("US")
      .withPublicId("demo_sample:84")
      .onRegion(regionDemoSample14)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Los Angeles")
      .withCountry("US")
      .withPublicId("demo_sample:85")
      .onRegion(regionDemoSample14)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Orange")
      .withCountry("US")
      .withPublicId("demo_sample:86")
      .onRegion(regionDemoSample14)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Riverside")
      .withCountry("US")
      .withPublicId("demo_sample:87")
      .onRegion(regionDemoSample14)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:San Bernardino")
      .withCountry("US")
      .withPublicId("demo_sample:88")
      .onRegion(regionDemoSample14)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:San Diego")
      .withCountry("US")
      .withPublicId("demo_sample:89")
      .onRegion(regionDemoSample14)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:San Luis Obispo")
      .withCountry("US")
      .withPublicId("demo_sample:90")
      .onRegion(regionDemoSample14)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Santa Barbara")
      .withCountry("US")
      .withPublicId("demo_sample:91")
      .onRegion(regionDemoSample14)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Ventura")
      .withCountry("US")
      .withPublicId("demo_sample:92")
      .onRegion(regionDemoSample14)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MN")
      .withCountry("US")
      .withPublicId("demo_sample:93")
      .onRegion(regionDemoSample15)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("ND")
      .withCountry("US")
      .withPublicId("demo_sample:94")
      .onRegion(regionDemoSample15)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("SD")
      .withCountry("US")
      .withPublicId("demo_sample:95")
      .onRegion(regionDemoSample15)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("AZ")
      .withCountry("US")
      .withPublicId("demo_sample:96")
      .onRegion(regionDemoSample16)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NM")
      .withCountry("US")
      .withPublicId("demo_sample:97")
      .onRegion(regionDemoSample16)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("AK")
      .withCountry("US")
      .withPublicId("demo_sample:98")
      .onRegion(regionDemoSample17)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("OR")
      .withCountry("US")
      .withPublicId("demo_sample:99")
      .onRegion(regionDemoSample17)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("WA")
      .withCountry("US")
      .withPublicId("demo_sample:100")
      .onRegion(regionDemoSample17)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Alameda")
      .withCountry("US")
      .withPublicId("demo_sample:101")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Alpine")
      .withCountry("US")
      .withPublicId("demo_sample:102")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Amador")
      .withCountry("US")
      .withPublicId("demo_sample:103")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Butte")
      .withCountry("US")
      .withPublicId("demo_sample:104")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Calaveras")
      .withCountry("US")
      .withPublicId("demo_sample:105")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Colusa")
      .withCountry("US")
      .withPublicId("demo_sample:106")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Contra Costa")
      .withCountry("US")
      .withPublicId("demo_sample:107")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Del Norte")
      .withCountry("US")
      .withPublicId("demo_sample:108")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:El Dorado")
      .withCountry("US")
      .withPublicId("demo_sample:109")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Fresno")
      .withCountry("US")
      .withPublicId("demo_sample:110")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Glenn")
      .withCountry("US")
      .withPublicId("demo_sample:111")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Humboldt")
      .withCountry("US")
      .withPublicId("demo_sample:112")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Inyo")
      .withCountry("US")
      .withPublicId("demo_sample:113")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Kings")
      .withCountry("US")
      .withPublicId("demo_sample:114")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Lake")
      .withCountry("US")
      .withPublicId("demo_sample:115")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)
    })()

    (\-> {
    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Lassen")
      .withCountry("US")
      .withPublicId("demo_sample:116")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Madera")
      .withCountry("US")
      .withPublicId("demo_sample:117")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Marin")
      .withCountry("US")
      .withPublicId("demo_sample:118")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Mariposa")
      .withCountry("US")
      .withPublicId("demo_sample:119")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Mendocino")
      .withCountry("US")
      .withPublicId("demo_sample:120")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Merced")
      .withCountry("US")
      .withPublicId("demo_sample:121")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Modoc")
      .withCountry("US")
      .withPublicId("demo_sample:122")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Mono")
      .withCountry("US")
      .withPublicId("demo_sample:123")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Monterey")
      .withCountry("US")
      .withPublicId("demo_sample:124")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Napa")
      .withCountry("US")
      .withPublicId("demo_sample:125")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Nevada")
      .withCountry("US")
      .withPublicId("demo_sample:126")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Placer")
      .withCountry("US")
      .withPublicId("demo_sample:127")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Plumas")
      .withCountry("US")
      .withPublicId("demo_sample:128")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Sacramento")
      .withCountry("US")
      .withPublicId("demo_sample:129")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:San Benito")
      .withCountry("US")
      .withPublicId("demo_sample:130")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:San Francisco")
      .withCountry("US")
      .withPublicId("demo_sample:131")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:San Joaquin")
      .withCountry("US")
      .withPublicId("demo_sample:132")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:San Mateo")
      .withCountry("US")
      .withPublicId("demo_sample:133")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Santa Clara")
      .withCountry("US")
      .withPublicId("demo_sample:134")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Santa Cruz")
      .withCountry("US")
      .withPublicId("demo_sample:135")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Shasta")
      .withCountry("US")
      .withPublicId("demo_sample:136")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Sierra")
      .withCountry("US")
      .withPublicId("demo_sample:137")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Siskiyou")
      .withCountry("US")
      .withPublicId("demo_sample:138")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Solano")
      .withCountry("US")
      .withPublicId("demo_sample:139")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Sonoma")
      .withCountry("US")
      .withPublicId("demo_sample:140")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Stanislaus")
      .withCountry("US")
      .withPublicId("demo_sample:141")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Sutter")
      .withCountry("US")
      .withPublicId("demo_sample:142")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Tehama")
      .withCountry("US")
      .withPublicId("demo_sample:143")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Trinity")
      .withCountry("US")
      .withPublicId("demo_sample:144")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Tulare")
      .withCountry("US")
      .withPublicId("demo_sample:145")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Tuolumne")
      .withCountry("US")
      .withPublicId("demo_sample:146")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Yolo")
      .withCountry("US")
      .withPublicId("demo_sample:147")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Yuba")
      .withCountry("US")
      .withPublicId("demo_sample:148")
      .onRegion(regionDemoSample18)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NV")
      .withCountry("US")
      .withPublicId("demo_sample:149")
      .onRegion(regionDemoSample19)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("UT")
      .withCountry("US")
      .withPublicId("demo_sample:150")
      .onRegion(regionDemoSample19)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IA")
      .withCountry("US")
      .withPublicId("demo_sample:151")
      .onRegion(regionDemoSample20)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("KS")
      .withCountry("US")
      .withPublicId("demo_sample:152")
      .onRegion(regionDemoSample20)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("MO")
      .withCountry("US")
      .withPublicId("demo_sample:153")
      .onRegion(regionDemoSample20)
      .withZoneType("State")
      .create(bundle)
    })()

    (\-> {
    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NE")
      .withCountry("US")
      .withPublicId("demo_sample:154")
      .onRegion(regionDemoSample20)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("FL")
      .withCountry("US")
      .withPublicId("demo_sample:155")
      .onRegion(regionDemoSample21)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("GA")
      .withCountry("US")
      .withPublicId("demo_sample:156")
      .onRegion(regionDemoSample21)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("PR")
      .withCountry("US")
      .withPublicId("demo_sample:157")
      .onRegion(regionDemoSample21)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("SC")
      .withCountry("US")
      .withPublicId("demo_sample:158")
      .onRegion(regionDemoSample21)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("DE")
      .withCountry("US")
      .withPublicId("demo_sample:159")
      .onRegion(regionDemoSample22)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("NJ")
      .withCountry("US")
      .withPublicId("demo_sample:160")
      .onRegion(regionDemoSample22)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("PA")
      .withCountry("US")
      .withPublicId("demo_sample:161")
      .onRegion(regionDemoSample22)
      .withZoneType("State")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Kern")
      .withCountry("US")
      .withPublicId("demo_sample:162")
      .onRegion(regionDemoSample23)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Los Angeles")
      .withCountry("US")
      .withPublicId("demo_sample:163")
      .onRegion(regionDemoSample23)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Orange")
      .withCountry("US")
      .withPublicId("demo_sample:164")
      .onRegion(regionDemoSample23)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Riverside")
      .withCountry("US")
      .withPublicId("demo_sample:165")
      .onRegion(regionDemoSample23)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:San Bernardino")
      .withCountry("US")
      .withPublicId("demo_sample:166")
      .onRegion(regionDemoSample23)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:San Luis Obispo")
      .withCountry("US")
      .withPublicId("demo_sample:167")
      .onRegion(regionDemoSample23)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Santa Barbara")
      .withCountry("US")
      .withPublicId("demo_sample:168")
      .onRegion(regionDemoSample23)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Ventura")
      .withCountry("US")
      .withPublicId("demo_sample:169")
      .onRegion(regionDemoSample23)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:Imperial")
      .withCountry("US")
      .withPublicId("demo_sample:170")
      .onRegion(regionDemoSample24)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("CA:San Diego")
      .withCountry("US")
      .withPublicId("demo_sample:171")
      .onRegion(regionDemoSample24)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Lake")
      .withCountry("US")
      .withPublicId("demo_sample:172")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Cook")
      .withCountry("US")
      .withPublicId("demo_sample:173")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:McHenry")
      .withCountry("US")
      .withPublicId("demo_sample:174")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Boone")
      .withCountry("US")
      .withPublicId("demo_sample:175")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:DeKalb")
      .withCountry("US")
      .withPublicId("demo_sample:176")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Kane")
      .withCountry("US")
      .withPublicId("demo_sample:177")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Kendall")
      .withCountry("US")
      .withPublicId("demo_sample:178")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:DuPage")
      .withCountry("US")
      .withPublicId("demo_sample:179")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Will")
      .withCountry("US")
      .withPublicId("demo_sample:180")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Bureau")
      .withCountry("US")
      .withPublicId("demo_sample:181")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Carroll")
      .withCountry("US")
      .withPublicId("demo_sample:182")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Ford")
      .withCountry("US")
      .withPublicId("demo_sample:183")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Grundy")
      .withCountry("US")
      .withPublicId("demo_sample:184")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Henry")
      .withCountry("US")
      .withPublicId("demo_sample:185")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Iroquois")
      .withCountry("US")
      .withPublicId("demo_sample:186")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Jo Daviess")
      .withCountry("US")
      .withPublicId("demo_sample:187")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Kankakee")
      .withCountry("US")
      .withPublicId("demo_sample:188")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Knox")
      .withCountry("US")
      .withPublicId("demo_sample:189")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:La Salle")
      .withCountry("US")
      .withPublicId("demo_sample:190")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Lee")
      .withCountry("US")
      .withPublicId("demo_sample:191")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)
    })()

    (\-> {
    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Livingston")
      .withCountry("US")
      .withPublicId("demo_sample:192")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Marshall")
      .withCountry("US")
      .withPublicId("demo_sample:193")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Mercer")
      .withCountry("US")
      .withPublicId("demo_sample:194")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Ogle")
      .withCountry("US")
      .withPublicId("demo_sample:195")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Peoria")
      .withCountry("US")
      .withPublicId("demo_sample:196")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Putnam")
      .withCountry("US")
      .withPublicId("demo_sample:197")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Rock Island")
      .withCountry("US")
      .withPublicId("demo_sample:198")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Stark")
      .withCountry("US")
      .withPublicId("demo_sample:199")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Stephenson")
      .withCountry("US")
      .withPublicId("demo_sample:200")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Whiteside")
      .withCountry("US")
      .withPublicId("demo_sample:201")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Winnebago")
      .withCountry("US")
      .withPublicId("demo_sample:202")
      .onRegion(regionDemoSample25)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Adams")
      .withCountry("US")
      .withPublicId("demo_sample:203")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Alexander")
      .withCountry("US")
      .withPublicId("demo_sample:204")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Bond")
      .withCountry("US")
      .withPublicId("demo_sample:205")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Brown")
      .withCountry("US")
      .withPublicId("demo_sample:206")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Calhoun")
      .withCountry("US")
      .withPublicId("demo_sample:207")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Cass")
      .withCountry("US")
      .withPublicId("demo_sample:208")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Champaign")
      .withCountry("US")
      .withPublicId("demo_sample:209")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Christian")
      .withCountry("US")
      .withPublicId("demo_sample:210")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Clark")
      .withCountry("US")
      .withPublicId("demo_sample:211")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Clay")
      .withCountry("US")
      .withPublicId("demo_sample:212")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Clinton")
      .withCountry("US")
      .withPublicId("demo_sample:213")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Coles")
      .withCountry("US")
      .withPublicId("demo_sample:214")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Crawford")
      .withCountry("US")
      .withPublicId("demo_sample:215")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Cumberland")
      .withCountry("US")
      .withPublicId("demo_sample:216")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:De Witt")
      .withCountry("US")
      .withPublicId("demo_sample:217")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Douglas")
      .withCountry("US")
      .withPublicId("demo_sample:218")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Edgar")
      .withCountry("US")
      .withPublicId("demo_sample:219")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Edwards")
      .withCountry("US")
      .withPublicId("demo_sample:220")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Effingham")
      .withCountry("US")
      .withPublicId("demo_sample:221")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Fayette")
      .withCountry("US")
      .withPublicId("demo_sample:222")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Franklin")
      .withCountry("US")
      .withPublicId("demo_sample:223")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Fulton")
      .withCountry("US")
      .withPublicId("demo_sample:224")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Gallatin")
      .withCountry("US")
      .withPublicId("demo_sample:225")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Greene")
      .withCountry("US")
      .withPublicId("demo_sample:226")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Hamilton")
      .withCountry("US")
      .withPublicId("demo_sample:227")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Hancock")
      .withCountry("US")
      .withPublicId("demo_sample:228")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Hardin")
      .withCountry("US")
      .withPublicId("demo_sample:229")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)
    })()

    (\-> {
    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Henderson")
      .withCountry("US")
      .withPublicId("demo_sample:230")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Jackson")
      .withCountry("US")
      .withPublicId("demo_sample:231")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Jasper")
      .withCountry("US")
      .withPublicId("demo_sample:232")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Jefferson")
      .withCountry("US")
      .withPublicId("demo_sample:233")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Jersey")
      .withCountry("US")
      .withPublicId("demo_sample:234")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Johnson")
      .withCountry("US")
      .withPublicId("demo_sample:235")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Kendall")
      .withCountry("US")
      .withPublicId("demo_sample:236")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Lawrence")
      .withCountry("US")
      .withPublicId("demo_sample:237")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Logan")
      .withCountry("US")
      .withPublicId("demo_sample:238")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Macon")
      .withCountry("US")
      .withPublicId("demo_sample:239")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Macoupin")
      .withCountry("US")
      .withPublicId("demo_sample:240")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Madison")
      .withCountry("US")
      .withPublicId("demo_sample:241")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Marion")
      .withCountry("US")
      .withPublicId("demo_sample:242")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Mason")
      .withCountry("US")
      .withPublicId("demo_sample:243")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Massac")
      .withCountry("US")
      .withPublicId("demo_sample:244")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:McDonough")
      .withCountry("US")
      .withPublicId("demo_sample:245")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:McLean")
      .withCountry("US")
      .withPublicId("demo_sample:246")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Menard")
      .withCountry("US")
      .withPublicId("demo_sample:247")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Monroe")
      .withCountry("US")
      .withPublicId("demo_sample:248")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Montgomery")
      .withCountry("US")
      .withPublicId("demo_sample:249")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Morgan")
      .withCountry("US")
      .withPublicId("demo_sample:250")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Moultrie")
      .withCountry("US")
      .withPublicId("demo_sample:251")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Perry")
      .withCountry("US")
      .withPublicId("demo_sample:252")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Piatt")
      .withCountry("US")
      .withPublicId("demo_sample:253")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Pike")
      .withCountry("US")
      .withPublicId("demo_sample:254")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Pope")
      .withCountry("US")
      .withPublicId("demo_sample:255")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Pulaski")
      .withCountry("US")
      .withPublicId("demo_sample:256")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Randolph")
      .withCountry("US")
      .withPublicId("demo_sample:257")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Richland")
      .withCountry("US")
      .withPublicId("demo_sample:258")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Saline")
      .withCountry("US")
      .withPublicId("demo_sample:259")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Sangamon")
      .withCountry("US")
      .withPublicId("demo_sample:260")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Schuyler")
      .withCountry("US")
      .withPublicId("demo_sample:261")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Scott")
      .withCountry("US")
      .withPublicId("demo_sample:262")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Shelby")
      .withCountry("US")
      .withPublicId("demo_sample:263")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:St. Clair")
      .withCountry("US")
      .withPublicId("demo_sample:264")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Tazewell")
      .withCountry("US")
      .withPublicId("demo_sample:265")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Union")
      .withCountry("US")
      .withPublicId("demo_sample:266")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Vermilion")
      .withCountry("US")
      .withPublicId("demo_sample:267")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Wabash")
      .withCountry("US")
      .withPublicId("demo_sample:268")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Warren")
      .withCountry("US")
      .withPublicId("demo_sample:269")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Washington")
      .withCountry("US")
      .withPublicId("demo_sample:270")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Wayne")
      .withCountry("US")
      .withPublicId("demo_sample:271")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:White")
      .withCountry("US")
      .withPublicId("demo_sample:272")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Will")
      .withCountry("US")
      .withPublicId("demo_sample:273")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Williamson")
      .withCountry("US")
      .withPublicId("demo_sample:274")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)


    new gw.api.databuilder.CCRegionZoneBuilder()
      .withCode("IL:Woodford")
      .withCountry("US")
      .withPublicId("demo_sample:275")
      .onRegion(regionDemoSample26)
      .withZoneType("County")
      .create(bundle)
    })()
  }
}
