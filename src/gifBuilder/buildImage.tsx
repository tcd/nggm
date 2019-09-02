import React, { useState } from "react";
import { useAppState } from "../state";
import { createGif } from "../state/createGif_jsgif";

export const BuildImage: React.FunctionComponent = () => {
    const [dataUrl, setDataUrl] = useState<null | string>(null);
    const [state] = useAppState();
    const [width, setWidth] = useState("640");
    const [height, setHeight] = useState("384");
    console.log("BuildImage render");

    return (
        <div>
            width
            <input
                value={width}
                onKeyDown={e => {
                    console.log("input keydown");
                }}
                onChange={e => {
                    setWidth(e.target.value || "");
                }}
                type="text"
            />
            height
            <input
                value={height}
                onChange={e => setHeight(e.target.value || "")}
                type="text"
            />
            <button
                disabled={!width || !height}
                onClick={() => {
                    if (width && height) {
                        const delay =
                            window.Module._get_neogeo_frame_counter_speed() *
                            16;
                        createGif(
                            state.extractedSpriteGroups,
                            Number(width),
                            Number(height),
                            delay,
                            () => {},
                            setDataUrl
                        );
                        setDataUrl(dataUrl);
                    }
                }}
            >
                build gif
            </button>
            {dataUrl && <img src={dataUrl} />}
        </div>
    );
};
