function resize_info()
{
    let hei = document.getElementById("1");
	let hei1 = hei.offsetHeight;
	let a = document.getElementById("2");
	a.style.height = hei1 - 32 + "px";
	
	let aut = document.getElementsByClassName("blackout");
	aut[0].style.width = document.documentElement.scrollWidth + "px";
	aut[0].style.height = $('footer').offset().top + 122 + "px";
}

document.onreadystatechange = function () 
{
	if (document.readyState == "complete")
	{
		let div = document.createElement('div');
		div.className = "blackout";
		let wid = document.documentElement.scrollWidth;
		let heig = document.documentElement.scrollHeight;
		div.style.width = wid + "px";
		div.style.height = heig + "px";
		
		let head = document.getElementsByTagName("header");
		head[0].before(div);
		
		resize_info();
	}
}

document.addEventListener("DOMContentLoaded", function(event)
{
	if (localStorage.getItem('login') !== null && localStorage.getItem('password') !== null)
	{
		let button = document.getElementsByClassName("login");
		button[0].style.display = "none";
		
		let div = document.createElement('div');
		div.className = "name_of_user logo-name";
		
		if (localStorage.getItem('login').length > 14)
		{
			div.innerHTML = localStorage.getItem('login').substring(0, 14) + "...";
		}
		else
		{
			div.innerHTML = localStorage.getItem('login');
		}
		
		let div2 = document.createElement('div');
		div2.className = "search-button";
		div2.id = "exit";
		div2.addEventListener("click", exit, false);
		div2.innerHTML = "Выйти";
		
		button[0].before(div);
		div.after(div2);
	}
	if (sessionStorage.getItem('films') !== null)
	{
		let a = sessionStorage.getItem('films');
		let films = document.getElementsByClassName("new-films-div");
		for (let i = 0; i < a.length; i++)
		{
			films[Number.parseInt(a[i])].style.visibility = "hidden";
		}
	}
    window.onresize = function()
	{
        resize_info();
    };
});


function handleButtonClick()
{
	let aut = document.getElementsByClassName("blackout");
	aut[0].style.zIndex = "100";
	aut[0].style.opacity = "0.6";
    let b = document.getElementsByClassName("autorization");
	b[0].style.display = "block";
}

function filmsClick()
{
	let a = document.getElementById("films");
	a.style.color = "#E5261E";
	a.style.borderColor = "#E5261E";
	let b = document.getElementById("tv-chanels");
	b.style.color = "#333333";
	b.style.borderColor = "white";
	let del = document.getElementsByClassName("page_with_channels");
	del[0].style.display = "none";
	let add = document.getElementsByClassName("page_with_films");
	add[0].style.display = "block";
	let change = document.getElementsByTagName("footer");
	change[0].style.top = "198px";
	
	resize_info()
}

function channelsClick()
{
	let a = document.getElementById("films");
	a.style.color = "#333333";
	a.style.borderColor = "white";
	let b = document.getElementById("tv-chanels");
	b.style.color = "#E5261E";
	b.style.borderColor = "#E5261E";
	let del = document.getElementsByClassName("page_with_films");
	del[0].style.display = "none";
	let add = document.getElementsByClassName("page_with_channels");
	add[0].style.display = "flex";
	let change = document.getElementsByTagName("footer");
	change[0].style.top = "122px";
	
	resize_info()
}

function enterToSite()
{
	if (document.autoriz.login.value == "" || document.autoriz.password.value == "")
	{
		alert("Заполните все поля формы!");
	}
	else
	{
		localStorage.setItem("login", document.autoriz.login.value);
		localStorage.setItem("password", document.autoriz.password.value);
	}
}

function exit()
{
	localStorage.removeItem("login");
	localStorage.removeItem("password");
	let button = document.getElementsByClassName("login");
	button[0].style.display = "block";
	
	let name = document.getElementsByClassName("name_of_user");
	name[0].style.display = "none";
	
	let exit = document.getElementById("exit");
	exit.style.display = "none";
}

function searchFilms()
{
	let input = document.search_films.search_films_input.value;
	if (input != "")
	{
		let films = document.getElementsByClassName("new-films-div");
		let str = "";
		for (let i = 0; i < films.length; i++)
		{
			if (films[i].textContent.toLowerCase().indexOf(input.toLowerCase()) == -1)
			{
				str += i;
				films[i].style.visibility = "hidden";
			}
			else
			{
				films[i].style.visibility = "visible";
			}
		}
		sessionStorage.setItem("films", str);
	}
	else
	{
		let films = document.getElementsByClassName("new-films-div");
		for (let i = 0; i < films.length; i++)
		{
			films[i].style.visibility = "visible";
		}
	}
}