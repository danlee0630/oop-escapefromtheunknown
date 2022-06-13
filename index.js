
class Room {
  constructor(name) {
    this._name = name;
    this._description = "";
    this._linkedRooms = {};
    this._character = "";
    this._Equipment = "";

  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get character() {
    return this._character
  }
  get Equipment() {
    return this._Equipment
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Description is too short.");
      return;
    }
    this._description = value;
  }

  set character(value) {
    this._character = value;
  }
  set Equipment(value) {
    this._Equipment = value;
  }
  describe() {
    return "You are now in " + this._name + ". " + "If you look around you can see " + this._description;
  }
  linkRoom(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
  }
  getDetails() {
    const entries = Object.entries(this._linkedRooms);
    let details = []
    for (const [direction, room] of entries) {
      let text = " The " + room._name + " is to the " + direction;
      details.push(text);
    }
    return details + "</br>" + "</br>" + "Type" + "<b>" + "  help " + "</b>" + "to see a list of commands.";
  }

  move(direction) {
    if (direction in this._linkedRooms) {
      return this._linkedRooms[direction];
    } else {
      alert("Obstacles ahead, unable to move.",);
      alert(" You are now in " + this._name)
      return this;
    }
  }
}

class Item {
  constructor(name) {
    this._name = name;
    this._inventory = [];
    this._description = "";
  }
  get name() {
    return this.name;
  }
  get description() {
    return this._description;
  }
  get pair() {
    return this._pair;
  }
  get inventory() {
    return this._inventory;
  }

  set name(value) {
    if (value < 3) {
      console.error("The item name is too short.");
      return;
    }
    this._name = value;
  }
  set description(value) {
    if (value < 4) {
      console.error("The item description is too short.");
      return;
    }
    this._description = value;
  }
  set pair(value) {
    if (value < 3) {
      console.error("The item pair is too short.")
      return;
    }
    this._pair = value;
  }
  describe() {
    return "The " + this._name + " is " + this._description;
  }

  addItem(item) {
    this._inventory.push(item);
  }

  checkItem(item) {
    for (let i = 0; i < this._inventory.length; i++)
      if (list[i] === item) {
        return true;
      }
    return false;
  }

}


class Character {
  constructor(name) {
    this._name = name,
    this._description = ""
    this._conversation = ""
    this._gift = "";

  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Decription is too short.");
      return;
    }
    this._description = value;
  }

  set conversation(value) {
    if (value.length < 4) {
      alert("conversation is too short.");
      return;
    }
    this._conversation = value;

  }
  set gift(value) {
    if (value < 4) {
      console.error("Gift name is too short.");
      return;
    }
    this._gift = value;
  }


  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get conversation() {
    return this._conversation;
  }
  get gift() {
    return this._gift;
  }

  describe() {
    return "You have met " + this._name + ", " + this._name + " is " + this._description;
  }
  converse() {
    return this._name + " says " + "'" + this._conversation + "'";
  }
}

class Enemy extends Character {
  constructor(name) {
    super(name);
    this._weakness = "";

  }
  get weakness() {
    return this._weakness;
  }

  set weakness(value) {
    if (value.length < 2) {
      alert("decription is too short.");
      return;
    }
    this._weakness = value;
  }

  attack(item) {
    let result = "";
    for (let i = 0; i < item.length; i++) {
      if (item[i] === this._weakness) {
        result = true;
        break;
      } else {
        result = false;
      }
    }
    return result;
  }

}

//////////////
//          //
//  Forest  //
//          //
/////   //////////////////////////////////////
//         //         //        //          //
//Grassland   Petrol      Shop    Warehouse //
//         // Station //        //          //
/////  /////////  /////////  ////////  ///////
//        //          //        //          //
// Field      Road       Car       Sever   //
//        //          //  Park  //          //
/////  /////////  ////////////////////////////
//       //          //        //           //
// Cliff     Village     Town      Escape   //
//       //          //  Hall  //  point(E) //
//////////////////////////////////////////////

