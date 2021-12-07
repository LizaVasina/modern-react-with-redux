import React from "react";
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.PureComponent {
    static contextType = LanguageContext;

    render() {
        return (
            <div>
                Select a language:
                <i className="flag uk" onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag ru" onClick={() => this.context.onLanguageChange('russian')} />
            </div>
        )
    }
}

export default LanguageSelector;
