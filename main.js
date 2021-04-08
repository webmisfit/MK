var playersInfo = [

    {
        name: 'KITANA', hp:66, img:'', weapon:['hands'], 
        attack(){console.log(this.name + ' fight')}
    },
    {
        name: 'SONYA', hp:74, img:'', weapon:['hands'], 
        attack(){console.log(this.name + ' fight')}
    }


]


function createPlayer(className, playerInfo){

    var $prevHTML = document.querySelector('.arenas').innerHTML

    document.querySelector('.arenas').innerHTML = `
        ${$prevHTML}

        <div class=${className}>
            <div class=progressbar>
                <div class=life width=${playerInfo.hp}%></div> 
                <div class=name>${playerInfo.name}</div> 
            </div>
            <div class=character> 
                <img src=http://reactmarathon-api.herokuapp.com/assets/${playerInfo.name.toLowerCase()}.gif />
            </div>
        </div>
    `
}


createPlayer('player1', playersInfo[0]);
createPlayer('player2', playersInfo[1]);

