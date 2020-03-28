function function_rock(){
    let  image = Math.floor(Math.random() * 3 );
    let result = document.getElementById("result");
    let computer = document.getElementById("computer");
    let player = document.getElementById("player");
    let button1 = document.getElementById("bt0");
    let button2 = document.getElementById("bt1");
    let pc_score = document.getElementById("pc_score");
    let player_score = document.getElementById("player_score");
    let pc = document.getElementById("pc");
    let you = document.getElementById("you");
    switch(image){
        case 0 : 
            computer.setAttribute("src" , "rock.png");
            result.innerHTML = "DRAW" ;
            break ;
        case 1 :
            computer.setAttribute("src" , "paper.png");
            result.innerHTML = "YOU LOSE" ;
            pc_score.innerHTML = pc_score.innerHTML * 1 + 1 ;
            agrandir(pc);
            break ;
        case 3 :
            computer.setAttribute("src" , "scissors.png");
            result.innerHTML = "YOU WIN" ;
            player_score.innerHTML = player_score.innerHTML * 1 + 1 ;
            agrandir(you);
            break ;
        default : break ;
    };
	button1.style.display = "none" ;
	button2.style.display = "flex" ;
}
function function_paper(){
    let  image = Math.floor(Math.random() * 3 );
    let result = document.getElementById("result");
    let computer = document.getElementById("computer");
    let player = document.getElementById("player");
    let button1 = document.getElementById("bt0");
    let button2 = document.getElementById("bt1");
    let pc_score = document.getElementById("pc_score");
    let player_score = document.getElementById("player_score");
    let pc = document.getElementById("pc");
    let you = document.getElementById("you");
    player.setAttribute("src" , "paper.png");
    switch(image){
        case 0 : 
            computer.setAttribute("src" , "rock.png");
            result.innerHTML = "YOU WIN" ;
            player_score.innerHTML = player_score.innerHTML * 1 + 1 ;
            agrandir(you);
            break ;
        case 1 :
            computer.setAttribute("src" , "paper.png");
            result.innerHTML = "DRAW" ;
            break ;
        case 3 :
            computer.setAttribute("src" , "scissors.png");
            result.innerHTML = "YOU LOSE" ;
            pc_score.innerHTML = pc_score.innerHTML * 1 + 1 ;
            agrandir(pc);
            break ;
        default : break ;
    };
	button1.style.display = "none" ;
	button2.style.display = "flex" ;
}
function function_scissors(){
    let  image = Math.floor(Math.random() * 3 );
    let result = document.getElementById("result");
    let computer = document.getElementById("computer");
    let player = document.getElementById("player");
    let button1 = document.getElementById("bt0");
    let button2 = document.getElementById("bt1");
    let pc_score = document.getElementById("pc_score");
    let player_score = document.getElementById("player_score");
    let pc = document.getElementById("pc");
    let you = document.getElementById("you");
    player.setAttribute("src" , "scissors.png");
    switch(image){
        case 0 : 
            computer.setAttribute("src" , "rock.png");
            result.innerHTML = "YOU LOSE" ;
            pc_score.innerHTML = pc_score.innerHTML * 1 + 1 ;
            agrandir(pc);
            break ;
        case 1 :
            computer.setAttribute("src" , "paper.png");
            result.innerHTML = "YOU WIN" ;
            player_score.innerHTML = player_score.innerHTML * 1 + 1 ;
            agrandir(you);
            break ;
        case 3 :
            computer.setAttribute("src" , "scissors.png");
            result.innerHTML = "DRAW" ;
            break ;
        default : break ;
    };
	button1.style.display = "none" ;
	button2.style.display = "flex" ;
}
function agrandir(e){
	let i = 10 ;
	let agrandissement=setIntervale(function(){
		e.style.fontSize = 16 + i*0.1 +"px" ;
		i += 10 ;
		if(i == 250 ){
			clearIntervale(agrandissement);
		}
	} , 10 , agrandissement );
	let apetissement=setIntervale(function(){
		e.style.fontSize = 31 - i*0.1 +"px" ;
		i += 10 ;
		if(i == 250 ){
			clearIntervale(apetissement);
		}
	} , 10 , apetissement );

}
function function_continue(){
	let button1 = document.getElementById("bt0");
    let button2 = document.getElementById("bt1");
    button2.style.display = "none" ;
	button1.style.display = "flex" ;
}