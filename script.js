//title
let h1 = document.createElement("h1")
h1.innerText=("EMOJIS 😎")
h1.setAttribute('id',"title")
h1.setAttribute("class",'text-center','my-2')
document.body.append(h1)

//container
let contain=document.createElement('div')
contain.setAttribute('class','container')
document.body.appendChild(contain)

//row_1
let row_1=document.createElement('div')
row_1.setAttribute('class','row')
contain.appendChild(row_1)

//row-text
let row_text=document.createElement('div')
row_text.setAttribute('class','col-sm-6','col-md-4','col-lg-4','col-xl-4','my-auto')
row_text.setAttribute('id','row')
row_text.innerHTML="<u>HISTORY OF EMOJIS:</u><br><br>The first set of Emojis were originally created in 1999<br>It was created by Japanese artist Shigetaka Kurita.<br> And included icons for the weather, traffic, technology and time. 9.<br> The 'Face with Tears of Joy' Emoji has been the most used Emoji for 4 years in a row.<br>... The word 'Emoji' literally means 'Picture Character' in Japanese.<br>"
row_1.appendChild(row_text)

//row-image
let row_image=document.createElement('img')
row_image.setAttribute('class','col-sm-6','col-md-4','col-lg-4','col-xl-4','my-auto')
row_image.setAttribute('src','images (1).jpeg')
row_1.appendChild(row_image)

//row_2
let row_2=document.createElement('div')
row_2.setAttribute('class','row')
contain.appendChild(row_2)

//select
let select_1=document.createElement('select')
select_1.setAttribute('class','mx-auto','mb-2em')
select_1.setAttribute('id','sel_1','pt-2em')
row_2.appendChild(select_1)

let ans=document.createElement('div')
ans.setAttribute('id','ans','text-center')
contain.appendChild(ans)

//fetch
fetch('https://emojihub.herokuapp.com/api/all')
.then((a)=>a.json())
.then((a)=>
{
    str=''
    let b=[]
    for(let i=0;i<a.length;i++)
    {
        if(b.includes(a[i].category))
        {
            continue
        }
        else
        {
        b.push(a[i].category)
        }
    }
    console.log(b)
for(let i of b)
{
    let c=document.createElement("option")
    c.innerHTML=i
    select_1.appendChild(c)
}
let ff=document.getElementById('sel_1')
ff.addEventListener('change',()=>
{
    console.log(ff.value)
    for(let i=0;i<a.length;i++){
        if(ff.value==a[i].category){
            str+=(a[i].htmlCode[0])
        }
    }
   document.getElementById('ans').innerHTML=str
   str=""; 
})

}).catch((er)=>{
    console.log('er')
})
