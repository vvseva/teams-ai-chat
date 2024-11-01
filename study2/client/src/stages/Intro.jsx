import {
    Slider,
    usePlayer,
    usePlayers,
    useStage,
} from "@empirica/core/player/classic/react";
import React from "react";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import "../../node_modules/@empirica/core/dist/player-classic-react.css";

export function JellyBeans() {
    const player = usePlayer();
    const players = usePlayers();
    const stage = useStage();

    return (
        <div className="md:min-w-96 lg:min-w-128 xl:min-w-192 flex flex-col items-center space-y-10">
            <p>
                "In the next stage you will be joined by other team member and will have to interact with AI"
            </p>
            <div/>
            );
}