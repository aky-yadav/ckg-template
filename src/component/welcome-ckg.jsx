import React from "react";



function Welcome(){
    return(
        <div className="welcome-container">
            <div className="welcome-image">
               <div className="div-image"></div>
            </div>
            <div className="welcome-content">
                <div className="welcome-heading">
                   <h1>Welcome to CKG</h1>
                </div>
                <div className="welcome-text">
                   <span>
                        Spices have a long and ancient history, especially in India, where they are a
                        part of life and heritage. In every home & in every province across the country,
                        different spices and blends are used to create different and distinctive tastes
                        in dishes. Several decades ago, housewives used to grind their spices manually
                        at home and make their own blends for use in their cooking. To make this 
                        process easier for the housewife, ’MAHASHIAN DI HATTI’ (MDH) visualised the
                        concept of ready-to-use ground spices.
                        <br /><br />
                        Starting with manually ground spices, MDH soon switched over to automatic
                        machines to meet the fast growing demand for MDH Spices. So much so today
                        spices worth crores of rupees are manufactured and packed by modern
                        machines and sold throughout India and abroad through a network of over
                        1000 Stockists and over 4 Lacs retail dealers. These machines now have
                        a capacity of producing 30 tones of spices in powders packed in beautiful
                        consumer pack of different sizes (10g to 500g) in a day.

                   </span>
                </div>
            </div>
        </div>

    );
}

export default Welcome;