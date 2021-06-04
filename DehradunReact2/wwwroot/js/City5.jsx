const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
//class Ab extends React.Component {
//    render() {
//        return (
//            <div>
//                hello world
//                <Link class="nav-item nav-link" style={{ color: "black" }} to="/" id="abcd"> <i>city</i> </Link>
//            </div>
//        );
//    }
//}

class AboutNav extends React.Component {
    render() {
        return (
            <div>
                <nav className="hea">
                    <input type="checkbox" id="check" />
                    <label for="check" class="checkbtn">
                        <i class="fas fa-bars"></i>
                    </label>
                    <ul>
                        <li>
                            <Link to="/" style={{ color: "black" }}>HOME</Link>
                        </li>
                        <li>
                            <Link to="About" style={{ color: "black" }}>ABOUT DSCL</Link>
                        </li>
                        <li>
                            <Link to="Signin" style={{ color: "black" }}>SIGN IN</Link>
                        </li>
                        <li><Link to="Citygis" id="btn1" style={{ color: "white" }}>CITY GIS</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        function activateLasers(e) {
            alert("Clicked");
        }
        const h1 = "~/Content/img/h1.jpg";
        const h2 = "~/Content/img/h1.jpg";
        const h3 = "~/Content/img/h1.jpg";
        const sglLogo = "~/Content/img/dlogo.jpg";
        return (
            <div>
                {/*<header>*/}
                {/*    <nav className="navbar navbar-fixed-top " style={{ backgroundColor: "transparent", borderColor: "transparent", color: "white", float:"right" }}>*/}
                {/*        <div >*/}
                {/*            <div className="navbar-header">*/}
                {/*                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">*/}
                {/*                    <span className="sr-only">Toggle navigation</span>*/}
                {/*                    <span className="icon-bar"></span>*/}
                {/*                    <span className="icon-bar"></span>*/}
                {/*                    <span className="icon-bar"></span>*/}
                {/*                </button>*/}
                {/*                <div className="logo1 ">*/}
                {/*                </div>*/}
                {/*                */}{/*<img src={sglLogo} alt="" srcset="" style={{ height: "100px",width:"70px",borderRadius:"5%",marginTop:"3%"}} />*/}
                {/*                */}{/*<img src="images/dlogo.jpg" alt="error" height="100px" style="border-radius: 5%;margin-top: 3%;"></img>*/}
                {/*            </div>*/}
                {/*            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">*/}
                {/*                <ul className="nav navbar-nav navbar-right" >*/}

                {/*                    <li><Link to="/" className="active" style={{ color: "white" }}>HOME</Link></li>*/}
                {/*                    <li><Link to="About" style={{ color: "white" }}>ABOUT DSCL</Link></li>*/}
                {/*                    <li><Link to="Home/Signin" style={{ color: "white" }}>SIGN IN</Link></li>*/}
                {/*                    <li><Link to="Home/Citygis" id="btn1" style={{ color: "white" }}>City GIS</Link></li>*/}

                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </nav>*/}
                {/*</header>*/}


                <div className=" navbar-fixed-top" style={{ borderRadius: "0px", backgroundColor: "transparent", borderColor: "transparent", color: "white", textAlign: "right", float: "right", fontWeight: "500" }}>
                    <nav className="navbar navbar-expand-lg" style={{ borderRadius: "0px" }} style={{ borderRadius: "0px", backgroundColor: "transparent", borderColor: "transparent", color: "white", textAlign: "right", float: "right", fontWeight: "500" }}>
                        <button className="navbar-toggler" style={{ display: "none" }} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" ></span>
                        </button>
                        <div className="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup" style={{ borderRadius: "0px", marginLeft: "75%", fontWeight: "700", fontSize: "18px" }}>
                            <div className="navbar-nav">

                                <div id="NavForHome" className="navbar-nav" style={{ marginTop: "15px" }}>
                                    <Link class="nav-item nav-link " style={{ color: "white" }} to="/"><i style={{ color: "white" }} >HOME</i>  </Link>&ensp;
                                    <Link class="nav-item nav-link " style={{ color: "white" }} to="/SignIn"> <i style={{ color: "white" }} >SIGN IN</i> </Link>&ensp;
                                    <Link class="nav-item nav-link" style={{ color: "white" }} to="/About"> <i style={{ color: "white" }} >ABOUT</i> </Link>&ensp;
                                    <Link className="nav-item nav-link btn btn-success " to="/Citygis">CITY GIS</Link>
                                </div>
                            </div>
                        </div >
                    </nav >
                </div >

                <header className="mTop">

                    <div id="carousel-example-generic" className="carousel slide " data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="banner">
                                    {/*<img src="~/lib/bg10.PNG" />*/}
                                    <div className="bg1">
                                    </div>
                                </div>
                                <div className="carousel-caption" >
                                    <h2 className="animated bounceInRight" style={{ animationDelay: "1s" }}>Dehradun <span style={{ color: "red" }}>Smart City</span></h2>
                                    {/*<!-- <h3 class="animated bounceInLeft" style="animation-delay: 2s">Web Des3ign and Development Agency</h3>*/}
                                    {/*<p class="animated bounceInRight" style="animation-delay: 3s"><a href="#">Contact us</a></p> -->*/}
                                </div>

                            </div>

                            <div className="item">
                                {/*<img className="banner" src="~/lib/trans4.jpg" />*/}
                                <div className="bg2"></div>
                                <div className="carousel-caption" >
                                    <h2 className="animated slideInDown" style={{ animationDelay: "1s" }}>Dehradun <span>Smart City</span></h2>
                                    {/*<!-- <h3 class="animated fadeInUp" style="animation-delay: 2s">eye-catching tourist spot</h3> -->*/}
                                    <p className="animated zoomIn" style={{ animationDelay: "2s" }}>
                                        <Link className="nav-link text-dark" to="/Citygis">City Gis</Link>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </header>
            </div>
        );
    }
}

