<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Abel Maniquis</title>
    <link rel="stylesheet" href="styles.css"/>
    <link href='https://fonts.googleapis.com/css?family=Oswald:300|Abel' rel='stylesheet' type='text/css'>
</head>
<body>
    
<div id="wrapper">
	<div id="header-wrapper">
		<div id="header" class="container">
			<div id="logo">
				<h1>Abel Maniquis</h1>
			</div>
			<div id="menu">
				<ul>
				<!--<li class="current_page_item"><a href="#"></a></li>-->
					<li><a href ="#">Homepage</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Resume</a></li>
					<li><a href="#">Portfolio</a></li>
					<li><a href="#">Misc</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>
    
<!--Projects-->
<h1>Portfolio</h1>
    <ul>
    <li id="profile">
        <h1>Profile</h1>
        <p class = "Description">
            A simple HTML Personal Page.
        </p>
        <img src="images/personal_profile.png"></img>
    </li>
    
   <li id="nyt_hack">
        <h1>New York Times "Hack"</h1>
        <p class = "Description">
            Using Chrome development tools in order to edit the New York Times.
        </p>
        <img src="images/newyorktimeshack.png"></img>
    </li>

    <li id="landing_page_clone">
        <h1> <a href="http://abelmaniquis.github.io/Landing-Page/">Landing Page Clone</a></h1>
        <p class="Description">
            A clone of the Karma app's front page
        </p>
        <img src="images/karma_landing_page.png"></img>
    </li>
    
    <li id="streetfighter_project">
        <h1>Streetfighter Demo</h1>
        <p class="Description">
            An animation created using jQuery.
        </p>
        <img src="images/sf_screenshot.png"></img>
    </li>
    
    <li id="shopping-list app">
        
    </li>
    
    <li id="youtube-search">
        <h1>Youtube Search App</h1>
    </li>
    
    <li id="google-foursquare-API">
        <h1>API Hack</h1>
    </li>
    
</ul>
    
</body> 




----------------------------------------
ORIGINAL CSS:

body{
    display:block;
    margin:0;
    padding:0;
    background:#050505;
    font-family: 'Abel', sans-serif;
    font-size: 0.95em;
    color:#5b5b5b;
}

h1,h2,h3{
    margin:0;
    padding:0;
    text-transform:uppercase;
    font-weight:normal;
    font-family: 'Abel', sans-serif;
    font-weight:200;
    color:black;
}


.section-title{
    margin-left:auto;
    margin-right:auto;
    text-align:center;
    font-size:4.2em;
    color:white;
}

#project-row{
margin:0;
padding:0;
}

#project-row li{
    display:inline-block;
}


.project-row{
    margin-left:auto;
    margin-right:auto;
    border-spacing:1.3em;
}

img{
    cursor:pointer;
    border: solid black 1px;
    border-radius:none;
    display:block;
    margin-left:auto;
    margin-right:auto;
    width:390px;
    height:340px;
}

h1{
    width:20em;
    height:1.5em;
    font-size:2em;
}

h2{
    font-size:2.8em;
}

ul{
    list-style:none;
}
p,ul,ol{
    margin-top:0;
    line-height:180%;
}

div{
    display:block;
}

#projects{
    background-color:white;
}

p{
    text-index:50px
}

#logo{
    float:left;
    width:300px;
    margin:0;
    padding:0;
    
}

#logo h1{
    line-height: 120px;
    letter-spacing: -2px;
    font-size:3.8em;
}

#menu{
    text-align:right;
    display:inline-block;
    width:700px;
    height:90px;
    margin: 0 auto;
    padding: 0;
}

#menu ul{
    float:right;
    padding:20px 0px 0px 0px;
}
#menu ul li{
    display:inline-block;
}

#menu a{
    display:block;
    line-height:100px;
    margin-right: 1px;
    padding: 0px 20px 0px 20px;
    text-decoration: none;
    text-align: left;
    text-shadow:1px 1px 0px rgba(0,0,0,.2);
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #1f1f1f;
    border:none;
}

#menu a:hover, #menu .current_page_item a {
	background: black repeat;
	text-decoration: none;
	color: #FFFFFF;
}


.post .title a{
    border:none;
    text-decoration:none;
    color:#222222;
}

.post{
    overflow:hidden;
    margin-bottom:40px;
    border-bottom:1px solid;
}

#page{
    width:1000px;
    margin:0 auto;
    padding:30px 0px;
    
}

#header{
    width: 1000px;
    height:150px;
    margin:0 auto;
    padding: 0px 0px;
}

.container{
    width:1000px;
    margin: 0 auto;
}


#header-wrapper{
    overflow:hidden;
}

#wrapper{
    background:#ffffff;
}

#contact-info{
    color:white;
    font-size:20px;
}

#contact-info li{
    display:inline-block;
    margin-left:20px;
}

