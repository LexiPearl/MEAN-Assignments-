var person={
    name:'Lexi',
    distance_travele:0,
    say_name: function(){
        console.log(person.name);
    },
    say_something: function(string){
        console.log(`${person.name} says ${string}`)
    },
    walk: function(){
        console.log(`${person.name} is walking.`);
        person.distance_traveled +=3;
    },
    run: function(){
        console.log(`${person.name} is running`);
        person.distance_traveled +=10;
    },
    crawl: function(){
        console.log(`${person.name} is crawling`);
        person.distance_traveled +=1;
    }
}

function ninjaConstructor(name, cohort){
    var belts=['yellow', 'red', 'black']
    var name=ninja.name;
    var cohort=ninja.cohort;
    ninja.beltLevel=0
    levelUp: function(){
        if (ninja.beltLevel<2){
            ninja.beltLevel +=1;
            ninja.beltLevel= belts[ninja.beltLevel];
        }
        return ninja
    }
}
