import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.PureComponent {
    static contextType = LanguageContext;

    render() {
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => value === 'english' ? 'Name' : 'Имя'}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        )
    }
}

export default Field;
