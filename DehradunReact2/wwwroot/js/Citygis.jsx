
class HelloWorld extends React.Component {
    render() {
        var panID = false;
        function a() {
            if (panID) {
                document.getElementById("map").style.cursor = "auto";
                panID = false;
            } else {
                document.getElementById("map").style.cursor = "grab";
                panID = true;
            }
        }
        var themeFlag = false;
        function plus() {
            if (themeFlag) {
                document.getElementById('main1').style.backgroundColor = "#0082e6";
                document.getElementById('fun2').style.backgroundColor = "#0082e6";
                document.getElementById('layers').style.backgroundColor = "#0082e6";
                document.getElementById('fun3').style.backgroundColor = "#0082e6";
                document.getElementById('dashboard').style.backgroundColor = "#0082e6";
                document.getElementById('aroundme').style.backgroundColor = "#0082e6";
                document.getElementById('measure').style.backgroundColor = "#0082e6";
                document.getElementById('landmarks').style.backgroundColor = "#0082e6";
                document.getElementById('finddirection').style.backgroundColor = "#0082e6";
                document.getElementById('realtymdashboard').style.backgroundColor = "#0082e6";
                document.getElementById('homeNav').style.backgroundColor = "white";
                document.getElementById('homeNav').style.color = "#0082e6";
                document.getElementById('panNav').style.backgroundColor = "white";
                document.getElementById('panNav').style.color = "#0082e6";
                document.getElementById('printNav').style.backgroundColor = "white";
                document.getElementById('printNav').style.color = "#0082e6";
                document.getElementById('prevNav').style.backgroundColor = "white";
                document.getElementById('prevNav').style.color = "#0082e6";
                document.getElementById('nextNav').style.backgroundColor = "white";
                document.getElementById('nextNav').style.color = "#0082e6";
                document.getElementById('plus').style.backgroundColor = "white";
                document.getElementById('plus').style.color = "#0082e6";
                document.getElementById('minus').style.backgroundColor = "white";
                document.getElementById('minus').style.color = "#0082e6";
                document.getElementById('clearSelection').style.backgroundColor = "white";
                document.getElementById('clearSelection').style.color = "#0082e6";

                document.getElementById('themeNav').style.color = "#0082e6";
                document.getElementById('themeNav').style.backgroundColor = "white";

                document.getElementById('stopBlinkNav').style.color = "#0082e6";
                document.getElementById('stopBlinkNav').style.backgroundColor = "white";

                document.getElementById('helpNav').style.backgroundColor = "white";
                document.getElementById('helpNav').style.color = "#0082e6";

                document.getElementById('btm').style.backgroundColor = "white";
                document.getElementById('btm').style.borderColor = "#0082e6";

                document.getElementById('languageDashboard').style.backgroundColor = "#0082e6";
                // document.getElementById('languageDashboard').style.backgroundColor = "white";
                // document.getElementById('languageDashboard').style.borderColor = "#0082e6";
                themeFlag = false;
            } else {
                document.getElementById('main1').style.backgroundColor = "black";
                document.getElementById('fun2').style.backgroundColor = "black";
                document.getElementById('layers').style.backgroundColor = "black";
                document.getElementById('fun3').style.backgroundColor = "black";
                document.getElementById('dashboard').style.backgroundColor = "black";
                document.getElementById('aroundme').style.backgroundColor = "black";
                document.getElementById('measure').style.backgroundColor = "black";
                document.getElementById('landmarks').style.backgroundColor = "black";
                document.getElementById('finddirection').style.backgroundColor = "black";
                document.getElementById('realtymdashboard').style.backgroundColor = "black";
                document.getElementById('homeNav').style.backgroundColor = "black";
                document.getElementById('homeNav').style.color = "white";
                document.getElementById('panNav').style.backgroundColor = "black";
                document.getElementById('panNav').style.color = "white";
                document.getElementById('printNav').style.backgroundColor = "black";
                document.getElementById('printNav').style.color = "white";
                document.getElementById('prevNav').style.backgroundColor = "black";
                document.getElementById('prevNav').style.color = "white";
                document.getElementById('nextNav').style.backgroundColor = "black";
                document.getElementById('nextNav').style.color = "white";
                document.getElementById('plus').style.backgroundColor = "black";
                document.getElementById('plus').style.color = "white";
                document.getElementById('minus').style.backgroundColor = "black";
                document.getElementById('minus').style.color = "white";
                document.getElementById('clearSelection').style.backgroundColor = "black";
                document.getElementById('clearSelection').style.color = "white";
                document.getElementById('btm').style.backgroundColor = "black";
                document.getElementById('btm').style.borderColor = "black";

                document.getElementById('languageDashboard').style.backgroundColor = "black";
                // document.getElementById('languageDashboard').style.backgroundColor = "black";
                // document.getElementById('languageDashboard').style.borderColor = "black";

                document.getElementById('stopBlinkNav').style.color = "white";
                document.getElementById('stopBlinkNav').style.backgroundColor = "black";

                document.getElementById('themeNav').style.backgroundColor = "black";
                document.getElementById('themeNav').style.color = "white";

                document.getElementById('helpNav').style.backgroundColor = "black";
                document.getElementById('helpNav').style.color = "white";
                themeFlag = true;
            }
        }

        return (
            <div >
                <nav id="main1"> {/*mbot*/}
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <i className="fa fa-bars"></i>
                    </label>
                    <label className="logo">Dehradun</label>
                    {/*<!-- <i class="fas fa-virus"></i>&ensp; -->*/}
                    <ul >
                        <li><a id="imgNav" style={{ cursor: "pointer" }}><i className="fas fa-globe-asia"></i>&ensp;Image</a></li>
                        <li><a id="bookmamrkNav" style={{ cursor: "pointer" }}><i className="fas fa-bookmark"></i>&ensp;Bookmark</a></li>
                        <li><a id="cNav" style={{ cursor: "pointer" }}><i className="fas fa-map-marked-alt" ></i>&ensp;Coordinates</a></li>
                        <li><a id="identifyNav" style={{ cursor: "pointer" }}><i className="fas fa-map-marked-alt" ></i>&ensp;Identify</a></li>
                        <li><a id="preDefNav" style={{ cursor: "pointer" }} onclick="preDefNavClick()"><i className="fas fa-question-circle"></i>&ensp;Query</a></li>
                        <li><a id="logoutNav" style={{ cursor: "pointer" }} ><i className="fas fa-sign-out-alt"></i>&ensp;Logout</a></li>

                    </ul>
                </nav>


                <div id="sidenav3" style={{ marginTop: "110px" }}>
                    <div className="btn-area" onclick="fun3()" id="fun3">
                        <i className="fas fa-layer-group" id="arrowright" aria-hidden="true"
                            style={{ color: "white" }}></i>
                    </div>
                    <div style={{ backgroundColor: "#0082e6", color: "white", padding: "11px" }} id="layers">
                        LAYERS
</div>
                    <div style={{ backgroundColor: "white", padding: "5px" }}>
                        <a id="allLayerOff"
                            style={{ pointerEvents: "auto", color: "#6e6f6e", borderRight: "2px solid lightgray", paddingRight: "5px" }}>
                            All
                            Layers Off
    </a>

                        <a id="resetLayer" target="_blank" style={{ color: "#6e6f6e" }}>Reset</a>
                    </div>
                    <div style={{ backgroundColor: "#f5f5f5", height: "94%" }}>
                        <div style={{ marginLeft: "10px", padding: "3px" }}>
                        </div>
                        <div style={{ overflow: "scroll", height: "68%", margin: "6px", backgroundColor: "white" }}>

                            <details>
                                <summary>Dehradun Image</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="radio" id="satelliteradio" name="mapimage" value="satellite" />
                                <label for="male">Satellite</label><br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="radio" id="osmradio" name="mapimage" value="osm" />
                                <label for="female">OSM</label><br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="radio" id="gujaratradio" name="mapimage" value="gujarat Image" />
                                <label for="other">Basemap</label>
                            </details>

                            <details id="detailAdministraticeBoundary">
                                <summary><input type="checkbox" id="adBoundary" />Administrative Boundary</summary>
            &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="bMuniciple" />Boundary Municiple<br></br>
                            </details>

                            <details id="detailBuilding">
                                <summary><input type="checkbox" id="buildings" />Buildings</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="sBuildings" />State Government Buildings<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="cBuildings" />Central Government Buildings<br></br>
                            </details>
                            <details id="detailStormWater">
                                <summary><input type="checkbox" id="covidCenterCheckBox" />Storm Water</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="dNetwork" />Drainage Network<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="stwboundary" />STW Catchment Boundary<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="stwpoint" />STW Point<br></br>
                            </details>
                            <details id="detailGreenArea">
                                <summary><input type="checkbox" id="greenArea" />Green Area</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="farmHouse" />Farm House<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="forest" />Forest<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="gArea" />Green Areas<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="agriculture" />Agriculture<br></br>
                            </details>
                            <details id="detailRoad">
                                <summary><input type="checkbox" id="road" />Road</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="petrolPump" />Petrol Pumps<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="busDepot" />Bus Depot<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="tJun" />Traffic Junction<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="bridges" />Bridges and Flyover<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="tIsland" />Traffic Island<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="parking" />Parking<br></br>
                            </details>
                            <details id="detailBankingAndPostalFacility">
                                <summary><input type="checkbox" id="bfac" />Banking and Postal Facility</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="bbanks" />Banks<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="bpf" />Post Offices<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="batms" />ATMs<br></br>
                            </details>

                            <details id="detailWaterSupply">
                                <summary><input type="checkbox" id="wSupply" />Water Supply</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="wtot" /> Water Overhead Tank<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="wwtp" />Water Treatment Plant<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="wotl" />Water Overhead Tank Landmark<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="wwp" />Water Pipeline<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="wwsp" />Water Supply Point<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="wt" />Tubewells<br></br>
                            </details>
                            <details id="detailStreetLight">
                                <summary><input type="checkbox" id="st1" />Streetlight</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="st2" />streetlight<br></br>
                            </details>
                            <details id="detailSewerage">
                                <summary><input type="checkbox" id="sewerage" />Sewerage</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="cToilet" />Community Toilets<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="pToilet" />Public Toilets<br></br>
                            </details>

                            <details id="detailRailway">
                                <summary><input type="checkbox" id="rway" />Railway</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="rLine" />Railway Line<br></br>
                            </details>

                            <details id="detailEmeServices">
                                <summary><input type="checkbox" id="eServices" />Emergency Services</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="eFireStations" />Fire Stations<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="ePoliceStations" />Police Stations<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="ePoliceChowki" />Police Chowki<br></br>
                            </details>

                            <details id="detailEducation">
                                <summary><input type="checkbox" id="edu" />Education</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="eduPri" />Primary<br></br>
                            </details>
                            <details id="detailSolidWasteMan">
                                <summary><input type="checkbox" id="swm" />Solid Waste Management</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="swmContainer" />SWM Container<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="swmTrStation" />SWM Transfer Station<br></br>
                            </details>

                            <details id="detailMedicalServices">
                                <summary><input type="checkbox" id="mServices" />Medical Services</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="mBloodbank" />Bloodbank<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="mClinik" />Clinik<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="mHomeopathic" />Homeopathic<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="mHospital" />Hospitals<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="mMedStore" />Medical Store<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="mSurStore" />Surgical Shop<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="mVeterinaryClinik" />Veterinary Cliniks<br></br>
                            </details>

                            <details id="detailAreaBasedDevelopment">
                                <summary><input type="checkbox" id="abd" />Area Based Development</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="abdArea" />ABD Area<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="abdWardBound" />ABD Ward Boundary<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="abdConnDrain" />ABD Connectivity Drain<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="abdGreenBuilding" />ABD Green Building<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="abdMddaPark" />ABD MDDA PArk<br></br>
                            </details>

                            <details id="detailCovid">
                                <summary><input type="checkbox" id="covid" />Covid</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="isolationWard" />Isolation Ward<br></br>
                            </details>

                            <details id="detailOthers">
                                <summary><input type="checkbox" id="others" />Others</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="otherEdu" />Education<br></br>
                            </details>

                            <details id="detailScada">
                                <summary><input type="checkbox" id="scada" />SCADA</summary>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="scadaTubewell" />Tubewell<br></br>
                    &ensp;&ensp;&ensp;&ensp;<input type="checkbox" id="scadaReservoir" />Reservoir<br></br>
                            </details>

                        </div>

                        <div id="info" style={{ display: "none" }}></div>
                        <label for="track">
                            Track position
                <input id="track" type="checkbox" />
                        </label>
                        <p style={{ display: "none" }}>
                            position accuracy : <code id="accuracy"></code>&nbsp;&nbsp;
                altitude : <code id="altitude"></code>&nbsp;&nbsp;
                altitude accuracy : <code id="altitudeAccuracy"></code>&nbsp;&nbsp;
                heading : <code id="heading"></code>&nbsp;&nbsp;
                speed : <code id="speed"></code>
                        </p>
                        <div id="bookmarkHeading" style={{ padding: "8px" }}>
                        </div>
                        <div style={{ height: "20%" }}>
                            <table>
                                <tbody id="tbody">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>








                <div id="sidenav2" style={{ marginTop: "105px", zIndex: "2" }}>
                    <div className="btn-area" id="fun2" style={{ backgroundColor: "#0082e6" }}>
                        <i className="fas fa-arrow-left" id="arrowright"
                            aria-hidden="true" style={{ color: "white", fontSize: "35px", padding: "5px" }}></i>
                    </div>
                    <div style={{ backgroundColor: "#0082e6", color: "white", padding: "11px" }} id="dashboard">
                        <i className="fa fa-bullseye" aria-hidden="true"></i> DASHBOARD
        </div>
                    <div style={{ backgroundColor: "#f5f5f5", height: "100%", padding: "5px" }}>
                        <div style={{ overflowY: "scroll", maxHeight: "470px" }}>
                            <div style={{ padding: "10px", backgroundColor: "white", height: "270px" }}>
                                <details>
                                    <summary className="dashColor" id="aroundme">
                                        <i className="fa fa-search-plus" style={{ color: "white" }}
                                            aria-hidden="true"></i> Around
                            Me
                        </summary>

                                    <input type="radio" id="eme" name="aroundMe" value="Emergency Services" />
                                    <label for="male">Emergency Services</label><br></br>
                                    <input type="radio" id="touristAttRadioBtn" name="aroundMe" value="Tourist Attraction" />
                                    <label for="male">Tourist Attraction</label><br></br>
                                    <input type="radio" id="fanAndEntRadioBtn" name="aroundMe" value="Fun & Entertainment" />
                                    <label for="male">Fun & Entertainment</label><br></br>
                                    <input type="number" id="areaforaroundme" name="areaforaroundme" placeholder="Range in meters" />
                                    <br></br>
                                    <div id="selHospital" style={{ display: "none" }}>
                                    </div>
                                    <button id="goAroundMeBtn" style={{ marginLeft: "0%", border: "1px solid gray", padding: "9px" }} >
                                        Go
                            <i className="fa fa-arrow-right" aria-hidden="true"></i><br></br>
                                    </button>
                                    <button id="clearEmeServiceBtn" style={{ marginLeft: "5%", border: "1px solid gray", padding: "9px" }} >
                                        Clear
                            <i className="fa fa-arrow-right" aria-hidden="true"></i><br></br>
                                    </button> <br></br>
                                    <p></p>
                                </details>

                                <details id="measures">
                                    <summary className="dashColor" id="measure">
                                        <i className="fa fa-ruler" aria-hidden="true"></i> Measures
                        </summary>
                                    <ul>
                                        <li><a id="line"><i className="fas fa-chart-line"></i>&ensp;Line</a></li>
                                        <li><a id="area"><i className="fas fa-chart-area"></i>&ensp;Area</a></li>
                                    </ul>
                                </details>

                                <details>
                                    <summary className="dashColor" id="landmarks">
                                        <i className="fa fa-university" style={{ color: "white" }}
                                            aria-hidden="true"></i>
                            LandMarks
                        </summary>
                                    <div id="bird" style={{ height: "130px", overflow: "scroll" }}>
                                        <input type="checkbox" id="LandATM" name="ATM" value="ATM" />ATM<br></br>
                                        <input type="checkbox" id="LandBank" name="Bank" value="Bank" />Bank<br></br>
                                        <input type="checkbox" id="LandHospital" name="Blood Bank" value="Blood Bank" />Hospital<br></br>
                                        <input type="checkbox" id="LandPschool" name="Bus Depot" value="Bus Depot" />Primary School<br></br>
                                        {/*<!-- <input type="checkbox" id="Bus stop" name="Bus stop" value="Bus stop" />Bus Stop<br></br>*/}
                                        {/*  <input type="checkbox" id="CCTV Location" name="CCTV Location" value="CCTV Location"/>CCTV*/}
                                        {/*  Location*/}
                                        {/*  <br>*/}
                                        {/*  <input type="checkbox" id="Clinik" name="Clinik" value="Clinik">Clinik<br>*/}
                                        {/*  <input type="checkbox" id="Club" name="Club" value="Club">Club<br>*/}
                                        {/*  <input type="checkbox" id="CNG Station" name="CNG Station" value="CNG Station">CNG Station*/}
                                        {/*  <br>*/}
                                        {/*  <input type="checkbox" id="College" name="College" value="College">College<br> -->*/}
                                    </div><br></br>
                                    <button id="landmarkNext" style={{ marginLeft: "20%", border: "1px solid gray", padding: "9px" }}>
                                        Next
                            <i className="fa fa-arrow-right" aria-hidden="true"></i><br></br>
                                    </button>

                                    <button id="landmarkClear" style={{ marginLeft: "2%", border: "1px solid gray", padding: "9px" }}>
                                        Clear
                            <i className="fa fa-trash" aria-hidden="true"></i><br></br>
                                    </button>

                                    <div id="lnext">
                                        <br></br>
                                        <div id="Lzid">
                                            Zone<br></br>
                                            <select className="txtBox" name="zone" id="AreaSelect" style={{ width: "100%" }}>
                                                <option value="select">--Select Zone--</option>
                                                <option value="Rājpur">1. Rajpur</option>
                                                <option value="Kalanga">2. Kalanga</option>
                                                <option value="Dehradun">3. Dehradun</option>
                                            </select>
                                        </div>
                                        <br></br>
                                        <button id="landmarkGo" style={{ marginLeft: "60%", border: "1px solid gray", padding: "9px" }}>
                                            Go
                                <i className="fa fa-arrow-right" aria-hidden="true"></i><br></br>
                                        </button>
                                    </div>
                                    <br></br>
                                    <div id="LandShow">

                                    </div>

                                </details>

                                <details id="findLocation">
                                    <summary className="dashColor" id="finddirection">
                                        <i className="fa fa-location-arrow" aria-hidden="true"></i> Find
                            Direction
                        </summary>
                                </details>
                                <details>
                                    <summary className="dashColor" id="languageDashboard">
                                        <i className="fa fa-language" aria-hidden="true"></i> Language
                        </summary>
                                    <div id="google_translate_element"></div>
                                </details>
                                {/*<!-- <details>*/}
                                {/*    <summary>*/}
                                {/*        <label for="track">*/}
                                {/*            track position*/}
                                {/*            <input id="track" type="checkbox"/>*/}
                                {/*        </label>*/}
                                {/*        <p>*/}
                                {/*            position accuracy : <code id="accuracy"></code>&nbsp;&nbsp; altitude : <code id="altitude"></code>&nbsp;&nbsp; altitude accuracy : <code id="altitudeAccuracy"></code>&nbsp;&nbsp; heading : <code id="heading"></code>&nbsp;&nbsp;*/}
                                {/*            speed :*/}
                                {/*            <code id="speed"></code>*/}
                                {/*        </p>*/}
                                {/*    </summary>*/}
                                {/*</details> -->*/}
                                <details id="findLocation">
                                    <summary className="dashColor" id="realtymdashboard">
                                        <i className="fa fa-home" aria-hidden="true"></i> Real Time
                            Dashboard
                        </summary>
                                    <div id="realTimeDashboard">
                                        Group<br></br>
                                        <select name="zone" id="selectgroup" style={{ width: "100%" }} onchange="piechart()">
                                            <option value="selectGep">--Select Group--</option>
                                            <option value="Bank">1-Banking And Postal Facility</option>
                                            <option value="Building">2-Building</option>
                                            {/*<!-- <option value="audi">4-Lohamandi</option>*/}
                                            {/*<option value="audi">3-Tajganj</option> -->*/}
                                        </select>
                                        {/* <!-- <div id="piechart" style="width: 20px;height: 20px;"></div> -->*/}

                                    </div><br></br>
                                </details>
                                <div id="coorNavDashboard">

                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div id="uparrowbtn" style={{ zIndex: "988" }}>
                    <button id="funbottom" style={{ width: "auto", marginLeft: "43%", visibility: "visible", border: "2px solid #0082e6" }}>

                        <i className="fa fa-arrow-circle-up" aria-hidden="true" id="ub" style={{ fontSize: "large" }}></i></button><br></br>
                    <div style={{ border: "3px solid #0082e6" }} id="btm">
                        {/*<!-- <button class="btmbtn" id="homeNav"><i class="fas fa-home"></i></button> -->*/}

                        <button id="homeNav" className="btmbtn" ><i className="fas fa-home"></i></button>
                        <button className="btmbtn" id="themeNav" onClick={plus}><i className="fas fa-adjust"></i></button>
                        <button className="btmbtn" id="panNav" onClick={a}><i className="fas fa-hand-paper"></i></button>
                        <button className="btmbtn" id="printNav"><i className="fas fa-print"></i></button>
                        <button className="btmbtn" id="prevNav"><i className="fas fa-undo"></i></button>
                        <button className="btmbtn" id="nextNav"><i className="fas fa-redo"></i></button>
                        <button className="btmbtn" id="plus"><i className="fas fa-plus-circle"></i></button>
                        <button className="btmbtn" id="minus"><i className="fas fa-minus-circle"></i></button>
                        <button className="btmbtn" id="clearSelection"><i className="fas fa-eye-slash"></i></button>
                        <button className="btmbtn" id="helpNav" onclick="helpNavClick()"><i className="fas  fa-hands-helping"></i></button>

                        <button className="btmbtn" id="stopBlinkNav"><i className="fas fa-unlink"></i></button>
                        {/*<!-- <button class="btmbtn" id="track"><i class="fas fa-street-view"></i></button> -->*/}
                        {/*<!-- <button class="btmbtn" id="aaaa"><i class="fas fa-minus-circle"></i></button> -->*/}

                        {/*<!-- <button class="btmbtn"><i class="fas fa-bullseye"></i></button>*/}
                        {/*<button class="btmbtn"><i class="fas fa-unlink"></i></button> -->*/}
                    </div>
                </div>

                <div id="map" class="map" style={{ height: "625px" }}></div>

                <div id="popup" className="ol-popup" >
                    <a href="#" id="popup-closer" className="ol-popup-closer"></a>
                    <div id="popup-content"></div>
                </div>



                <dialog id="dialog1" style={{ top: "35%", padding: "0", width: "500px", height: "250px", zIndex: "7" }}>
                    <header style={{ backgroundColor: "#556080", color: "white", padding: "5px" }}>
                        <label style={{ fontWeight: "bold" }}>Find Location</label>
                        <button id="close" style={{ marginLeft: "70%", backgroundColor: "#f44336", color: "white" }}><i className="fa fa-times" aria-hidden="true"></i></button>
                    </header>
                    <section style={{ padding: " 9px" }}>
                        <label>Location From</label><br></br>
                        <label id="l1"><i className="fa fa-map-marker" aria-hidden="true" style={{ color: "blue" }}></i></label>&ensp;<input
                            class="txtBox" type="text" placeholder="Click on Map" id="cor1" style={{ width: "95%" }} /><br></br>
                        <label>Location To</label><br></br>
                        <label id="l2"><i className="fa fa-map-marker" aria-hidden="true" style={{ color: "red" }}></i></label>&ensp;<input
                            class="txtBox" type="text" id="cor2" placeholder="Click on Map" style={{ width: "95%" }} /> <br></br><br></br>
                        <button id="direction" style={{ marginLeft: "10%", border: "1px solid gray", padding: "8px", width: "40%" }}>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
        Direction
      </button>
                        <button id="flClear" style={{ marginLeft: "2%", border: "1px solid gray", padding: "8px", width: "40%" }}>
                            <i className="fa fa-trash" aria-hidden="true"></i>Clear
      </button>
                    </section>
                    <p></p>
                </dialog>

                <div id="popup" class="ol-popup" style={{display:"none"}}>
                    <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                    <div id="popup-content"></div>
                </div>

                <dialog id="dialog2" style={{ top: "35%", padding: "8px", width: "350px", height: "200px", zIndex: "7", border: "black", borderRadius: "10px" }}>
                    <section style={{ padding: "9px", textAlign: "center" }}>
                        <i className="fas fa-exclamation-circle fa-3x" style={{ color: "goldenrod" }}></i><br></br><br></br>
      Please Click on Map to Identify/Point Your Location
      <br></br><br></br>
                        <button id="dia2Close"
                            style={{ marginLeft: "0%", padding: "8px", width: "20%", backgroundColor: "#f44336", color: "white", fontSize: "20px" }}>
                            Ok
      </button>
                    </section>
                    <p></p>
                </dialog>


                <dialog style={{ top: "15%", height: "390px", padding: "0", width: "500px", zIndex: "7" }} id="pieChartDialog">
                    <header style={{ backgroundColor: "#556080", color: "white", padding: "3px" }}>
                        <label style={{ fontWeight: "500", marginBottom: "0px" }}>PieChart</label>
                        <button id="closePie" onclick="pieDialogClose()" style={{ marginLeft: "75%", backgroundColor: "#f44336", color: "white" }}><i className="fa fa-times"></i></button>
                    </header>
                    <section style={{ padding: "5px" }}>
                        <div id="piechart" style={{ width: "100%", height: "300px" }}>

                        </div>
                    </section>
                </dialog>

                <dialog style={{ top: "30%", padding: "0", width: "500px", height: "300px", zIndex: "7" }} id="forbookmark">
                    <header style={{ backgroundColor: "#556080", color: "white", padding: "3px" }}>
                        <label style={{ fontWeight: "500", marginBottom: "0px" }}>Add Bookmark</label>
                        <button id="closeBookmark" style={{ marginLeft: "70%", backgroundColor: "#f44336", color: "white" }}><i className="fa fa-times"></i></button>
                    </header>
                    <section style={{ padding: "5px" }}>
                        <label id="locfrom1">Name</label>
                        <input type="text" placeholder="Enter Name" className="txtBox" id="NameBook" style={{ width: "98%" }} /><br></br>
                        <label>Description</label>
                        <input type="text" className="txtBox" placeholder="Enter Description" style={{ width: "98%" }} id="DescBook" /><br></br><br></br>
                        <button style={{ marginLeft: "10%", border: "1px solid gray", padding: "8px", width: "40%" }} id="AddBook">
                            <i className="fas fa-directions" aria-hidden="true"></i>
        Add
      </button>
                        <button style={{ marginLeft: "2%", border: "1px solid gray", padding: "8px", width: "40%" }} id="clearBookmark">
                            <i className="fa fa-trash" aria-hidden="true"></i>
        Clear
      </button>
                    </section>
                </dialog>

                <dialog id="myFirstDialog" style={{ top: "35%", height: "300px", padding: "0", width: "500px", zIndex: "7" }}>
                    <header style={{ backgroundColor: "#556080", color: "white", padding: "5px" }}>
                        <label style={{ fontWeight: "500" }}>Coordinates</label>
                        <button id="Hide2" style={{ marginLeft: "72%", backgroundColor: "#f44336", color: "white" }} > <i className="fa fa-times" aria-hidden="true"></i></button>
                    </header>
                    <section style={{ padding: "9px" }}>
                        <label>Latitude</label><br></br>
                        <label id="cDia1"><i className="fa fa-map-marker" aria-hidden="true" style={{ color: "blue" }}></i></label>&ensp;<input
                            className="txtBox" type="text" placeholder="Click on Map" id="Lati" style={{ width: "95%" }} /><br></br>
                        <label>Longitude</label><br></br>
                        <label id="l2"><i className="fa fa-map-marker" aria-hidden="true" style={{ color: "red" }}></i></label>&ensp;<input
                            className="txtBox" type="text" id="Long" placeholder="Click on Map" style={{ width: "95%" }} /><br></br><br></br>
                        <button id="Search" style={{ marginLeft: "30%", border: "1px solid gray", padding: "8px", width: "40%" }}>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
        Search
      </button>
                    </section>
                    <p></p>
                </dialog>

                <div id="ShowCoordinatesDetails" style={{ backgroundColor: "white", position: "absolute", zIndex: "5", top: "97%", left: "89%" }}>


                </div>


            </div>
        );
    }
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
);