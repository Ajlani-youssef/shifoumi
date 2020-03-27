function function_rock(){
	var  image = Math.floor(Math.random() * 3 );
	var result = document.getElementById("result");
	var computer = document.getElementById("computer");
	var player = document.getElementById("player");
	var button1 = document.getElementsById("bt");
	var button2 = document.getElementsById("bt1");
	player.setAttribute("src" , "rock.png");
	switch(image){
		case 0: 
			computer.setAttribute("src" , "rock.png");
			result.innerHTML("DRAW");
			break ;
		case 1 :
			computer.setAttribute("src" , "paper.png");
			result.innerHTML("YOU LOSE");
			break ;
		case 3 :
			computer.setAttribute("src" , "scissors.png");
			result.innerHTML("YOU WIN");
			break ;
		default : break ;
	};
	button1.style.display = "none" ;
	button2.style.display = "flex" ;
}
function function_paper(){
	var  image = Math.floor(Math.random() * 3 );
	var result = document.getElementById("result");
	var computer = document.getElementById("computer");
	var player = document.getElementById("player");
	var button1 = document.getElementsById("bt");
	var button2 = document.getElementsById("bt1");
	player.setAtribute("src" , "paper.png");
	switch(image){
		case 0: 
			computer.setAtribute("src" , "rock.png");
			result.innerHTML("YOU WIN");
			break ;
		case 1 :
			computer.setAtribute("src" , "paper.png");
			result.innerHTML("DRAW");
			break ;
		case 3 :
			computer.setAtribute("src" , "scissors.png");
			result.innerHTML("YOU LOSE");
			break ;
		default : break ;
	};
	button1.style.display = "none" ;
	button2.style.display = "flex" ;
}
function function_scissors(){
	var  image = Math.floor(Math.random() * 3 );
	var result = document.getElementById("result");
	var computer = document.getElementById("computer");
	var player = document.getElementById("player");
	var button1 = document.getElementsById("bt");
	var button2 = document.getElementsById("bt1");
	player.setAtribute("src" , "scissors.png");
	switch(image){
		case 0: 
			computer.setAtribute("src" , "rock.png");
			result.innerHTML("YOU LOSE");
			break ;
		case 1 :
			computer.setAtribute("src" , "paper.png");
			result.innerHTML("YOU WIN");
			break ;
		case 3 :
			computer.setAtribute("src" , "scissors.png");
			result.innerHTML("DRAws");
			break ;
		default : break ;
	};
	button1.style.display = "none" ;
	button2.style.display = "flex" ;
}
function effet_score(element e){
	for(let i = 0 ; i <= 200 ; i+= 10)
	{	
		let taille = 36 - i*0.1 ;
		e.style.font-size= "taille" ;
	}
	let i = 0 ;
	let j =
	let taille = 16;
 	function aggrandir(){
		taille += i*0.1 ;
		i += 10 ;
		e.style.font-size = "taille" ;
	}	
	function aggrandir(){
		taille -= j*0.1 ;
		j += 10 ;
		e.style.font-size = "taille" ;
	}

}
