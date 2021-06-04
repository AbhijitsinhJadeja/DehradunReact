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

class Signin extends React.Component {
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
                            <a href="/" style={{ color: "black" }}>HOME</a>
                        </li>
                        <li>
                            <a href="About" className="active" style={{ color: "black" }}>ABOUT DSCL</a>
                        </li>
                        <li>
                            <a href="Signin" style={{ color: "black" }}>SIGN IN</a>
                        </li>
                        <li><a href="Citygis" id="btn1" style={{ color: "white" }}>City GIS</a></li>
                    </ul>
                </nav>
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
                                    <span><a href="Forgot" style={{ color: "grey", fontSize: "15px" }}>Forgot Password ?</a> </span><br></br><br></br>
                                    {/*<input type="button" value="SIGN UP"*/}{/* style={{ color: "white", backgroundColor: "black", textDecoration: "none", padding: "3% 65%", fontWeight: "bold", marginLeft: "0%", borderRadius: "50px" }}*/}{/* />*/}
                                    <a href="Signup" style={{ color: "white", backgroundColor: "black", textDecoration: "none", padding: "6% 30%", fontWeight: "bold", marginLeft: "0%", borderRadius: "50px" }}>SIGN UP</a>
                                </td>
                            </tr>
                        </table>
                    </form>

                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <Signin />,
    document.getElementById('content')
);