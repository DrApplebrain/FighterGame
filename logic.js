
const character = {
    name: ``,
    leben: 100,
    attack: ``,
    attack2: ``,
    power: ``,
    weapon: ``
};

let playername = ``;
let playerattack = ``;
let playerattack2 = ``;
let playerpower = ``;
let playerweapon = ``;
let playernumber;
let playerpowernumber;
let playerweaponnumber;
let playerlife;

let enemyname = ``;
let enemyattack = ``;
let enemyattack2 = ``;
let enemypower = ``;
let enemyweapon = ``;
let enemynumber;
let enemypowernumber;
let enemyweaponnumber;
let enemylife;

let stage = ``;
let stageNumber;

let image1 = ``;
let image2 = ``;
let image3 = ``;

let image4 = ``;
let image5 = ``;

let image6 = ``;
let image7 = ``;


const players = [
    `Atlas`, `Albert Einstein`, `Mike Tyson`, `Son Goku`, `Naruto`, `Donald Duck`, `Freddy Krueger`, `Sasuke`, `Frodo`
];

const playershref = [
    `images/player/atlas.jpg`, `images/player/albert-einstein.jpg`, `images/player/mike-tyson.png`, `images/player/goku.jpeg`, 
    `images/player/naruto.png`, `images/player/donald.png`, `images/player/freddy.jpg`, `images/player/sasuke.png`, `images/player/frodo.png`
];

const attack = [
    `Mit Fuß zermatschen!`, `Relativitätstheorie`, `Punch`, `Kame-hame-ha`, `Rasengan`, `Wutanfall`, `Klingen`,  `Chidori`, `Vom Berg schubsen`
];

const attackdamage = [
    50, 25, 30, 25, 30, 20, 15, 25, 100
];


const attack2 = [
    `Ellenbogenschlag ins Gesicht!`, `Einfluß der Schwerkraft und Ausbreitung des Lichtes`, `Jab`, `Genki-Dama`, `Kröten Karate`, `Hammer auf Kopf 3x`, `Albtraum`,  `Amaterasu`, `Ring der Macht`
];

const attackdamage2 = [
    30, 35, 20, 30, 20, 25, 90, 20, 50
];

const powerdamage = [
    30, 35, 30, 35, 35, 35, 100, 10, 1000
];

const powers = [
    `Laseraugen`, `Kyuubi`, `Superstärke`, `Feuer`, `Susanoo`, `Eis`, `Izanami`,  `Fliegen`, `Versiegelung`
];

const powershref = [
    "images/powers/lasereyes.jpeg",
    "images/powers/kyyubi.png",
    "images/powers/superstärke.png",
    "images/powers/fire.jpeg",
    "images/powers/susanoo.png",
    "images/powers/ice.png",
    "images/powers/izanami.png",
    "images/powers/fly.png",
    "images/powers/versiegelung.png"
]

const weapon = [
    `Damoklesschwert`, `Schildschlagringe`, `AK-47`, `Masamune`, `Enton: Susanoo Kagutsuchi`, `Tretmine`, `Mike Tyson Boxhandschuhe`, `Schuh`, `Klappstuhl`
];

const weapondamage = [
    100, 35, 35, 70, 35, 35, 40, 60, 30
];

const weaponshref = [
    "images/weapon/damoklesschwert.jpg",
    "images/weapon/schildschlagringe.png",
    "images/weapon/ak-47.png",
    "images/weapon/masamune.png",
    "images/weapon/enton-susanoo-kagutsuchi.png",
    "images/weapon/tretmine.png",
    "images/weapon/mike-tyson-box-gloves.png",
    "images/weapon/shoe.png",
    "images/weapon/steelchair.png"
]

const enemylist = [
    `Dieter Bohlen`, `Die Zeit`, `Papa Schlumpf`, `Canada`, `Batman`, `Kazuya`, `Mickey Mouse`, `Aragon`, `Tinkerbell`
];

const enemyshref = [
    "images/enemies/dieter-bohlen.png",
    "images/enemies/time.png",
    "images/enemies/papa-schlumpf.png",
    "images/enemies/canada.png",
    "images/enemies/batman.png",
    "images/enemies/kazuya.png",
    "images/enemies/mickey-mouse.jpg",
    "images/enemies/aragon.png",
    "images/enemies/tinker-bell.jpg"
];

const enemyattacks = [
    `Kritik`, `Verschwendung`, `Courage`, `Eishockeyschlag ins Gesicht`, `Batmobil`, `Kazuya Lightning Uppercut`, `Magie`, `Schwerthieb in your Face`, `Feenstaub-Attacke`
];

const enemyattackdamage1 = [
    50, 30, 40, 60, 25, 45, 70, 40, 100
];

