import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.PureComponent {
    static contextType = LanguageContext;

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Подтвердить';
    }

    render() {
        const text = this.context.language

        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }
}

export default Button;
