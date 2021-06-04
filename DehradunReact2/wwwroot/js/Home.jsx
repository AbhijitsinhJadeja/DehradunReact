/*/// /*<reference path="a.js" />*/
/// //<reference path="a.js" />
//class HelloWorld extends React.Component {
//    render() {
//        return (<div>
//            <h1>Hello World  !</h1>
//        </div>);
//    }
//}
//ReactDOM.render(
//    <HelloWorld />,
//    document.getElementById('content')
//); 

class HelloWorld extends React.Component {
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

                {/*<nav className="hea mBtom">*/}
                {/*<input type="checkbox" id="check" />*/}
                {/*    <label for="check" class="checkbtn">*/}
                {/*        <i class="fas fa-bars"></i>*/}
                {/*</label>*/}
                {/*<ul>*/}
                {/*    <li>*/}
                {/*        <a href="/">HOME</a>*/}
                {/*    </li>*/}
                {/*        <li>*/}
                {/*            <a href="Home/Ab">ABOUT DSCL</a>*/}
                {/*        </li>*/}
                {/*        <li> <a href="Home/Signin">Sign In</a>*/}
                {/*        </li>*/}
                {/*        <li> <a id="btn1" href="Home/Citygis">City Gis</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}


                <header>
                    <nav className="navbar navbar-default navbar-fixed-top navbar-inverse" style={{ backgroundColor: "transparent", borderColor: "transparent", color: "white" }}>
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="logo1 ">
                                </div>
                                {/*<img src={sglLogo} alt="" srcset="" style={{ height: "100px",width:"70px",borderRadius:"5%",marginTop:"3%"}} />*/}
                                {/*<img src="images/dlogo.jpg" alt="error" height="100px" style="border-radius: 5%;margin-top: 3%;"></img>*/}
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right" >

                                    <li><a href="/" className="active" style={{ color: "white" }}>HOME</a></li>
                                    <li><a href="Home/About" style={{ color: "white" }}>ABOUT DSCL</a></li>
                                    <li><a href="Home/Signin" style={{ color: "white" }}>SIGN IN</a></li>
                                    <li><a href="Home/Citygis" id="btn1" style={{ color: "white" }}>City GIS</a></li>
                                    {/*  <!-- <li><a href="http://localhost:3000/#/center/78.0322,30.3165">CITY</a></li> -->*/}
                                    {/*`````````` <button id="btn" onclick="navigateCity()" >CITY GIS</button>*/}

                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

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
                                <div className="carousel-caption">
                                    <h2 className="animated bounceInRight" style={{ animationDelay: "1s" }}>Dehradun <span style={{ color: "red" }}>Smart City</span></h2>
                                    {/*<!-- <h3 class="animated bounceInLeft" style="animation-delay: 2s">Web Des3ign and Development Agency</h3>*/}
                                    {/*<p class="animated bounceInRight" style="animation-delay: 3s"><a href="#">Contact us</a></p> -->*/}
                                </div>

                            </div>

                            <div className="item">
                                {/*<img className="banner" src="~/lib/trans4.jpg" />*/}
                                <div className="bg2"></div>
                                <div className="carousel-caption">
                                    <h2 className="animated slideInDown" style={{ animationDelay: "1s" }}>Dehradun <span>Smart City</span></h2>
                                    {/*<!-- <h3 class="animated fadeInUp" style="animation-delay: 2s">eye-catching tourist spot</h3> -->*/}
                                    <p className="animated zoomIn" style={{ animationDelay: "2s" }}>
                                        <a className="nav-link text-dark" href="Home/Citygis">City Gis</a>
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
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
);