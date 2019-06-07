/*
For this piece of the test, you will have a several CSS and ReactJS questions.

ReactJS
  1. Fill in your name and the date in the "By" line. 
  2. Add a Function to be called when the Random Number is clicked to change the Number Header State
  3. The random number needs to be between 0 and 100 and showing no decimals 
  4. Add to the log text area saying "Random Number to " and then the new number generated on a new line.  
  5. Add a Function to be called when the Increment Number is clicked to change the Number Header State
  6. If the number will be above 100 (an increment from 100 to 101) display an error stating that the maximum numver is 100 
  7. Add to the log text area saying "Incremented Number to " and then the new number generated on a new line.  
  8. Add a text area for the log state that is 10 rows in height and 100 in width. 
  9. Make sure when each button is click, they are visible in the log and each is on a different line. Wording for this is in #4 and #7.

CSS
  For the CSS portion, getting the basics is the most important which will be listed below, however if you consider yourself a web designer and want to do more than the list, please do. 

  1. Style the buttons to any extent you want to
  2. Add an image to the background that still allows you to read everything. 
  3. If the number is greater than or equal to 50, then the number header needs to be a red. If the number is below 50, then the number header needs to be a blue. 
*/


import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      numberHeader: 0,
      log: ["Started Log at 0"],
      color: "",
    };
  }


// Add a Function to be called when the Random Number is clicked to change the Number Header State
// The random number needs to be between 0 and 100 and showing no decimals 
// Add to the log text area saying "Random Number to " and then the new number generated on a new line.  
numberCheck = (number) => {
  if(number < 50){
    this.setState({color: "red"})
  }
  else if (number >= 50 && number <=100) {
    this.setState({color: "blue"})

  }
}

randomClicked = () => {
  
  console.log("I am in randomClicked function");

  var randomNumber = Math.floor((Math.random() * 100) + 1);

  this.state.log.push("\nRandom Number to " + randomNumber)
  this.numberCheck(randomNumber)
  if(randomNumber > 100) {
    alert('The Maximum Number is 100!')
       this.setState({numberHeader: 0})

  } 
  else {
    this.setState({
      numberHeader: randomNumber
  });
  }
}
// Add a Function to be called when the Increment Number is clicked to change the Number Header State
// If the number will be above 100 (an increment from 100 to 101) display an error stating that the maximum number is 100 
// Add to the log text area saying "Incremented Number to " and then the new number generated on a new line.  

incrementClicked = () => {
  
  console.log("I am in randomClicked function");

  var incrementedNumber = this.state.numberHeader + 1;

  this.state.log.push("\nIncremented Number to " + incrementedNumber)
  this.numberCheck(incrementedNumber)

  if(incrementedNumber > 100) {
    alert('The Maximum Number is 100!')
       this.setState({numberHeader: 0})

  } 
  else {
    this.setState({
      numberHeader: incrementedNumber
  });
  }
}


