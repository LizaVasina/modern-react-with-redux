import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.PureComponent {
    static contextType = LanguageContext;

    render() {
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => value === 'english' ? 'Submit' : 'Подтвердить'}
                </LanguageContext.Consumer>
            </button>
        )
    }
}

export default Button;
