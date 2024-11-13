import React from "react";
import { Button } from "../components/Button";

export function Introduction({ next }) {
  return (
    <div className="mt-3 sm:mt-5 p-20">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Instruction One
      </h3>
      <div className="mt-2 mb-6">
        <p className="text-sm text-gray-500">
            <div className="prose lg:prose-xl"> {/* Added prose class for better typography */}
                You are an accomplished Astrobiologist
                <br></br>
                Called to join a secret, high-priority, elite Planetary Science Team
                <br></br>
                Your Astrobiology Team needs to determine humanity’s “plan B”
                <br></br>
                Which of three planets presents the best chance of supporting a human settlement?
                <div/>
        </p>
      </div>
      <Button handleClick={next} autoFocus>
        <p>Next</p>
      </Button>
    </div>
  );
}