const Forest = new Room("house of Foggy Forest");
Forest.description = "a room with bed, chair, table, sofa and cupboard, also, there a dagger on the floor, you can see a fire is on somewhere outside window,";
const Grassland = new Room("Grassland")
Grassland.description = " plain and wide view, full of eye-level grass, wind is blowing...and someone is there?";
const Field = new Room("Field")
Field.description = "a wide area muddy land, their a large door on the ground.";
const PetrolStation = new Room("Petrol Station")
PetrolStation.description = " fuel tank was empty, some cars stopped here, here is quite and terrible ";
const Road = new Room("a Road")
Road.description = " Road is dirty, poor smell;, looks nothing special here. ";
const Shop = new Room("a Shop")
Shop.description = " look like ruins, broken items on the floor, and a lots of mice running ";
const Warehouse = new Room("a Warehouse")
Warehouse.description = " poor smell and there painting on the wall'go to Town Hall if you survival ";
const Cliff = new Room("Cliff")
Cliff.description = " it looks danger and you can hear the sound from wave ";
const CarPark = new Room("Car Park")
CarPark.description = "few broken cars here, light is flashing, and two crashed truck is there";
const Sewer = new Room("Sewer")
Sewer.description = "Echo cho ho o o o ...... ";
const Village = new Room("Village")
Village.description = "It looks old and dilapidated, slient and a lots of broken hosue, and something is shining on the street corner ";
const TownHall = new Room("Town Hall")
TownHall.description = "There is aburning wooden boxes, and you see a shadow running towards Alley, Chase? ";
const Alley = new Room("Alley")
Alley.description = " you found a treasure box, but it is locked. ";


 /**
 * links for Forest S
 */
  Forest.linkRoom("south", Grassland)

 /**
 * links for Grassland E & N
 */
  Grassland.linkRoom("east", PetrolStation)
  Grassland.linkRoom("nouth", Forest)
  Grassland.linkRoom("south", Field)

 /**
 * links for Petrol Station E, S & W
 */
  PetrolStation.linkRoom("east", Shop)
  PetrolStation.linkRoom("south", Road)
  PetrolStation.linkRoom("west", Grassland)

 /**
 * links for Shop E, S & W
 */
  Shop.linkRoom("east", Warehouse)
  Shop.linkRoom("south", CarPark)
  Shop.linkRoom("west", PetrolStation)

  /**
 * links for Warehouse S & W
 */
  Warehouse.linkRoom("south", Sewer)
  Warehouse.linkRoom("west", Shop)

 /**
 * links for Field N, E & S
 */
  Field.linkRoom("north", Grassland)
  Field.linkRoom("east", Road)
  Field.linkRoom("south", Cliff)

/**
 * links for Road E, S, W & N
 */
  Road.linkRoom("east", CarPark)
  Road.linkRoom("south", Village)
  Road.linkRoom("west", Field)
  Road.linkRoom("north", PetrolStation)
  
/**
 * links for Car Park E, W & N
 */
  CarPark.linkRoom("east", Sewer)
  CarPark.linkRoom("west", Road)
  CarPark.linkRoom("north", Shop)

 /**
 * links for Sewer W & N
 */
  Sewer.linkRoom("west", CarPark)
  Sewer.linkRoom("north", Warehouse)

/**
 * links for Cliff E, """S""" & N
 */
  Cliff.linkRoom("east", Village)
  Cliff.linkRoom("north", Field)

  /**
 * links for Village E, W & N
 */
  Village.linkRoom("east", TownHall)
  Village.linkRoom("west", Cliff)
  Village.linkRoom("north", Road)

 /**
 * links for Town Hall W & N
 */
  TownHall.linkRoom("east", Alley)
  TownHall.linkRoom("west", Village)

 /**
 * links for Alley E, W & N
 */
  Alley.linkRoom("west", TownHall)

const Fireextinguisher = new Item("Fireextinguisher");
Fireextinguisher.description = "Fire extinguisher to the Second Ending ";

const Dagger = new Item("dagger");
Dagger.description = "The dagger to attack Medusa2";

const Key = new Item("key");
Key.description = "The Key to mislead player";

const Door = new Item("Door");
Door.description = " the door is open to adeep well ";

const Medusa = new Enemy("Medusa");
Medusa.conversation = "the key is the key...";
Medusa.description = " is standing in the middle of the Grassland, she is eccentric and terrifying. ";
Medusa.pronoun = "she";
Medusa.gift = Key;

const Medusa2 = new Enemy("Medusa");
Medusa2.conversation = " You never know the truth, because I am the truth!!! ";
Medusa2.description = " is looking at you, she looks terrible and against ";
Medusa2.pronoun = "she";
Medusa2.weakness = Dagger;

const Hercules = new Enemy("Hercules");
Hercules.conversation = "Don't touch me hahaha .....";
Hercules.description = "is sitting next to you , he is strong, tall and has a huge red eyes";
Hercules.pronoun = "he";
Hercules.gift = Dagger;

Forest.character = Hercules;
Grassland.character = Medusa;
Alley.character = Medusa2;

