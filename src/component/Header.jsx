import React from "react";

function Header(){
    return(
        <header class="header">
            <div class="brand upper">
                <a href="/">CKG</a>
            </div>
            <div class="header-links">
                <ul>
                    <li class="active-header-li">
                        <a href="/" class="active-header-a" >Home</a>
                    </li>
                    <li>
                        <a href="/">About us</a>
                    </li>
                    <li>
                        <a href="/">Contact us</a>
                    </li>
                    <li>
                        <a href="/">Products</a>
                    </li>
                    <li>
                        <a href="/">Dealers</a>
                    </li>
                </ul>
            </div>
            <div class="search-box upper">
                <input class="search-txt" type="text" name="" placeholder="type of search" />
                <a class="search-btn" href="/">
                    <i class="fas fa-search"></i>
                </a>
            </div>
        </header>
    )
}

export default Header;