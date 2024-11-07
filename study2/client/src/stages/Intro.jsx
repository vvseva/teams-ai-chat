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

export function Intro() {
    const player = usePlayer();
    const players = usePlayers();
    const stage = useStage();

    return (
        <div className="md:min-w-96 lg:min-w-128 xl:min-w-192 flex flex-col items-center space-y-10">
            <p>
                "Instructions: Read this case briefing completely and then scan the QR code below to enter your preliminary decision.
                Though the first crewed mission to Mars was originally slated for the 2030’s, in an unprecedented move, NASA has decided to advance the mission by a decade and utilize the Mars 2024 launch window! The launch window opens in July 2024 and crew selection is underway as you read this document. The international crew will consist of 3 U.S. astronauts and 3 Russian cosmonauts. It will include 3 women and 3 men. Space agencies from all around the world—Canada, Europe, Japan, India, Emirates, and China—have joined together forming an international space colonization alliance to support the mission. Scientists have been debating the landing location for years, thinking they had time. But with the mission clock ticking, a final site must be selected for the mission.
                This is where you come in. You have been asked to join an elite team tasked with determining the landing site for the mission. The international space colonization alliance has narrowed the list to four sites and has agreed to proceed with the mission at any of the four locations. These four locations are: Argyre, Casius, Diacria and Eridania. Choosing which location to visit on this first outpost mission is critical to mission success. In the following pages, you will read key information about each location. Use this information to determine which location is the best site to land and establish the home base for the crew on Mars.
                As you review this information, think about what it takes to support human life. What are the positive and negative features of each candidate landing site for human habitation. You will make an initial decision based on your information, and then you will meet with the other members of your elite team to make a final decision."
            </p>
            </div>
            )
        };