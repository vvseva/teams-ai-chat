import {useGame, useStage} from "@empirica/core/player/classic/react";
import { Chat } from "./components/task/Chat";

import React from "react";
import { Profile } from "./Profile";
import { Stage } from "./Stage";
// import {Intro} from "./stages/Intro.jsx";

export function Game() {
  const game = useGame();
  const stage = useStage();
  const { playerCount } = game.get("treatment");

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-full flex flex-col">
        <Profile />
        <div className="h-full flex items-center justify-center">
          <Stage />
        </div>
      </div>

      {stage.get("name") === "Intro" && (
        <div className="h-full w-128 border-l flex justify-center items-center">
          <Chat scope={stage} attribute="chat" includeAI = "true"/>
        </div>
      )}
    </div>
  );
}
