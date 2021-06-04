class HelloWorld extends React.Component {
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
                        {/*{/<p style={{ color: "red" }}>hello jkgfjgaduf</p>/}*/}

                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('content')
);