const enemyattacks2 = [
    `Demütigung`, `Zeitsprung`, `Schlag ins Gesicht!`, `Ahornsirup`, `Batclaw`, `Devil Fist`, `Bogen`, `Faust ins Gesicht`, `Haare ziehen`
];

const enemyattackdamage2 = [
    30, 35, 50, 65, 45, 35, 800, 50, 1000
];

const fightLocations = [
    `Titanic`, `Schicksalsberg`, `Oscars`, `Eifelturm`, `Meister Kaio's Planet`, `WrestleMania XXIV`, `Phineas und Ferbs Garten`, `Snoop Dogg Tekken Stage`, `Irgendwo über einem Regenbogen`, `Fight Club`
];

const fightLocationshref = [
    `images/location/titanic.jpg`, `images/location/schicksalsberg.png`, `images/location/oscars.png`, `images/location/eifelturm.jpg`, 
    `images/location/masterkaioplanet.png`, `images/location/wrestlemania24.png`, `images/location/phineasferbgarden.jpg`, `images/location/snoopdoggtekkenstage.png`, 
    `images/location/somewhereovertherainbow.PNG`, `images/location/fightclub.jpg`
];

//Player

function playerDetails(){
    playername = players[playernumber];
    playerattack = attack[playernumber];
    playerattack2 = attack2[playernumber];
    image1 = document.getElementById('player');
    image1.src = playershref[playernumber];
    function changeImageSrc() {
        image1 = document.getElementById('player');
        image1.src = newSrc;
    }
    document.getElementById("wrapbody").style.display = "none";
    console.log(playername); 
    
}
function atlas(){
    playernumber = 0;
    playerDetails();
}

function albert(){
    playernumber = 1;
    playerDetails();
}

function mike(){
    playernumber = 2;
    playerDetails();
}

function goku(){
    playernumber = 3;
    playerDetails();
}

function naruto(){
    playernumber = 4;
    playerDetails();
}

function donald(){
    playernumber = 5;
    playerDetails();
}

function freddy(){
    playernumber = 6;
    playerDetails();
}

function sasuke(){
    playernumber = 7;
    playerDetails();
}

function frodo(){
    playernumber = 8;
    playerDetails();
}

//Power

function laser(){
    playerpowernumber =0;
    playerpower = powers[playerpowernumber];
    document.getElementById("wrapbody2").style.display = "none";
    console.log(playerpower);
}

function kyuubi(){
    playerpowernumber =1;
    playerpower = powers[playerpowernumber];
    document.getElementById("wrapbody2").style.display = "none";
    console.log(playerpower);
}

function strength(){
    playerpowernumber =2;
    playerpower = powers[playerpowernumber];
    document.getElementById("wrapbody2").style.display = "none";
    console.log(playerpower);
}

function fire(){
    playerpowernumber =3;
    playerpower = powers[playerpowernumber];
    document.getElementById("wrapbody2").style.display = "none";
    console.log(playerpower);
}

function susanoo(){
    playerpowernumber =4;
    playerpower = powers[playerpowernumber];
    document.getElementById("wrapbody2").style.display = "none";
    console.log(playerpower);
}

function ice(){
    playerpowernumber =5;
    playerpower = powers[playerpowernumber];
    document.getElementById("wrapbody2").style.display = "none";
    console.log(playerpower);
}

function izanami(){
    playerpowernumber =6;
    playerpower = powers[playerpowernumber];
    document.getElementById("wrapbody2").style.display = "none";
    console.log(playerpower);
}

function fly(){
    playerpowernumber =7;
    playerpower = powers[playerpowernumber];
    document.getElementById("wrapbody2").style.display = "none";
    console.log(playerpower);
}

function versiegelung(){
    playerpowernumber =8;
    playerpower = powers[playerpowernumber];
    document.getElementById("wrapbody2").style.display = "none";
    console.log(playerpower);
}

//weapon

function damoklesschwert(){
    playerweaponnumber =0;
    playerweapon = weapon[playerweaponnumber];
    document.getElementById("wrapbody3").style.display = "none";
    console.log(playerweapon);
}

function schildschlagringe(){
    playerweaponnumber =1;
    playerweapon = weapon[playerweaponnumber];
    document.getElementById("wrapbody3").style.display = "none";
    console.log(playerweapon);
}

function ak47(){
    playerweaponnumber =2;
    playerweapon = weapon[playerweaponnumber];
    document.getElementById("wrapbody3").style.display = "none";
    console.log(playerweapon);
}

function masamune(){
    playerweaponnumber =3;
    playerweapon = weapon[playerweaponnumber];
    document.getElementById("wrapbody3").style.display = "none";
    console.log(playerweapon);
}

