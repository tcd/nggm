import React, { useState } from "react";
import * as Space from "react-spaces";
import { Emulator } from "./emulator";
import { SpriteManager } from "./spriteManager";
import { ComposeScreen } from "./composeScreen";

export const App: React.FunctionComponent = () => {
    const [composedSprites, setComposedSprites] = useState<number[]>([]);

    return (
        <Space.ViewPort>
            <Space.TopResizable size="50%">
                <Space.LeftResizable size="30%">
                    <Emulator />
                </Space.LeftResizable>
                <Space.Fill>
                    <ComposeScreen composedSprites={composedSprites} />
                </Space.Fill>
                <Space.RightResizable size="30%">
                    <div>gif builder</div>
                </Space.RightResizable>
            </Space.TopResizable>
            <Space.Fill>
                <SpriteManager
                    composedSprites={composedSprites}
                    onComposedSpritesChanged={newComposedSprites =>
                        setComposedSprites(newComposedSprites)
                    }
                />
            </Space.Fill>
        </Space.ViewPort>
    );
};