class About extends React.Component {
    render() {

        return (
            <div>
                <AboutNav />
                <div>
                    <br></br>
                    <h5 className="h5tag">ABOUT DEHRADUN SMART CITY</h5>
                    <div>
                        <img src="https://www.sgligis.com/wp-content/uploads/2018/02/01-Products-Overview.png" width="50%" height="80%" />
                    </div>

                    <br></br>

                    <div className="aboutcontent">
                        <br></br>
                        <p>
                            For the purpose of implementing the smart cities project, <span className="span1">Dehradun Smart
               City Limited (DSCL),</span>a Special Purpose Vehicle (SPV) for Dehradun Smart City Project
               has been incorporated, under the Indian Companies Act, 2013.<br></br><br></br>

               The <span className="span1">focus is on sustainable and inclusive development </span> and the idea is to look
               at compact areas, create a replicable model which will act like a light house to other aspiring
               cities.<br></br> <br></br>

               The <span className="span1">Dehradun Smart City Mission of the Government is a bold, new initiative.</span>
               It is meant to set examples that can be replicated both within and outside the Smart City, catalysing
               the creation of similar Smart Cities in various regions and parts of the country.<br></br><br></br>
                        </p>

                        <a href="#" className="a1">Read More</a>

                    </div>
                </div>
            </div>
        );
    }
}

