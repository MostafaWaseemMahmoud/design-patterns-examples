class FormattingStrategy {
  formate(text) {}
}

class BoldFormatting extends FormattingStrategy {
  format(text) {
    return `Bold: ${text}`;
  }
}
class ThinFormatting extends FormattingStrategy {
  format(text) {
    return `Thin: ${text}`;
  }
}

class textEditor {
  constructor(formattingStrategy) {
    this.formattingStrategy = formattingStrategy;
  }

  setFormattingStrategy(formattingStrategy) {
    this.formattingStrategy = formattingStrategy;
  }

  applyFormatting(text) {
    return this.formattingStrategy.format(text);
  }
}

let TextEditor = new textEditor(new BoldFormatting());
console.log(TextEditor.applyFormatting("MostafaWaseem"));
TextEditor = new textEditor(new ThinFormatting());
console.log(TextEditor.applyFormatting("SASASEMA"));
