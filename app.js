Class = cl => document.getElementsByClassName(cl)[0]
Id = id => document.getElementById(id)
let Sex = 0
function AddDatas(name, lname, date, tall, email, instagram){
    Class("infos").innerHTML = `
                    <p>Nameff : ${name}</p>
                    <p>Last Name : ${lname}</p>
                    <p>Date : ${date}</p>
                    <p>Tall : ${tall}</p>
                    <p>Email : <a href="${email}" target="_blank">${email}</a></p>
                    <p>Instagram : <a  target="_blank" href="https://instagram.com/${instagram}">Click Here</a></p>
    `
    
}

function Reset(){
    let id = ["name", "lname", "date", "tall" , "email", "instagram"]
    for (let i = 0; i<id.length;i++){
        Id(id[i]).value = ""
    }
}
function Close(Element){
    Element.style.display = "none"
    Reset()
}
function ShowPop(Bloc,Container, Sex){
    if(Sex == 1){
        Container.style.background = "#033f63"
    }
    else {
        Container.style.background = "#7d056f"
    }
    Bloc.style.display = "block"
}


function Dinable(Button, State){
    if(State == "enable"){
        Button.disabled = false
        Button.style.cursor = "pointer"
    }
    else{
        Button.disabled = true
        Button.style.cursor = "not-allowed"
    }
}

Class("bio_sex").onchange = function(){
    if(Class("bio_sex").value == "M"){
        Class("container").style.background = "#033f63"
        Class("card").style.background = "#033f63"
        Dinable(Class("fill"), "enable")
        Sex = 1

    }
    else if(Class("bio_sex").value == "F"){
        Class("container").style.background = "#7d056f"
        Class("card").style.background = "#7d056f"
        Dinable(Class("fill"), "enable")
        Sex = 2
    }
    else{
        Class("container").style.background = "linear-gradient(45deg, #7d056f, #033f63)"
        Dinable(Class("fill"), "disable")
        Sex = 0
    }
}


Class("fill").addEventListener("click",function(){
    ShowPop(Class("popup"),Class("pop_container"), Sex)
})


Class("submit").addEventListener("click", function(){
    let Datas = {
        "name" : Id("name").value ,
        "lname" : Id("lname").value ,
        "date" : Id("date").value , 
        "tall" : Id("tall").value , 
        "email" : Id("email").value , 
        "instagram" : Id("instagram").value
    }
    Close(Class('popup'))
    
    Id("__root").style.display = "none"
    Class("result").style.display = "block"
    AddDatas(Datas["name"], Datas["lname"], Datas["date"], Datas["tall"], Datas["email"], Datas["instagram"])
})

Class("back").addEventListener("click", function(){
    Reset()
    Datas = {
        "name" :"" ,
        "lname" : "" ,
        "date" : "" , 
        "tall" : "" , 
        "email" : "" , 
        "instagram" : ""

    }
    Dinable(Class("fill"), "disable")
    Close(Class("result"))
    Id("__root").style.display = "block"
    Class("bio_sex").value = "NULL"
})