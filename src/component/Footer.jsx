import React from "react";

function Footer(){
    return(
        <footer class="footer">
           <div class="footer-main-content">
               <div class="footer-left box">
                   <h2>About us</h2>
                   <div class="content ">
                       <p>Spices have a long and ancient history, especially in India, where they are a part of life and heritage. In every home & in every province across the country, different spices and blends are used to create different and distinctive tastes in dishes.</p>
                       <div class="social">
                           <a href="/"><span class="fab fa-facebook-f"></span></a>
                           <a href="/"><span class="fab fa-instagram"></span></a>
                           <a href="/"><span class="fab fa-twitter"></span></a>
                           <a href="/"><span class="fab fa-youtube"></span></a>
                       </div>
                   </div>
               </div>
               <div class="footer-center box">
                   <h2>Address</h2>
                   <div class="content mid-content">
                       <div class="place">
                           <span class="fas fa-map-marker-alt"></span>
                           <span class="text">West jyoti nagar ,delhi</span>
                       </div>
                   </div>
                   <div class="mid-content">
                    <div class="phone">
                        <span class="fas fa-phone-alt"></span>
                        <span class="text">+91-9999999999</span>
                    </div>
                </div>
                <div class="mid-content">
                    <div class="email">
                        <span class="fas fa-envelope"></span>
                        <span class="text">abc@gmail.com</span>
                    </div>
                </div>
               </div>
               <div class="footer-right box">
                   <h2>
                       Contact us
                   </h2>
                   <div class="content">
                       <form action="#">
                           <div class="email">
                               <div class="text" for="email">Email *</div>
                               <input type="email" required />
                           </div>
                           <div class="message">
                               <div class="text" for="email">Message *</div>
                               <textarea name="message" id="" cols="30" rows="4" required></textarea>
                            </div>
                            <div class="btn">
                                <button type="submit">Send</button>
                            </div>
                       </form>
                   </div>
               </div>
           </div>
           <div class="footer-bottom">
            <center>
                <span class="credits">Created by <a href="/">its__aky</a> |</span>
                <span class="far fa-copyright"></span><span>2020 All rights reserved</span>
            </center>
        </div>
        </footer>

    )
}

export default Footer;