class Signin extends React.Component {
    render() {
        return (
            <div>
                <AboutNav />
                <br></br>
                <p style={{ marginLeft: "7%" }}>ENTER YOUR CREDENTIALS BELOW</p>
                <h5 style={{ marginLeft: "7%" }} className="h5tag">LOGIN TO YOUR ACCOUNT</h5>
                <div style={{ marginTop: "4%" }}>
                    <div className="imgtag2" style={{ marginLeft: "7%" }}></div>
                </div>
                <div className="aboutcontent" style={{ marginTop: "4%" }}>
                    <form method="Post" action="/UserDatas/SignIn">
                        <h3 style={{ color: "#86bc42", textDecorationLine: "underline" }}><b>Member Login</b></h3><br></br>
                        <table>
                            <tr >
                                <td >
                                    <label style={{ fontSize: "15px" }}>User Name</label><br></br>
                                    <input type="text" name="uname" id="uname" placeholder="user name" style={{ width: "200%", padding: "2% 1%" }} required /><br></br><br></br>


                                </td>
                            </tr>
                            <tr >
                                <td >
                                    <label style={{ fontSize: "15px" }}>Password</label><br></br>
                                    <input type="password" name="pass" id="pass" placeholder="password" style={{ width: "200%", padding: "2% 1%" }} required /><br></br><br></br>
                                    <input type="submit" value="SIGN IN" style={{ color: "white", backgroundColor: "#86bc42", textDecoration: "none", padding: "3% 30%", fontWeight: "bold", marginLeft: "0%", borderRadius: "50px" }} /><br></br><br></br>
                                    <span><Link to="Forgot" style={{ color: "grey", fontSize: "15px" }}>Forgot Password ?</Link> </span><br></br><br></br>
                                    {/*<input type="button" value="SIGN UP"*/}{/* style={{ color: "white", backgroundColor: "black", textDecoration: "none", padding: "3% 65%", fontWeight: "bold", marginLeft: "0%", borderRadius: "50px" }}*/}{/* />*/}
                                    <Link to="Signup" style={{ color: "white", backgroundColor: "black", textDecoration: "none", padding: "6% 30%", fontWeight: "bold", marginLeft: "0%", borderRadius: "50px" }}>SIGN UP</Link> <br></br><br></br><br></br>
                                    <Link to="admin" style={{ color: "white", backgroundColor: "black", textDecoration: "none", padding: "6% 15%", fontWeight: "bold", marginLeft: "0%", borderRadius: "50px" }}>ADMIN SIGN IN</Link>
                                </td>
                            </tr>
                        </table>
                    </form>

                </div>
            </div>
        );
    }
}

