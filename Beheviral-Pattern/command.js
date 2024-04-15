// // Receiver
// class TV {
//   turnOn() {
//     console.log("TV is on");
//   }

//   turnOff() {
//     console.log("TV is off");
//   }
// }

// // Command interface
// class Command {
//   execute() {}
// }

// // Concrete commands
// class TurnOnCommand extends Command {
//   execute() {
//     console.log("Turning TV on...");
//   }
// }

// class TurnOffCommand extends Command {
//   execute() {
//     console.log("Turning TV off...");
//   }
// }

// // Invoker
// class RemoteControl {
//   pressButton(command) {
//     command.execute();
//   }
// }

// // Usage
// const tv = new TV();
// const remote = new RemoteControl();

// const turnOnCommand = new TurnOnCommand();
// const turnOffCommand = new TurnOffCommand();

// remote.pressButton(turnOnCommand); // Output: Turning TV on...
// remote.pressButton(turnOffCommand); // Output: Turning TV off...

class Tv {
  turnOn() {
    console.log("Tv Turn On");
  }
  turnOof() {
    console.log("Tv Turn of");
  }
}

class Command {
  execute() {}
}

class TurnOnCommand extends Command {
  execute() {
    console.log("Turning TV on...");
  }
}
class TurnOffCommand extends Command {
  execute() {
    console.log("Turning TV oof...");
  }
}

class RemoteControl {
  pressButton(command) {
    command.execute();
  }
}

// const tv = new TV();
// const remote = new RemoteControl();

// const turnOnCommand = new TurnOnCommand();
// const turnOffCommand = new TurnOffCommand();

// remote.pressButton(turnOnCommand); // Output: Turning TV on...
// remote.pressButton(turnOffCommand); // Output: Turning TV off...

const tv = new Tv();
const remote = new RemoteControl();

const turnOnCommand = new TurnOnCommand();
remote.pressButton(turnOnCommand); // Output: Tv Turn On
const turnOffCommand = new TurnOffCommand();
remote.pressButton(turnOffCommand);