// If the number is greater than or equal to 50, then the number header needs to be a red. If the number is below 50, then the number header needs to be a blue. 

  render() {
    return (
<div className="App">        
            <div class="header-wrapper" >
    
            <header id="header">
          <div class="section-boxed section-header">
                <div id="logo-container">
                    <a href="https://www.worldshipping.com/"><img src="https://www.worldshipping.com/wp-content/uploads/2019/03/World-Shipping-Full-Color-Logo-CMYK-300dpi-e1552315515897.png" alt="World Shipping, Inc." /></a>
          </div>	
    
          
          <div class="mobile-nav">
            <span class="mob-nav-btn">Menu</span>
          </div>
           <nav class="navigation-container">
            <div id="menu" class="nav-menu">
            <ul id="menu-navigation" class="menu-ul"><li id="menu-item-2397" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-53 current_page_item menu-item-2397"><a href="https://www.worldshipping.com/">Home</a></li>
    <li id="menu-item-35" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-35"><a href="https://www.worldshipping.com/about/">About</a>
    <ul class="sub-menu">
      <li id="menu-item-2339" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2339"><a href="https://www.worldshipping.com/about/">The World Group</a></li>
      <li id="menu-item-2202" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2202"><a href="https://www.worldshipping.com/portfolio/vessel-agency-operations/">Vessel Operations</a></li>
      <li id="menu-item-2731" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2731"><a href="https://www.worldshipping.com/portfolio/cruise-ship-agent/">Cruise Ship Agency</a></li>
      <li id="menu-item-2193" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2193"><a href="https://www.worldshipping.com/accolades-articles/">Accolades &#038; Articles</a></li>
      <li id="menu-item-2192" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2192"><a href="https://www.worldshipping.com/press-releases/">Press Releases</a></li>
    </ul>
    </li>
    <li id="menu-item-43" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children mega-menu-item menu-item-43"><a href="https://www.worldshipping.com/services/">Services</a>
    <ul class="sub-menu">
      <li id="menu-item-2076" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2076"><a href="https://www.worldshipping.com/portfolio/vessel-agency-operations/">Vessel Operations</a></li>
      <li id="menu-item-2067" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2067"><a href="https://www.worldshipping.com/portfolio/air-freight/">Air Freight</a></li>
      <li id="menu-item-2068" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2068"><a href="https://www.worldshipping.com/portfolio/rail-freight/">Rail Freight</a></li>
      <li id="menu-item-2070" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2070"><a href="https://www.worldshipping.com/portfolio/project-cargo/">Project Cargo</a></li>
      <li id="menu-item-2730" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2730"><a href="https://www.worldshipping.com/portfolio/cruise-ship-agent/">Cruise Ship Agents</a></li>
      <li id="menu-item-2066" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2066"><a href="https://www.worldshipping.com/portfolio/ocean-freight/">Ocean Freight</a></li>
      <li id="menu-item-2073" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2073"><a href="https://www.worldshipping.com/portfolio/container-trucking/">Container Trucking</a></li>
      <li id="menu-item-2351" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2351"><a href="https://www.worldshipping.com/portfolio/grain-forwarding/">Grain Forwarding</a></li>
      <li id="menu-item-2075" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2075"><a href="https://www.worldshipping.com/portfolio/bulk-liquid-logistics/">Bulk Liquid Logistics</a></li>
      <li id="menu-item-2064" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2064"><a href="https://www.worldshipping.com/portfolio/freight-forwarding/">Freight Forwarding</a></li>
      <li id="menu-item-2071" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2071"><a href="https://www.worldshipping.com/portfolio/cross-dock-operations/">Cross-Dock Operations</a></li>
      <li id="menu-item-2072" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2072"><a href="https://www.worldshipping.com/portfolio/transloading/">Transloading</a></li>
      <li id="menu-item-2354" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2354"><a href="https://www.worldshipping.com/portfolio/dry-bulk-logistics/">Dry Bulk Logistics</a></li>
      <li id="menu-item-2065" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2065"><a href="https://www.worldshipping.com/portfolio/customs-house-brokerage/">Customs House Brokerage</a></li>
      <li id="menu-item-2074" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2074"><a href="https://www.worldshipping.com/portfolio/warehousing-distribution/">Warehousing &#038; Distribution</a></li>
      <li id="menu-item-2069" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-2069"><a href="https://www.worldshipping.com/portfolio/break-bulk/">Break Bulk Logistics</a></li>
    </ul>
    </li>
    <li id="menu-item-38" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-38"><a href="https://www.worldshipping.com/companies/">Companies</a>
    <ul class="sub-menu">
      <li id="menu-item-50" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-50"><a href="https://www.worldshipping.com/portfolio/world-shipping-inc/">World Shipping, Inc.</a></li>
      <li id="menu-item-45" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-45"><a href="https://www.worldshipping.com/portfolio/containerport-group/">ContainerPort Group</a></li>
      <li id="menu-item-48" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-48"><a href="https://www.worldshipping.com/portfolio/uwl/">UWL</a></li>
      <li id="menu-item-49" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-49"><a href="https://www.worldshipping.com/portfolio/world-distribution-services/">World Distribution Services</a></li>
      <li id="menu-item-47" class="menu-item menu-item-type-post_type menu-item-object-portfolio menu-item-47"><a href="https://www.worldshipping.com/portfolio/tankbag/">TankBag</a></li>
    </ul>
    </li>
    <li id="menu-item-40" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-40"><a href="https://www.worldshipping.com/innovation/">Innovation</a></li>
    <li id="menu-item-36" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36"><a href="https://www.worldshipping.com/blog/">Blog</a></li>
    <li id="menu-item-2567" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2567"><a href="https://recruiting.ultipro.com/WOR1017/JobBoard/258f2717-583b-e122-22b3-192fc0807b2d" onclick="__gaTracker('send', 'event', 'outbound-widget', 'https://recruiting.ultipro.com/WOR1017/JobBoard/258f2717-583b-e122-22b3-192fc0807b2d', 'Careers');">Careers</a></li>
    <li id="menu-item-39" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-39"><a href="https://www.worldshipping.com/contact/">Contact</a></li>
    </ul>				</div>
            
            <div class="header-buttons">
            <div class="pex-woo-cart-btn-wrap"><div class="pex-woo-cart-btn"><div class="pex-woo-cart-num" data-num="0">0</div></div><div class="pex-woo-cart-holder"><div class="pex-woo-cart">
    
    <ul class="cart_list product_list_widget ">
    
      
        <li class="empty">No products in the cart.</li>
    
      
    </ul>
    
    
    </div></div></div><div class="header-search">
                <div class="search-wrapper">
      <form role="search" method="get" class="searchform" action="https://www.worldshipping.com" >
        <input type="text" name="s" class="search-input placeholder"  placeholder="Search" />
        <input type="submit" value="" class="search-button"/>
      </form>
    </div>
              <a href="#" class="header-search-btn">Search</a></div>
              <div class="social-profiles"><ul class="social-icons">
        <li>
        <a href="https://www.linkedin.com/company/9426555/" target="_blank"  title="LinkedIn">
          <div>
            <img src="https://www.worldshipping.com/wp-content/themes/thestory/images/icons_white/linkedin.png" alt="" />
          </div>
        </a>
      </li>
        <li>
        <a href="https://plus.google.com/114716131978771157436" target="_blank"  title="Google+">
          <div>
            <img src="https://www.worldshipping.com/wp-content/themes/thestory/images/icons_white/googleplus.png" alt="" />
          </div>
        </a>
      </li>
        </ul></div>
              </div>
          </nav>
    
            
          <div class="clear"></div>       
          <div id="navigation-line"></div>
        </div>
        </header>
    
    </div>
    
          <h1 
          style={{color: this.state.color}}>{this.state.numberHeader}</h1>
        
          <button onClick={this.randomClicked}> Random Number</button> &nbsp;

          <button onClick={this.incrementClicked}> Increment Number</button>
          <br></br>
          <br></br>
          <textarea value={this.state.log} rows="10" cols="100"></textarea>
          {/* Add a text area for the log */}
          <footer>
          <p> By: Melinda Russell June 6, 2019</p>
          <p>	&#169; 2019 World Shipping, Inc.</p>
          </footer>
      </div>
    );
  }
}

export default App;
