class Signup extends React.Component {
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
                            <a href="About" className="active" style={{ color: "black" }}>About DSCL</a>
                        </li>
                        <li>
                            <a href="Signin" style={{ color: "black" }}>Sign In</a>
                        </li>
                        <li><a href="Citygis" id="btn1" style={{ color: "white" }}>City GIS</a></li>
                    </ul>
                </nav>
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
                            <form method="POST" asp-action="/UserDatas/Create">
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
                                            <td><span style={{ float: "right", marginRight: "45%" }}>Already Registered ?<a href="Signin" style={{ color: "#86bc42" }}>SIGN IN</a> </span></td>
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
ReactDOM.render(
    <Signup />,
    document.getElementById('content')
);