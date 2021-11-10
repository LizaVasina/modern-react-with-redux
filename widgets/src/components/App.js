import React, { useState } from "react";

import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite JS library among engineers' 
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const colorOptions = [
    {
        label: 'The Color Red',
        value: 'red',
    },
    {
        label: 'The Color Green',
        value: 'green',
    },
    {
        label: 'A Shade of Blue',
        value: 'blue',
    }
];

const App = () => {
    const [selected, setSelected] = useState(colorOptions[0]);

    return (
        <div>
            {/* <Accordion items={items} />
            <Search />
            <Dropdown 
                label="Select a Color"
                selected={selected}
                onSelectedChange={setSelected}
                options={colorOptions} /> */}
            <Translate />
        </div>
    )
}

export default App;