function enton(){
    playerweaponnumber =4;
    playerweapon = weapon[playerweaponnumber];
    document.getElementById("wrapbody3").style.display = "none";
    console.log(playerweapon);
}

function tretmine(){
    playerweaponnumber =5;
    playerweapon = weapon[playerweaponnumber];
    document.getElementById("wrapbody3").style.display = "none";
    console.log(playerweapon);
}

function mikeboxgloves(){
    playerweaponnumber =6;
    playerweapon = weapon[playerweaponnumber];
    document.getElementById("wrapbody3").style.display = "none";
    console.log(playerweapon);
}

function shoe(){
    playerweaponnumber =7;
    playerweapon = weapon[playerweaponnumber];
    document.getElementById("wrapbody3").style.display = "none";
    console.log(playerweapon);
}

function steelchair(){
    playerweaponnumber =8;
    playerweapon = weapon[playerweaponnumber];
    document.getElementById("wrapbody3").style.display = "none";
    console.log(playerweapon);
}

//enemy

function enemydetails(){
    enemyname = enemylist[enemynumber];
    enemyattack = enemyattacks[enemynumber];
    enemyattack2 = enemyattacks2[enemynumber];
    document.getElementById("wrapbody4").style.display = "none";
    image3 = document.getElementById('enemy');
    image3.src = enemyshref[enemynumber];
    function changeImageSrc() {
        image3 = document.getElementById('enemy');
        image3.src = newSrc;
    }
    console.log(enemyname);
    buildCharakter();
}

function dieterbohlen(){
    enemynumber = 0;
    enemydetails();
}

function time(){
    enemynumber = 1;
    enemydetails();
}

function papaschlumpf(){
    enemynumber = 2;
    enemydetails();
}

function canada(){
    enemynumber = 3;
    enemydetails();
}

function batman(){
    enemynumber = 4;
    enemydetails();
}

function kazuya(){
    enemynumber = 5;
    enemydetails();
}

function mickeymouse(){
    enemynumber = 6;
    enemydetails();
}

function aragon(){
    enemynumber = 7;
    enemydetails();
}

function tinkerbell(){
    enemynumber = 8;
    enemydetails();
}

//build character

function buildCharakter() {
    let player = new Object(character);
    player.name = playername;
    player.attack = playerattack;
    player.attack = playerattack2;
    player.power = playerpower;
    player.weapon = playerweapon;
    playerlife = player.leben;
    document.getElementById("playername").innerHTML = playername;
    document.getElementById("playerattack1").innerHTML = playerattack;
    document.getElementById("playerattack2").innerHTML = playerattack2;
    document.getElementById("playerpower").innerHTML = playerpower;
    document.getElementById("playerweapon").innerHTML = playerweapon;
    document.getElementById("playerlife").innerHTML = player.leben;
    console.log(player);
    playerpowerimg();
}

function playerpowerimg() {
    image4 = document.getElementById('playerpowerimg');
    image4.src = powershref[playerpowernumber];
    function changeImageSrc() {
        image4 = document.getElementById('playerpowerimg');
        image4.src = newSrc;
    }
    playerweaponimg();
}

function playerweaponimg() {
    image5 = document.getElementById('playerweaponimg');
    image5.src = weaponshref[playerweaponnumber];
    function changeImageSrc() {
        image5 = document.getElementById('playerweaponimg');
        image5.src = newSrc;
    }
    buildEnemy();
}

function buildEnemy() {
    let enemy = new Object(character);
    enemy.name = enemyname;
    enemy.attack = enemyattack;
    enemy.attack2 = enemyattack2;
    enemypowernumber = randomIntFromInterval(0, 8);
    enemyweaponnumber = randomIntFromInterval(0, 8);
    enemy.power = powers[enemypowernumber];
    enemy.weapon = weapon[enemyweaponnumber];
    enemylife = enemy.leben;
    document.getElementById("enemyname").innerHTML = enemyname;
    document.getElementById("enemyattack1").innerHTML = enemyattack;
    document.getElementById("enemyattack2").innerHTML = enemyattack2;
    document.getElementById("enemypower").innerHTML = enemy.power;
    document.getElementById("enemyweapon").innerHTML = enemy.weapon;
    document.getElementById("enemylife").innerHTML = enemy.leben;
    enemypowerimg();
    console.log(enemy);
}

function enemypowerimg() {
    image6 = document.getElementById('enemypowerimg');
    image6.src = powershref[enemypowernumber];
    function changeImageSrc() {
        image6 = document.getElementById('enemypowerimg');
        image6.src = newSrc;
    }
    enemyweaponimg();
}