class Signup extends React.Component {
    render() {
        return (
            <div>
                <AboutNav />
                <div style={{ zIndex: "1", overflowy: "scroll", width: "100%" }}>
                    <div id="backcont" style={{ zIndex: "1" }}><br></br>
                        <p style={{ marginLeft: "5%" }}>ALL FIELDS ARE REQUIRED</p>
                        <figcaption id="figcap1"
                            style={{ color: "#434a54", fontFamily: "Arial", marginLeft: "5%", fontSize: "x-large", fontWeight: "bold" }}>CREATE YOUR
                            ACCOUNT
        </figcaption>
                        <br /><br />
                        <div style={{ width: "100%", float: "left", marginLeft: "5%" }}>
                            <span
                                style={{ color: "#86bc42", fontSize: "x-large", fontWeight: "bold", textDecoration: "underline" }}>
                                Register</span><br /><br />
                            <form method="POST" action="/UserDatas/Create">
                                <div id="tablebeforereponsive">

                                    <table style={{ width: "100%", boxSizing: "border-box" }}>
                                        <tr>
                                            <td>
                                                <label style={{ marginLeft: "0%", color: "black" }}>First Name <sup>
                                                    <i class="fa fa-asterisk" aria-hidden="true"
                                                        style={{ fontSize: "xx-small", color: "red" }}></i></sup></label><br /><i
                                                            class="fa fa-user" aria-hidden="true"></i>
                                                <input type="text" placeholder="First Name" name="fname" id="fname"
                                                    style={{ width: "80%", padding: "1%", color: "black" }} required />
                                            </td>
                                            <td>

                                                <label style={{ marginLeft: "0%", color: "black" }}>Last Name <sup><i class="fa fa-asterisk" aria-hidden="true"
                                                    style={{ fontSize: "xx-small", color: "red" }}></i></sup></label><br /> <i
                                                        class="fa fa-user" aria-hidden="true"></i> <input type="text" placeholder="Last Name" name="lname" id="lname"
                                                            style={{ width: "80%", padding: "1%" }} required /></td>
                                        </tr>
                                    </table>
                                    <br />
                                    <table style={{ width: "100%", boxSizing: "border-box" }}>
                                        <tr>
                                            <td>
                                                <label style={{ marginLeft: "0%", color: "black" }}>User Name <sup><i class="fa fa-asterisk" aria-hidden="true"
                                                    style={{ fontSize: "xx-small", color: "red" }}></i></sup></label><br /><i
                                                        class="fa fa-user" aria-hidden="true"></i> <input type="text" placeholder="User Name" name="uname" id="uname"
                                                            style={{ width: "80%", padding: "1%", color: "#5f69c5" }} required />
                                            </td>

                                            <td><label style={{ marginLeft: "0%", color: "black" }}>Mobile No. <sup><i class="fa fa-asterisk" aria-hidden="true"
                                                style={{ fontSize: "xx-small", color: "red" }}></i></sup></label><br /> <i
                                                    class="fa fa-phone" aria-hidden="true"></i> <input type="number" placeholder="Mobile No." name="mno" id="mno"
                                                        style={{ width: "80%", padding: "1%", }} required /></td>
                                        </tr>
                                    </table>
                                    <br />
                                    <table style={{ width: "100%", boxSizing: "border-box" }}>
                                        <tr>
                                            <td><label style={{ marginLeft: "0%", color: "black" }}>Email <sup><i class="fa fa-asterisk" aria-hidden="true"
                                                style={{ fontSize: "xx-small", color: "red" }}></i></sup></label><br /><i
                                                    class="fa fa-envelope" aria-hidden="true"></i> <input type="email" name="email" id="email"
                                                        placeholder="Email Address" style={{ width: "80%", padding: "1%" }} required /></td>
                                            <td><label style={{ width: "80%", padding: "1%", color: "black" }}>Password <sup><i class="fa fa-asterisk" aria-hidden="true"
                                                style={{ fontSize: "xx-small", color: "red" }}></i></sup></label><br /> <i
                                                    class="fa fa-phone" aria-hidden="true"></i> <input type="Password" placeholder="Password" name="pass" id="pass"
                                                        style={{ width: "80%", padding: "1%" }} required /></td>
                                        </tr>
                                    </table>

                                    <br />



                                    <table style={{ width: "100%", boxSizing: "border-box" }}>
                                        <tr>
                                            <td><input type="submit" value="SIGN UP" style={{ color: "white", backgroundColor: "#86bc42", borderRadius: "100px", textDecoration: "none", padding: "2% 4%", fontWeight: "bold", marginLeft: "0%" }} />
                                                <i class="fa fa-arrow-right" aria-hidden="true"></i></td>
                                            <td><span style={{ float: "right", marginRight: "45%" }}>Already Registered ?<Link to="Signin" style={{ color: "#86bc42" }}>SIGN IN</Link> </span></td>
                                        </tr>

                                    </table>

                                    <br></br>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>


        );
    }
}

