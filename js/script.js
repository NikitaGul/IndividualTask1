let user = ""
while (user === null || user == "" || user.trim() == "" || user.length < 2)
{
	let nullCheck = 0;
	user = prompt("Write your name where more 1 symbol");
		if(user === null)
		{
			alert("Please, write more 1 symbol in your name");
			continue;
		}
		else
		{
			user.split("");
			if(user == "" || user.trim() == "" || user.length < 2)	
				{
				alert("Please, write more 1 symbol in your name");
				}
			else
			{
				break;
			}
		}
	}

let mainDiv = document.createElement("div");
mainDiv.classList.add("cardDiv");

let mainDivFirst = document.getElementById("firstCardDiv");

mainDivFirst.after(mainDiv);

let ballQuestion = document.createElement("div");
ballQuestion.classList.add("output");
mainDiv.append(ballQuestion);

let checkOutput = document.createElement("div");
checkOutput.classList.add("check");
mainDiv.append(checkOutput);

let buttonRound = document.createElement("div");
buttonRound.classList.add("buttonRound");
mainDiv.append(buttonRound);

checkOutput.innerHTML = "Виберіть сторону<br>натисніть на прапор країни";

let germanyChecker = 0;
let ententeChecker = 0;

let counterTable = new Array(2);
counterTable[0] = document.getElementById("userCounter");
counterTable[1] = document.getElementById("computerCounter");


if(germanyChecker == 0 && ententeChecker == 0)
{
	counterTable[0].onclick = () => 
	{
		if(ententeChecker == 0)
		{
		germanyChecker = 1;
		counterTable[0].style.cursor = "default";
		counterTable[1].style.cursor = "default";
		checkOutput.innerHTML = "Натисніть на магічну кулю";
		console.log(germanyChecker);
		}
	}
	counterTable[1].onclick = () => 
	{
		if(germanyChecker == 0)
		{
		ententeChecker = 1;
		counterTable[0].style.cursor = "default";
		counterTable[1].style.cursor = "default";
		checkOutput.innerHTML = "Натисніть на магічну кулю";
		console.log(ententeChecker);
		}
	}
}

let question = ["Чи переможе сьогодні Німеччина?", "Чи переможе Антанта?", "Все закінчиться перемогою Німеччини?", "Хто переможе?", "Хто отримає перевагу?"];

let max = 9;
let min = 0;

let round = 0;

let nameCountry = new Array(3);
nameCountry[0] = "France";
nameCountry[1] = "Great Britain";
nameCountry[2] = "USA";

let flagCountry = new Array(3);
flagCountry[0] = "https://i.postimg.cc/L8cz8SVZ/image.png";
flagCountry[1] = "https://i.postimg.cc/BvqcmsYD/image.png";
flagCountry[2] = "https://i.postimg.cc/rsS7SMZb/image.png";

let ententeName = document.getElementById("computer");

let name = document.getElementById("user");

let germanyCard = new Array(3);
germanyCard[0] = document.getElementById("firstCard");
germanyCard[1] = document.getElementById("secondCard");
germanyCard[2] = document.getElementById("thirdCard");

let antantaCard = new Array(3);

antantaCard[0] = document.getElementById("fourthCard");
antantaCard[1] = document.getElementById("fivethCard");
antantaCard[2] = document.getElementById("sixthCard");

let nominal = [-1, -1];
let finalResult = [0 , 0];

let card = new Array(36);
card[0] = "https://i.postimg.cc/HWwnJPqR/image.png";//піковий валет
card[1] = "https://i.postimg.cc/Hx2Gm5NZ/image.png";//червовий валет
card[2] = "https://i.postimg.cc/3w19JBKv/image.png";//бубновий валет
card[3] = "https://i.postimg.cc/C5mv0JPv/image.png";//хрестовий валет
card[4] = "https://i.postimg.cc/GhYSkvL4/image.png";//пікова дама
card[5] = "https://i.postimg.cc/PxPSNwVr/image.png";//червова дама
card[6] = "https://i.postimg.cc/Jhdqwh7w/image.png";//бубнова дама
card[7] = "https://i.postimg.cc/gkD3F04M/image.png";//хрестова дама
card[8] = "https://i.postimg.cc/9fGWKDY0/image.png";//піковий король
card[9] = "https://i.postimg.cc/J0RtPNwR/image.png";//червовий король
card[10] = "https://i.postimg.cc/BZzd5q2V/image.png";//бубновий король
card[11] = "https://i.postimg.cc/RV6x23Mm/image.png";//хрестовий король
card[12] = "https://i.postimg.cc/44KJR25j/image.png";//піковий туз
card[13] = "https://i.postimg.cc/wj98MwXq/image.png";//червовий туз
card[14] = "https://i.postimg.cc/RVQykwjj/image.png";//бубновий туз
card[15] = "https://i.postimg.cc/DyFYP885/image.png";//хрестовий туз
card[16] = "https://i.postimg.cc/28VLJxb5/image.png";//6 пік
card[17] = "https://i.postimg.cc/50sjKHfv/image.png";//6 черв
card[18] = "https://i.postimg.cc/7PQfgTsr/image.png";//6 буб
card[19] = "https://i.postimg.cc/63ppZ9CQ/image.png";//6 хрест
card[20] = "https://i.postimg.cc/W4X2TQxc/image.png";//7 пік
card[21] = "https://i.postimg.cc/0rRvVxKD/image.png";//7 черв
card[22] = "https://i.postimg.cc/pVg5wFDY/image.png";//7 буб
card[23] = "https://i.postimg.cc/9XqrYQv4/image.png";//7 хрест
card[24] = "https://i.postimg.cc/T3Qw3LWs/image.png";//8 пік
card[25] = "https://i.postimg.cc/hjQPs23F/image.png";//8 черв
card[26] = "https://i.postimg.cc/1XpRhfQJ/image.png";//8 буб
card[27] = "https://i.postimg.cc/kXs9QrX6/image.png";//8 хрест
card[28] = "https://i.postimg.cc/Gp8CnHPG/image.png";//9 пік
card[29] = "https://i.postimg.cc/tJ50NPyQ/image.png";//9 черв
card[30] = "https://i.postimg.cc/XNgthfMt/image.png";//9 буб
card[31] = "https://i.postimg.cc/90XgVk3K/image.png";//9 хрест
card[32] = "https://i.postimg.cc/BQV79Nm7/image.png";//10 пік
card[33] = "https://i.postimg.cc/VvNg2bnc/image.png";//10 черв
card[34] = "https://i.postimg.cc/152BYXzL/image.png";//10 буб
card[35] = "https://i.postimg.cc/Rhq1gxxS/image.png";//10 хрест

