class Task1 {
    StringLength() {
        let Str = "A Big Boo..";
        let LengthOfString = Str.length;
        console.log(`The length of given string is equal to: ${LengthOfString}`);
    }
}

let task1 = new Task1();
task1.StringLength();

class Task2 {
    FindAInString() {
        let Message = "Hello lis, I don't have time for you. I'll text ya later.";
        let CounterStrikeA = 0;
        for (let i = 0; i < Message.length; i++) {
            let CounterStrikeB = Message[i];
            if (CounterStrikeB.toLowerCase() === 'a') {
                CounterStrikeA++;
            }
        }
        console.log(`The letter 'a' appears ${CounterStrikeA} times in the message.`);
    }
}

let task2 = new Task2();
task2.FindAInString();

class Task6 {
    GenerateWord() {
        let Characters = "abcdefghijklmnopqrstvwxyz"
        let Word = "";
        let RandomLenght = Math.floor(Math.random() * 7 + 5);
        for(let i = 0; i < RandomLenght; i++) {
            let RandomIndex = Math.floor(Math.random() * Characters.length);
            Word += Characters[RandomIndex];
        }
        console.log(Word);
    }
}

let task6 = new Task6();
task6.GenerateWord();

class Task10 {
    SensoredWords() {
        let ListOfUnwantedWords = ["gela", "sashinao", "davaleba"];
        let Text = "Gamarjoba Gela! Shen gaqvs sashinao davaleba atvirtuli yvela taski.";
        ListOfUnwantedWords.forEach(Word => {
            const regex = new RegExp(Word, "gi");
            Text = Text.replace(regex, '*'.repeat(Word.length));
        });
        console.log(Text);
    }
}

let task10 = new Task10();
task10.SensoredWords();

class Task12 {
    GenParTxt() {
        let MinSymbol = parseInt(document.getElementById('i1').value);
        let MaxSymbol = parseInt(document.getElementById('i2').value);
        let MaxWords = parseInt(document.getElementById('i3').value);
        let MaxWordsInSentence = parseInt(document.getElementById('i4').value);
        let ParagraphCount = parseInt(document.getElementById('i5').value);
        let Language = document.getElementById('languageSelect').value;
        let GeneratedText = "";

        for (let p = 0; p < ParagraphCount; p++) {
            let sentenceCount = Math.floor(Math.random() * MaxWords) + 1;
            let paragraph = "";

            for (let s = 0; s < sentenceCount; s++) {
                let wordCount = Math.floor(Math.random() * MaxWordsInSentence) + 1;
                let sentence = "";

                for (let w = 0; w < wordCount; w++) {
                    let wordLength = Math.floor(Math.random() * (MaxSymbol - MinSymbol + 1)) + MinSymbol;
                    let word = this.generateRandomWord(wordLength);
                    sentence += word + " ";
                }
                paragraph += sentence.trim() + ". ";
            }
            GeneratedText += paragraph.trim() + "\n\n";
        }
        document.getElementById('gta1').value = GeneratedText.trim();
    }
    
    generateRandomWord(length) {
        let characters = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }
}

document.getElementById('generateButton').addEventListener('click', () => {
    let task12 = new Task12();
    task12.GenParTxt();
});

