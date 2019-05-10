import React from 'react';
import chipImage from './Chip.png';
import visaImage from './Visa.png';
import masterCardImage from './mastercard.png';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './Card.css';

const CreditCard = () =>
    <section className='card-body'>
        <header className="Title-section">
            <h1>CREDIT CARD</h1>
        </header>
        <div className="chip-section">
            <img src={chipImage} className="chipImage-style"></img> 
        </div>
        <div className='Data-section'>
            <article className='serial-number-date'>
                <div>
                    <p className='card-number'>7253 3256 7895 1245</p>
                </div>
                <div className='pin-date'>
                    <p className='pin-code'>5422</p>
                    <span className='date-section'>
                        <p className='month-year'>MONTH YEAR</p>
                        <div className='date-display'>
                            <p className='display-style'>VALID<br/>THRU</p>
                            <p className='display-style'><i class="fas fa-caret-right"></i></p>
                            <p className='DATE-size'>11/50</p>
                        </div>
                    </span>
                </div>
                <p className='cardholder-display'>CARDHOLDER</p>
            </article>
            <article className='masterCard-visa'>
                <div className='logo-section'>
                    <img src={masterCardImage} className="logom-style"></img> 
                    <img src={visaImage} className="logo-style"></img> 
                </div>
            </article>
        </div>
    </section>

export default CreditCard;