buttonRound.onclick = () =>
{
	if(germanyChecker == 1 || ententeChecker == 1)
{
	buttonRound.style.cursor = "pointer";
	if(round == 3)
	{
		round = 0;
		finalResult[0] = 0;
		finalResult[1] = 0;
	}
	
	ententeName.innerHTML = nameCountry[round];
	counterTable[1].style.backgroundImage = "url(" + flagCountry[round] + ")";
	++round;
	
	let cardPrev = [
	[-1, -1, -1],
	[-1, -1, -1]
	
];

	let randomQuestion = Math.floor(Math.random() * question.length);
	ballQuestion.innerHTML = question[randomQuestion];
	
	for(let i = 0; i < 3; ++i)
	{
		
		let randomCard = new Array(2);
		randomCard[0] = Math.floor(Math.random() * (max - min) + min);
		randomCard[1] = Math.floor(Math.random() * (max - min) + min);
		
		for(let k = 0; k < 2; ++k)
		{
			while(true)
			{
				let check = 0;
				
				for(let j = 0; j < 3; ++j)
				{
					if(randomCard[k] == cardPrev[k][j])
					{
						randomCard[k] = Math.floor(Math.random() * (max - min) + min);
						++check;
					}
				}
			
				if(check == 0)
				{
					break;
				}
			}
		}
		
		let cardResult = [randomCard[0] * 4, randomCard[1] * 4 + round];
		
		for(let k = 0; k < 2; ++k)
		{
		for(let j = 0; j < 36; ++j)
		{
			if(j == cardResult[k])
			{
				
				if(k == 0)
				{
					setTimeout(seeCardFirst, i*100);
					function seeCardFirst()
					{
					germanyCard[i].style.backgroundImage = "url(" + card[j] + ")";
					}
					cardPrev[k][i] = randomCard[k];
				}
				if(k == 1)
				{
					setTimeout(seeCardSecond, i*100);
					function seeCardSecond()
					{
					antantaCard[i].style.backgroundImage = "url(" + card[j] + ")";
					}
					cardPrev[k][i] = randomCard[k];
				}
				
			}
		}
		}
		
	}
	for(let i = 0; i < 2; ++i)
		{
			if(cardPrev[i][1] == 0)
			{
				nominal[i] = 2;
			}
			if(cardPrev[i][1] == 1)
			{
				nominal[i] = 3;
			}
			if(cardPrev[i][1] == 2)
			{
				nominal[i] = 4;
			}
			if(cardPrev[i][1] == 3)
			{
				nominal[i] = 11;
			}
			if(cardPrev[i][1] == 4)
			{
				nominal[i] = 6;
			}
			if(cardPrev[i][1] == 5)
			{
				nominal[i] = 7;
			}
			if(cardPrev[i][1] == 6)
			{
				nominal[i] = 8;
			}
			if(cardPrev[i][1] == 7)
			{
				nominal[i] = 9;
			}
			if(cardPrev[i][1] == 8)
			{
				nominal[i] = 10;
			}
			
			counterTable[i].innerHTML = nominal[i];
		}
		
		if(nominal[0] > nominal[1])
		{
			++finalResult[0];
			buttonRound.innerHTML = "У битві перемогла Німеччина";
		}
		
		if(nominal[1] > nominal[0])
		{
			++finalResult[1];
			buttonRound.innerHTML = "У битві перемогла країна Антанти";
		}
		
		if(nominal[0] == nominal[1])
		{
			buttonRound.innerHTML = "Нічия"
		}
		if(round == 3)
		{
			if(finalResult[0] > finalResult[1])
			{
				buttonRound.innerHTML = "Німеччині вдалось витіснити Антанту";
				if(finalResult[0] == 3)
				{
					buttonRound.innerHTML = "Німеччина розгромила Антанту";
				}
			}
			if(finalResult[1] > finalResult[0])
			{
				buttonRound.innerHTML = "Антанта витримала атаки Німеччини";
				if(finalResult[1] == 3)
				{
					buttonRound.innerHTML = "Антанта розгромила Німеччину";
				}
			}
			if(finalResult[0] == finalResult[1])
			{
				buttonRound.innerHTML = "Схоже, але нічия"
			}
		}
		
		if(germanyChecker == 1)
		{
		checkOutput.innerHTML = "Germany - " + finalResult[0] + "<br>" + user + "<br>Entente - " + finalResult[1] + "<br>Computer<br>Try " + round + " / 3";
		}
		if(ententeChecker == 1)
		{
		checkOutput.innerHTML = "Germany - " + finalResult[0] + "<br>Computer<br>Entente - " + finalResult[1] + "<br>" + user + "<br>Try " + round + " / 3";
		}
}
}
