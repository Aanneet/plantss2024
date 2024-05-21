const icon=document.querySelector('.icon');
const search =document.querySelector('.search');
const clear=document.querySelector('.clear');
const flowers=['Variety of palm trees','Eucalyptus','Deer horns',
'Monstera','Ficus','Aspidistra','Coleus','Caladium','Rex Begonia',
'Geranium','Boxwood','Elephant Ears','Banana tree','Orangery crassula',
'Lavender','Rubber Plant','Wekiva Foliage Lady Palm','English Ivy','Umbrella Tree',
'Maidenhair Vine','Hoya','Fiddle Leaf Fig'];



icon.onclick =function(){
    search.classList.toggle('active');
}

clear.onclick =function(){
    document.getElementById('mySearch').value=' ';
    
}


function getOptions(word, flowers){
    return flowers.filter(f=>{
        //Определить то что мы вбили в Input
        // названием цветка внутри массива 


        const regex = new RegExp(word,'gi');
        return f.match(regex);
    })
}

function displayOptions(){

    console.log('this.value >>>', this.value);

    const option = getOptions(this.value, flowers);
    
    const html = option.map(flowers =>{
        return `<li>${flowers}<li>`;
    })
    .slice(0,10)
    .join('');

    textOption.innerHTML=this.value ? html :null;

}

const textInput = document.querySelector('.text');
const textOption = document.querySelector('.option');

textInput.addEventListener('change',displayOptions);
textInput.addEventListener('keyup',displayOptions);