import { useState } from "react";


export default function Player({name, Symbol , isActive}){
    const [isEditing, setIsEditing]=useState(false);
    const [pName, setPlayerName]=useState(name);

    function handleNameChange(e){
    
        setPlayerName(e.target.value);
    }

    function handleEditing(){
    setIsEditing((editing)=>!editing)
    }

    let playerName=   <span className="player-name">{pName}</span>;
    if(isEditing){
        playerName=<input type="text" required value={pName} onChange={handleNameChange}></input>
    }


    return (
        <li className={isActive?'active': undefined}>
        {playerName}
        <span className="player-symbol">{Symbol}</span>
        <button onClick={handleEditing}>{isEditing?"Save":"Edit"}</button>
      </li>
    );
}