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

const tv = new Tv();
const remote = new RemoteControl();

const turnOnCommand = new TurnOnCommand();
remote.pressButton(turnOnCommand);
const turnOffCommand = new TurnOffCommand();
remote.pressButton(turnOffCommand);