Field.Equipment = Door;
TownHall.Equipment = Fireextinguisher;
Alley.Equipment = Key;

function displayRoomInfo(room) {
  let occupantMsg = "";
  let textContent = "";
  if (room.character === "") {
    if (room.Equipment === "") {
      occupantMsg = "";
    } else {
      contentMessage = room.Equipment.describe();
    }
  }
  else {
    occupantMsg = room.character.describe() + ". ";
  }

  textContent = "<p>" + room.describe() + "</p>" + "<p>" +
    occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";

  document.getElementById("textarea").innerHTML = textContent;
  document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" placeholder="Insert commands here" color= />';
  document.getElementById("usertext").focus();

}
let inventory = [];
function commandHandler(command, character, room) {

  switch (command) {
    case "use":
      if (room) {
        if (room.Equipment === Fireextinguisher) {
          document.getElementById("buttonarea").innerHTML = "You extinguish the fire, suddenly, fog is covering everywhere, you are now dizzy and sleepy.......ZzzZZZzzzzZZZZ...... ";
          document.getElementById("buttonarea2").innerHTML = "> Almost there, this is not the best ending. "
        } if (room.Equipment === Key) {
          document.getElementById("buttonarea").innerHTML = " You release a monster out, and you can see your body standing in front of you...... ";
          document.getElementById("buttonarea2").innerHTML = "> YOU DIED,  GAME OVER "
        } else {
          alert(" There is no item to use at the moment.");
        }
        break;
      } else {
        alert("There is no item to use at the moment.");
        break;
      }

    case "open":
      if (room) {
        if (room.Equipment === Door) {
          document.getElementById("buttonarea").innerHTML = " You release a monster out, and you can see your body standing in front of you...... ";
          document.getElementById("buttonarea2").innerHTML = "> YOU DIED,  GAME OVER "
        } else {
          alert("Nothing to open at the moment.");
        }
        break;
      } else {
        alert("Nothing to open at the moment.");
      }
      break;


    case "speak":
      if (character) {
        if (room.character === Medusa) {
          msg = character.converse();
          alert(msg);
          break;
        } else if (room.character === Medusa2) {
          msg = character.converse();
          alert(msg);
          break;
        } else if (room.character === Hercules) {
          msg = character.converse();
          alert(msg);
          break;
        }
      } else {
        alert("There is nobody in front of you, you sure you see somebody here......?");
      }
      break;

    case "search":
      if (character) {
        if (inventory.indexOf(character.gift) === -1) {

          inventory.push(character.gift);
          let itemAdded = inventory[inventory.length - 1]._name;
          alert("You found a " + itemAdded + " and keep it in your inventory.");

        } else {
          alert("nothing useful found.");
        }
        break;
      } else {
        alert("nothing useful found.");
        break;
      }

    case "attack":
      if (character) {

        if (character.attack(inventory) === true) {

          document.getElementById("buttonarea").innerHTML = "Congratulations you defeated " + character.name; + character.pronoun + " is behind all this escape. "
          document.getElementById("buttonarea2").innerHTML = "> A portal linking with your world appeared, you escape from the 'unknown' successfully. "

        } else {
          document.getElementById("buttonarea").innerHTML = character.name + " has defeated you. Try to search something to equip yourself.";
          document.getElementById("buttonarea2").innerHTML = "> You Lost,  GAME OVER "
          break;
        }
      } else {
        alert("There is nobody to attack at the moment.");
        break;
      }

    case "help":
      alert("\r\n" + "List of possible commands:" 
      + "\r\n" + "'east': Move east"
      + "\r\n" + "'sorth': Move south"
      + "\r\n" + "'west': Move west"
      + "\r\n" + "'north': Move north"
      + "\r\n" + "'use': use the Room item"
      + "\r\n" + "'speak': speak with character"
      + "\r\n" + "'attack': attack the character"
      + "\r\n" + "'search': search room")
      break;

  }
}


function startGame() {

  currentRoom = Forest
  displayRoomInfo(currentRoom);
  document.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      command = document.getElementById("usertext").value.toLowerCase();
      const directions = ["north", "south", "east", "west"]
      const commands = ["use", "help", "search", "speak", "open", "attack"]
      if (directions.includes(command)) {
        currentRoom = currentRoom.move(command);
        displayRoomInfo(currentRoom);
      } else if (commands.includes(command)) {
        commandHandler(command, currentRoom.character, currentRoom)
      } else {
        document.getElementById("usertext").value = "";
        alert("This is not a valid command, Type 'help' for hints and try again");
      }

    }
  });
}

