var playersInfo = [

    {
        name: 'KITANA', hp:100, img:'', weapon:['dildo'],
        player:1,
        attack(){console.log(this.name + ' fight')}
    },
    {
        name: 'SONYA', hp:100, img:'', weapon:['black XXL dildo'],
        player:2,
        attack(){console.log(this.name + ' fight')}
    }


]


function createPlayer(className, playerInfo){

    var $prevHTML = document.querySelector('.arenas').innerHTML

    document.querySelector('.arenas').innerHTML = `
        ${$prevHTML}

        <div class=${className}>
            <div class=progressbar>
                <div class=life></div> 
                <div class=name>${playerInfo.name}</div> 
            </div>
            <div class=character> 
                <img src=http://reactmarathon-api.herokuapp.com/assets/${playerInfo.name.toLowerCase()}.gif />
            </div>
        </div>
    `
    document.querySelector(`.${className} .life`).style.width = (playerInfo.hp>-1? playerInfo.hp : 0)+'%'
}


createPlayer('player1', playersInfo[0]);
createPlayer('player2', playersInfo[1]);

const changeHP = (player, minDMG, maxDMG, hp=document.querySelector(`.${player} .life`)) => {

    let rand = Math.floor(Math.random() * maxDMG)||minDMG
    console.log( player, rand )
    let x = parseInt(hp.style.width) - rand
    hp.style.width = (x>-1? x : 0)+'%'

    if(x<1){
        $randomButton.disabled = true
        alert(playersInfo[Number(player==='player1')].name + ' WINS!')
    }
    
}

var $randomButton = document.querySelector('.arena1 .control .button')

$randomButton.addEventListener('click', function(){
    
    changeHP(['player1', 'player2'][Math.round(Math.random())], 1, 20)

})
