import React from 'react';
import PropTypes from 'prop-types';
import Translator from './Translator';
import ScrollableAnchor from 'react-scrollable-anchor';
import dictionary from '../text-configs/dictionary';

const propTypes = {};

export default class Footer extends React.Component {

    state = {
        name: '',
        phone: '',
        message: ''
    };

    static contextTypes = {
        lang: PropTypes.string.isRequired
    };

    proceedSubmit = event => {
        event.preventDefault();
        fetch('/order', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
    };

    handleNameChange = event => {
        const {value} = event.target;
        if (value.length > 0) this.setState({name: value});
    };
    
    handleNumberChange = event => {
        const {value} = event.target;
        if (value.length > 0 && /^[-+\d\s()]{1,}$/.test(value)) this.setState({phone: value});
    };

    handleMessageChange = event => {
        const {value} = event.target;
        this.setState({message: value});
    };

    render() {
        return (
            <React.Fragment>
                <ScrollableAnchor id={"contacts"}>
                    <div className="footer">
                        <div className="container">
                            <div className="footer__mainWrapper">
                                <div className="footer__contactsBlock">
                                    <div className="footer__flexBlock">
                                        <p className="footer__title">
                                            <Translator>contacts-selling</Translator>
                                        </p>
                                        <p>
                                            <Translator>contacts-sergiy</Translator> 
                                            <a href={`tel:${dictionary["contacts-phone-1"][this.context.lang]}`} className="footer__phoneLink">
                                                <Translator>contacts-phone-1</Translator>
                                            </a>
                                        </p>
                                        <p>
                                            <Translator>contacts-nat</Translator> 
                                            <a href={`tel:${dictionary["contacts-phone-2"][this.context.lang]}`} className="footer__phoneLink">
                                                <Translator>contacts-phone-2</Translator>
                                            </a>
                                        </p>
                                        <p>
                                            <Translator>contacts-dar</Translator> 
                                            <a href={`tel:${dictionary["contacts-phone-3"][this.context.lang]}`} className="footer__phoneLink">
                                                <Translator>contacts-phone-3</Translator>
                                            </a>
                                        </p>
                                    </div>
                                    <div className="footer__flexBlock">
                                        <p className="footer__title">
                                            <Translator>contacts-email-title</Translator>
                                        </p>
                                        <a href={`mailto:${dictionary["contacts-email"][this.context.lang]}`} className="footer__emailLink">
                                            <Translator>contacts-email</Translator>
                                        </a>
                                    </div>
                                    <div className="footer__flexBlock">
                                        <p className="footer__title">
                                            <Translator>contacts-gas-serv</Translator>
                                        </p>
                                        <p>
                                            <Translator>contacts-vital</Translator>
                                            <a href={`tel:${dictionary["contacts-phone-4"][this.context.lang]}`} className="footer__phoneLink">
                                                <Translator>contacts-phone-4</Translator>
                                            </a>
                                        </p>
                                    </div>
                                    <div className="footer__flexBlock footer__socials">
                                        <p className="footer__title">
                                            <Translator>contacts-socials</Translator>
                                        </p>
                                        <div className="footer__socialSvgWrapper">
                                            <a href={`#`} className="footer__socialLink">
                                                <img src="/images/content/instagram.png" alt="Instagram"/>
                                            </a>
                                            <a href={`#`} className="footer__socialLink">
                                                <img src="/images/content/facebook.png" alt="Facebook"/>
                                            </a>
                                            <a href={`#`} className="footer__socialLink">
                                                <img src="/images/content/viber.png" alt="Viber"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="footer__flexBlock">
                                        <p className="footer__title">
                                            <Translator>contacts-gas-exp</Translator>
                                        </p>
                                        <p>
                                            <Translator>contacts-nat</Translator>
                                            <a href={`tel:${dictionary["contacts-phone-2"][this.context.lang]}`} className="footer__phoneLink">
                                                <Translator>contacts-phone-2</Translator>
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="footer__formBlock">
                                    <p className="footer__title">
                                        <Translator>contacts-form-title</Translator>
                                    </p>
                                    <form className="footer__form" onSubmit={this.proceedSubmit}>
                                        <input 
                                            name="name" 
                                            type="text" 
                                            placeholder={dictionary["contacts-form-name"][this.context.lang]} 
                                            className="footer__formInput"
                                            value={this.state.name}
                                            onChange={this.handleNameChange}/>
                                        <input 
                                            name="phone"
                                            type="text"
                                            placeholder={dictionary["contacts-form-phone"][this.context.lang]}
                                            className="footer__formInput"
                                            value={this.state.phone}
                                            onChange={this.handleNumberChange}/>
                                        <textarea 
                                            name="message"
                                            placeholder={dictionary["contacts-form-mes"][this.context.lang]}
                                            className="footer__formInput footer__formInput--textArea"
                                            value={this.state.message}
                                            onChange={this.handleMessageChange}/>
                                        <button className="yellowBtn footer__formBtn">
                                            <Translator>contacts-form-send</Translator>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollableAnchor>
            </React.Fragment>
        );
    }
}

 Footer.propTypes = propTypes;