function enemyweaponimg() {
    image7 = document.getElementById('enemyweaponimg');
    image7.src = weaponshref[enemyweaponnumber];
    function changeImageSrc() {
        image7 = document.getElementById('enemyweaponimg');
        image7.src = newSrc;
    }
}

//Random Numbers

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Location

function titanic(){
    stageNumber = 0;
    changeLocationImage();
}

function schicksalsberg(){
    stageNumber = 1;
    changeLocationImage();
}

function oscars(){
    stageNumber = 2;
    changeLocationImage();
}

function eifelturm(){
    stageNumber = 3;
    changeLocationImage();
}

function masterkaiosplanet(){
    stageNumber = 4;
    changeLocationImage();
}

function wrestlemania24(){
    stageNumber = 5;
    changeLocationImage();
}

function phineasferbgarden(){
    stageNumber = 6;
    changeLocationImage();
}

function snoopdoggtekkenstage(){
    stageNumber = 7;
    changeLocationImage();
}

function somewhereovertherainbow(){
    stageNumber = 8;
    changeLocationImage();
}

function fightclub(){
    stageNumber = 9;
    changeLocationImage();
}

function changeLocationImage(){
    stage = fightLocations[stageNumber];
    image2 = document.getElementById('stage');
    image2.src = fightLocationshref[stageNumber];
    function changeImageSrc() {
        image2 = document.getElementById('stage');
        image2.src = newSrc;
    }
    document.getElementById("wrapbody5").style.display = "none";
    console.log(stage);
    document.getElementById("fightstage").innerHTML = stage;
}

//Random Location

function randomMap() {
    stageNumber = randomIntFromInterval(0, 9);
    stage = fightLocations[stageNumber];
    changeLocationImage()
    console.log(stage);

}

// Fight

let yourattack;
let yourattackdamage;
let notyourattack;
let notyourattackdamage;
let info;
let fertig = false;
let delayInMilliseconds = 1500; //1 second

function attacking1(){
    yourattackdamage = attackdamage[playernumber];
    enemylife -= yourattackdamage;
    yourattack = attack[playernumber];
    document.getElementById("enemylife").innerHTML = enemylife;

    setTimeout(displayYourAttack(), 5000);
}

function attacking2(){
    yourattackdamage = attackdamage2[playernumber];
    enemylife -= yourattackdamage;
    yourattack = attack2[playernumber];
    document.getElementById("enemylife").innerHTML = enemylife;
    setTimeout(displayYourAttack(), 5000);
}

function power(){
    yourattackdamage = powerdamage[playerpowernumber];
    enemylife -= yourattackdamage;
    yourattack = powers[playerpowernumber];
    document.getElementById("enemylife").innerHTML = enemylife;
    setTimeout(displayYourAttack(), 5000);
}

function useweapon(){
    yourattackdamage = weapondamage[playerweaponnumber];
    enemylife -= yourattackdamage;
    yourattack = powers[playerweaponnumber];
    document.getElementById("enemylife").innerHTML = enemylife;
    setTimeout(displayYourAttack(), 5000);
}

function displayYourAttack() {
    info = `${playername}!
    ${yourattack}!
    ${yourattackdamage}`;
    document.getElementById("info").innerHTML = info;
    setTimeout(checkenemy(), 5000);
}

function checkenemy(){
    
    info = `${enemyname}!
        ${notyourattack}!
        ${notyourattackdamage}`;
        document.getElementById("info").innerHTML = info;
    if(enemylife < 1){
        fertig = true;
        info = `Du hast gewonnen!
        Replay?`;
        document.getElementById("info").innerHTML = info;
    }
    else{
        enemyattacking();
    }
}




function enemyattacking() {
    let enemyattacken = [
        enemyattacks[enemynumber],
        enemyattacks2[enemynumber],
        powers[enemypowernumber],
        weapon[enemyweaponnumber],
    ];

    let enemyattackendamage = [
        enemyattackdamage1[enemynumber],
        enemyattackdamage2[enemynumber],
        powerdamage[enemypowernumber],
        weapondamage[enemyweaponnumber],
    ];
    let randomnumber = randomIntFromInterval(0, 3);
    notyourattack = enemyattacken[randomnumber];
    notyourattackdamage = enemyattackendamage[randomnumber];
    playerlife -= notyourattackdamage;
    document.getElementById("playerlife").innerHTML = playerlife;

    info = `${enemyname}!
        ${notyourattack}!
        ${notyourattackdamage}`;
        document.getElementById("info").innerHTML = info;

    if(playerlife < 1){
        fertig = true;
        info = `Du bist verloren!
        Replay?`;
        document.getElementById("info").innerHTML = info;
    }
    
}

function replay() {
    if (fertig === true){
        location.reload();
    }
}




