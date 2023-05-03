//let txt ="What sphinx of cement and aluminum bashed open their skulls and ate up their brains and imagination? Moloch! Solitude! Filth! Ugliness! Ashcans and unobtainable dollars! Children screaming under the stairways! Boys sobbing in armies! Old men weeping in the parks! Moloch! Moloch! Nightmare of Moloch! Moloch the loveless! Mental Moloch! Moloch the heavy judger of men! Moloch the incomprehensible prison! Moloch the crossbone soulless jailhouse and Congress of sorrows! Moloch whose buildings are judgment! Moloch the vast stone of war! Moloch the stunned governments! Moloch whose mind is pure machinery! Moloch whose blood is running money! Moloch whose fingers are ten armies! Moloch whose breast is a cannibal dynamo! Moloch whose ear is a smoking tomb! Moloch whose eyes are a thousand blind windows! Moloch whose skyscrapers stand in the long streets like endless Jehovahs! Moloch whose factories dream and croak in the fog! Moloch whose smoke-stacks and antennae crown the cities! Moloch whose love is endless oil and stone! Moloch whose soul is electricity and banks! Moloch whose poverty is the specter of genius! Moloch whose fate is a cloud of sexless hydrogen! Moloch whose name is the Mind! Moloch in whom I sit lonely! Moloch in whom I dream Angels! Crazy in Moloch! Cocksucker in Moloch! Lacklove and manless in Moloch! Moloch who entered my soul early! Moloch in whom I am a consciousness without a body! Moloch who frightened me out of my natural ecstasy! Moloch whom I abandon! Wake up in Moloch! Light streaming out of the sky! Moloch! Moloch! Robot apartments! invisible suburbs! skeleton treasuries! blind capitals! demonic industries! spectral nations! invincible madhouses! granite cocks! monstrous bombs! They broke their backs lifting Moloch to Heaven! Pavements, trees, radios, tons! lifting the city to Heaven which exists and is everywhere about us! Visions! omens! hallucinations! miracles! ecstasies! gone down the American river! Dreams! adorations! illuminations! religions! the whole boatload of sensitive bullshit! Breakthroughs! over the river! flips and crucifixions! gone down the flood! Highs! Epiphanies! Despairs! Ten years’ animal screams and suicides! Minds! New loves! Mad generation! down on the rocks of Time! Real holy laughter in the river! They saw it all! the wild eyes! the holy yells! They bade farewell! They jumped off the roof! to solitude! waving! carrying flowers! Down to the river! into the street!"
let txt = "I saw the best minds of my generation destroyed by madness, starving hysterical naked, dragging themselves through the streets at dawn looking for an angry fix, angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night "
//let txt1 ="I saw the best minds of my generation destroyed by madness"
//let txt= "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair."
//let txt ="the theremin is theirs. ok? yes, it is. this is a theremin."
let order =3;
let ngrams ={};
let button;
let foo = new p5.Speech();

// javascript object ngram and array that follows it

function setup() {
    cnv =createCanvas(600, 600);
    cnv.parent("sketch-holder");
    button = createButton("generate")
    button.mouseReleased(markovit)
  
    background(0);
    fill(255)
    ellipse(300,300,50,50)

    for (let i=0; i<=txt.length-order; i++){
      let gram = txt.substring(i,i+order);
      
      if(!ngrams[gram]){
        //when I find a new n gram make an array to be the value of the key
        ngrams[gram] =[];
        
      } 
      // always push the the character that follows the n gram
      ngrams[gram].push(txt.charAt(i+order))
      
      

    }
    print(ngrams)
  
}

function markovit(){

  // algorithm that generates the text

  let currentGram =txt.substring(0,order);
  //let currentGram ="the"
  print(currentGram)
  let result =currentGram

  for (let i =0; i<100;i++){ 

    let possibilities = ngrams[currentGram];

    if (!possibilities){
      print("no possibilities")
      break;   //incase it is undifined
    }

    let next =random(possibilities)

    result += next;

    // set current gram to the n gram of the text you are createing
    let len = result.length;

    currentGram =result.substring(len-order,len)

  }

  createP(result)
  foo.speak(result)
  
}

 