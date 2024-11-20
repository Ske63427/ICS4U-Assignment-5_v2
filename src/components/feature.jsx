//import { useState } from "react";

function feature() {
    const ALL_POSTER_SETS = [
        ["Movies/theGodfather.jpg","Movies/pulpFiction.jpg","Movies/goodfellas.jpg"], 
        ["Movies/forrestGump.jpg","Movies/furious7.jpg","Movies/interstellar.jpg"], 
        ["Movies/theKarateKid.jpg","Movies/theDarkKnightRises.jpg","Movies/shawshankRedemption.jpg"], 
        ["Movies/lordOfTheRings.jpg","Movies/starWarsEpisode4.jpg","Movies/harryPotterAndTheSorcerersStone.jpg"], 
        ["Movies/fightClub.jpg","Movies/theMatrix.jpg","Movies/inception.jpg"]
    ];

    const POSTER_SLOTS = [slot1, slot2, slot3]
    let activeSet = 0

    function changePosters(direction){

        if (direction == 'l') activeSet = (activeSet < 0) ? --activeSet : 4;
        else activeSet = (activeSet < 4) ? ++activeSet : 0;

        for (let i = 0; i < 3; i++){
            POSTER_SLOTS[i] = activeSet[i]
        }
    }

    return (
        <div class="feature">
            <div class="movies">
            <button id="LEFT_BUTTON" onClick={changePosters(l)}>&laquo;</button>
                <div class="movie" id="movie-1">
                    <img id="posterOne" class="poster" src={slot1}/>
                </div>
                <div class="movie" id="movie-2">
                    <img id="posterTwo"class="poster" src={slot2}/>
                </div>
                <div class="movie" id="movie-3">
                    <img id="posterThree" class="poster" src={slot3}/>
                </div>
            <button id="RIGHT_BUTTON" onClick={changePosters(r)}>&raquo;</button>
            </div>
        </div>
    )
}

export default feature