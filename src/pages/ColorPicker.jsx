import React from 'react';
import {ColorPickerComponent} from "@syncfusion/ej2-react-inputs";

import {Header} from "../components";

const change=(args)=>{
    document.getElementById('preview').style.backgroundColor=args.currentValue.hex;
}

const ColorPicker = (args) => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header title="Color Picker" category="App" />
            <div className="text-center">
                <div id="preview"></div>
            </div>
            <div className="flex gap-4">
                <div className="flex justify-center  flex-wrap">
                    <div>
                        <p className="text-2xl font-semibold mt-2 ">Inline Palette </p>
                    </div>
                    <ColorPickerComponent
                        id="inline-palette"
                        mode="Palette"
                        modeSwitcher={false}
                        inline
                        showButtons={false}
                        change={change}
                    />
                </div>
                <div className="flex justify-center items-center flex-wrap">
                    <div>
                        <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker </p>
                    </div>
                    <ColorPickerComponent
                        id="inline-palette"
                        mode="Picker"
                        modeSwitcher={false}
                        inline
                        showButtons={false}
                        change={change}
                    />
                </div>
            </div>

        </div>
    );
};

export default ColorPicker;
