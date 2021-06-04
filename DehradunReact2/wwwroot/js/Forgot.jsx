class Forgotpass extends React.Component {
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
ReactDOM.render(
    <Forgotpass />,
    document.getElementById('content')
);