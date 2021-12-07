import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.PureComponent {
    static contextType = LanguageContext;

    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Имя'
        return (
            <div className="ui field">
                <label>
                    {text}
                </label>
                <input />
            </div>
        )
    }
}

export default Field;