class Forgotpass extends React.Component {
    render() {
        return (
            <div>
                <AboutNav />
                <div style={{ marginTop: "4%" }}>
                    {/* <image src="https://www.sgligis.com/wp-content/uploads/2018/02/01-Products-Overview.png" width="50%" height="100%"></image>*/}
                    {/* <img src="https://www.sgligis.com/wp-content/uploads/2018/02/01-Products-Overview.png" width="30%" height="30%" />*/}
                </div>
                {/* <img src={sgl} alt="aboutpic" width="50%" height="100%" />*/}
                <div className="imgtag2" style={{ marginLeft: "7%" }}></div>

                <div className="aboutcontent" style={{ marginTop: "7%" }}>
                    <form action="/UserDatas/Send" method="POST">
                        <h3 style={{ color: "#86bc42", textDecorationLine: "underline" }}><b>Forgot Username / Password</b></h3><br></br>
                        <table>
                            <tr >
                                <td >
                                    <label>Email</label><br></br>
                                    <input type="email" name="email" id="email" placeholder="Email Address" style={{ width: "200%" }} required /><br></br><br></br>
                                    <input type="submit" value="Submit" style={{ color: "white", backgroundColor: "#86bc42", textDecoration: "none", padding: "3% 6%", fontWeight: "bold", marginLeft: "0%", borderRadius: "50px" }} />

                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}

class Admin extends React.Component {
    render() {
        return (
            <div>
                <AboutNav />
                <br></br>
                <p style={{ marginLeft: "7%" }}>ENTER YOUR CREDENTIALS BELOW</p>
                <h5 style={{ marginLeft: "7%" }} className="h5tag">LOGIN TO YOUR ACCOUNT</h5>
                <div style={{ marginTop: "4%" }}>
                    <div className="imgtag2" style={{ marginLeft: "7%" }}></div>
                </div>
                <div className="aboutcontent" style={{ marginTop: "4%" }}>
                    <form method="Post" action="/AdminLogins/SignIn">
                        <h3 style={{ color: "#86bc42", textDecorationLine: "underline" }}><b>Admin Login</b></h3><br></br>
                        <table>
                            <tr>
                                <td>
                                    <label style={{ fontSize: "15px" }}>Admin Role</label><br></br>  <i className="fa fa-user" aria-hidden="true"></i>
                                    <select className="txtBox" name="role" id="role" style={{ width: "200%", padding: "2% 1%" }}>
                                        <option value="select">--Select Role--</option>
                                        <option value="admin">Admin</option>
                                        <option value="hospital">Hospital</option>
                                        <option value="firestation">Firestation</option>
                                        <option value="forest">Forest</option>
                                    </select>
                                    <br></br><br></br>

                                </td>
                            </tr>
                            <tr >

                                <td >
                                    <label style={{ fontSize: "15px" }}>User Name</label><br></br>
                                    <input type="text" name="aname" id="aname" placeholder="user name" style={{ width: "200%", padding: "2% 1%" }} required /><br></br><br></br>
                                </td>
                            </tr>
                            <tr >
                                <td >
                                    <label style={{ fontSize: "15px" }}>Password</label><br></br>
                                    <input type="password" name="pass" id="pass" placeholder="password" style={{ width: "200%", padding: "2% 1%" }} required /><br></br><br></br>
                                    <input type="submit" value="SIGN IN" style={{ color: "white", backgroundColor: "#86bc42", textDecoration: "none", padding: "3% 30%", fontWeight: "bold", marginLeft: "0%", borderRadius: "50px" }} /><br></br><br></br>
                                    {/*<span><a href="Forgot" style={{ color: "grey", fontSize: "15px" }}>Forgot Password ?</a> </span><br></br><br></br>*/}

                                    {/*<a href="Signup" style={{ color: "white", backgroundColor: "black", textDecoration: "none", padding: "6% 30%", fontWeight: "bold", marginLeft: "0%", borderRadius: "50px" }}>SIGN UP</a>*/}
                                </td>
                            </tr>
                        </table>
                    </form>

                </div>
            </div>
        );
    }
}

class City extends React.Component {
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
            <div className="example" id="b">
                {/*<input type="button" onClick={opn} value="Click" />*/}
                {/*  <Link to="/ab" style={{ color: "black" }}>About</Link>*/}


                <nav id="main1"> {/*mbot*/}
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <i className="fa fa-bars"></i>
                    </label>
                    <label className="logo">Dehradun</label>
                    {/*<!-- <i class="fas fa-virus"></i>&ensp; -->*/}
                    <ul >
                        <li ><a id="imgNav" style={{ cursor: "pointer", fontSize: "16px", color: "white" }}><i className="fas fa-globe-asia"></i>&nbsp;Image</a></li>
                        <li><a id="bookmamrkNav" style={{ cursor: "pointer", fontSize: "16px", color: "white" }}><i className="fas fa-bookmark"></i>&nbsp;Bookmark</a></li>
                        <li><a id="cNav" style={{ cursor: "pointer", fontSize: "16px", color: "white" }}><i className="fas fa-map-marked-alt" ></i>&nbsp;Coordinates</a></li>
                        <li><a id="identifyNav" style={{ cursor: "pointer", fontSize: "16px", color: "white" }}><i className="fas fa-map-marked-alt" ></i>&nbsp;Identify</a></li>
                        {/*<li><a id="preDefNav" style={{ cursor: "pointer", fontSize: "16px", color: "white" }} ><i className="fas fa-question-circle"></i>&nbsp;Query</a></li>*/}
                        {/*<li><a id="AdvanceSearch" style={{ cursor: "pointer", fontSize: "16px", color: "white"}} ><i className="fas fa-chart-area"></i>&nbsp;AdSearch</a></li>*/}
                        <li><a id="logoutNav" style={{ cursor: "pointer", fontSize: "16px", color: "white" }} ><i className="fas fa-sign-out-alt"></i>&nbsp;Logout</a></li>

                    </ul>
                </nav>
                <div id="iframeHolder">

                </div>
                <a id="blinkLayer" style={{ display: "none" }} >Logout</a>
                <div id="preDefNav"></div>
                <div id="AdvanceSearch"></div>

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

                <div id="popup" className="ol-popup" style={{ display: "none" }}>
                    <a href="#" id="popup-closer" className="ol-popup-closer"></a>
                    <div id="popup-content"></div>
                </div>



                <dialog id="dialog1" style={{ top: "35%", left: "30%", padding: "0", width: "500px", height: "305px", zIndex: "7" }}>
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

                {/*<div id="popup" class="ol-popup" style={{ display: "none" }}>*/}
                {/*    <a href="#" id="popup-closer" class="ol-popup-closer"></a>*/}
                {/*    <div id="popup-content"></div>*/}
                {/*</div>*/}




                <dialog id="dialog2" style={{ top: "35%", left: "30%", padding: "8px", width: "350px", height: "200px", zIndex: "7", border: "black", borderRadius: "10px" }}>
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


                <dialog style={{ top: "15%", height: "390px", left: "30%", padding: "0", width: "500px", zIndex: "7" }} id="pieChartDialog">
                    <header style={{ backgroundColor: "#556080", color: "white", padding: "3px" }}>
                        <label style={{ fontWeight: "500", marginBottom: "0px" }}>PieChart</label>
                        <button id="closePie" onclick="pieDialogClose()" style={{ marginLeft: "75%", backgroundColor: "#f44336", color: "white" }}><i className="fa fa-times"></i></button>
                    </header>
                    <section style={{ padding: "5px" }}>
                        <div id="piechart" style={{ width: "100%", height: "300px" }}>

                        </div>
                    </section>
                </dialog>

                <dialog style={{ top: "30%", left: "30%", padding: "0", width: "500px", height: "300px", zIndex: "7" }} id="forbookmark">
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

                <dialog id="myFirstDialog" style={{ top: "30%", left: "32%", height: "300px", padding: "0", width: "500px", zIndex: "7" }}>
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

const App = () => (
    <ReactRouterDOM.HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/Signin" component={Signin} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Forgot" component={Forgotpass} />
        <Route path="/About" component={About} />
        <Route path="/Citygis" component={City} />
        <Route path="/admin" component={Admin} />
        {/*<Route path="/Gal" component={Gal} />*/}
    </ReactRouterDOM.HashRouter >
)

ReactDOM.render(
    <App />,
    document.getElementById('content')
);


//ReactDOM.render(
//    <Home />,
//    document.getElementById('content')
//);