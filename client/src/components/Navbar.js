import React, {Fragment} from 'react'
import lightLogo from '../css/assets/images/logo-light-icon.png'
import lightLogoText from '../css/assets/images/logo-light-text.png'
import markIcon from '../css/assets/images/users/1.jpg'

const Navbar = () => {
    return (
        <Fragment >
            <header class="topbar">
                <nav class="navbar top-navbar navbar-expand-md navbar-dark">

                    {/* Logo */} 
                    <div class="navbar-header">
                    <a class="navbar-brand" href="index.html">
                            {/* Logo Icon  (png) */}
                                <b>
                                    {/* Dark Logo Icon 
                                    <img src="../css/assets/images/logo-icon.png" alt="homepage" class="dark-logo" />*/}
                                    {/* Light Logo Icon */}
                                    <img src={lightLogo} alt="homepage" class="light-logo" />      
                                </b>
                            {/* END Logo Icon */}
                            {/* Logo Text */}<span>
                            {/* Dark Logo Text (PNG) 
                            <img src="../css/assets/images/logo-text.png" alt="homepage" class="dark-logo" />*/}
                            {/* light Logo Text */}   
                            <img src={lightLogoText} class="light-logo" alt="homepage" /></span> 
                        </a>
                    </div>
                    {/* End Logo*/}


                    <div class="navbar-collapse">
                            {/* Toggle and Nav Items */}
                            
                            {/* User Profile Search */}
                            <ul class="navbar-nav my-lg-0">
                                
                           
                                <li class="nav-item dropdown u-pro">
                                    <a class="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={markIcon} alt="user" class=""/> <span class="hidden-md-down">Mark &nbsp;<i class="fa fa-angle-down"></i></span> </a>
                                    <div class="dropdown-menu dropdown-menu-right animated flipInY">
                                        <a href="javascript:void(0)" class="dropdown-item"><i class="ti-user"></i> My Profile</a>
                                        <a href="javascript:void(0)" class="dropdown-item"><i class="ti-wallet"></i> My Balance</a>
                                        <a href="javascript:void(0)" class="dropdown-item"><i class="ti-email"></i> Inbox</a>
                                        <div class="dropdown-divider"></div>
                                        <a href="javascript:void(0)" class="dropdown-item"><i class="ti-settings"></i> Account Setting</a>
                                        <div class="dropdown-divider"></div>
                                        <a href="pages-login.html" class="dropdown-item"><i class="fa fa-power-off"></i> Logout</a>
                                    </div>
                                </li>

                                <li class="nav-item right-side-toggle"> <a class="nav-link  waves-effect waves-light" href="javascript:void(0)"><i class="ti-settings"></i></a></li>
                            </ul>
                        </div>

                    


                    
                </nav>
            </header>
        </Fragment>
        
    )
}
      
export default Navbar;
