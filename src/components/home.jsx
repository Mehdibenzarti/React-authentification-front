import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import background from "../img/background.jpg";
import Navbar from "./navbar";

function Home() {
  return (
    <Wrapper>
      <header>
        <Navbar />
      </header>
    </Wrapper>
  );
}

export default withRouter(Home);

const Wrapper = styled.div`

.logo {
width: 60px;
padding: 10px;
margin: 0 auto;
display: inline-block;
vertical-align: middle;
}
h4{
  width: 50px;
padding: 10px;
margin: 0 auto;
display: inline-block;
vertical-align: middle;
font-family: 'Poppins',sans-serif

}
*{
  box-sizing: border-box;
}
body {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-top: 80px;
  height: 1900px;
  /* cursor:pointer; */
}
height: 100%;
  width:100%;
  background-image :url(${background});
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  /* cursor:pointer; */
}

@supports (position: sticky) {
  body {
    padding-top: 0;
  }

  header {
    position: sticky;
  }

}

.navbar-fixed {
  position: fixed;
  top: -3em;
}
nav {
  width: 100%;
  color: black;
  background: #c3bfbf33;
  font-weight: bold;
  letter-spacing: 0.025em;
}

nav ul {
  text-align: center;
margin: 0;
font-size: 15px;
height: 100%;
display: inline-block;
vertical-align: middle;
float: right;
padding: 8px;

}
}

nav ul li {
  display: inline-block;
  padding: 0 3em;
  line-height: 3em;
  font-family: 'Poppins',sans-serif
}

nav ul li:hover {
  background: #D3D3D3	;
}

body {
  background: #0B6AD4;

.filler {
  box-sizing: border-box;
background: whitesmoke;

}

.two {
  height: 3000px;
}
.navbar-fixed {
  position: fixed;
  top: -3em;
}

/*----------------------
  $NAVBAR
    basic navbar styling
  ----------------------*/
nav {
  width: 100%;
  color: #bbb;
  background: #2e2e2e;
  font-weight: bold;
  letter-spacing: 0.025em;
}

nav ul {
  text-align: center;
  margin: 0;
}

nav ul li {
  display: inline-block;
  padding: 0 3em;
  line-height: 3em;
  font-family: 'Poppins',sans-serif
}

nav ul li:hover {
  background: #00939C;
  font-family: 'Poppins',sans-serif
}

body {
  background: #0B6AD4;
  font-family: 'Poppins',sans-serif
}


.filler {
  width: 1px;
  height: 200px;
}

.two {
  height: 3000px;
}
`;
