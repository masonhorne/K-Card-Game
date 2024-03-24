// sampled from Turbo (0.25 to 0.75)
// https://blog.research.google/2019/08/turbo-improved-rainbow-colormap-for.html
const colorCodes = [
    '#25bce0',
    '#25bddf',
    '#25bede',
    '#25bfdd',
    '#25c1dc',
    '#25c2db',
    '#25c3da',
    '#25c4d9',
    '#25c5d8',
    '#24c6d7',
    '#24c7d6',
    '#24c8d4',
    '#24c9d3',
    '#25cad2',
    '#25cbd1',
    '#25ccd0',
    '#25cdcf',
    '#25cecd',
    '#25cfcc',
    '#25d0cb',
    '#25d1ca',
    '#26d2c9',
    '#26d3c7',
    '#26d4c6',
    '#26d5c5',
    '#26d6c4',
    '#27d7c2',
    '#27d8c1',
    '#27d9c0',
    '#28dabf',
    '#28dabd',
    '#28dbbc',
    '#29dcbb',
    '#29ddba',
    '#2adeb8',
    '#2adfb7',
    '#2be0b6',
    '#2be0b4',
    '#2ce1b3',
    '#2ce2b2',
    '#2de3b1',
    '#2de3af',
    '#2ee4ae',
    '#2ee5ad',
    '#2fe6ab',
    '#30e6aa',
    '#30e7a9',
    '#31e8a8',
    '#32e9a6',
    '#32e9a5',
    '#33eaa4',
    '#34eba2',
    '#35eba1',
    '#35eca0',
    '#36ed9f',
    '#37ed9d',
    '#38ee9c',
    '#39ee9b',
    '#39ef9a',
    '#3af098',
    '#3bf097',
    '#3cf196',
    '#3df195',
    '#3ef293',
    '#3ff292',
    '#40f391',
    '#41f390',
    '#42f48e',
    '#43f48d',
    '#44f58c',
    '#45f58b',
    '#46f689',
    '#47f688',
    '#48f687',
    '#49f786',
    '#4bf785',
    '#4cf883',
    '#4df882',
    '#4ef881',
    '#4ff980',
    '#50f97f',
    '#52f97e',
    '#53fa7d',
    '#54fa7b',
    '#55fa7a',
    '#57fa79',
    '#58fb78',
    '#59fb77',
    '#5afb76',
    '#5cfb75',
    '#5dfc74',
    '#5efc72',
    '#60fc71',
    '#61fc70',
    '#62fc6f',
    '#64fc6e',
    '#65fd6d',
    '#67fd6c',
    '#68fd6b',
    '#69fd6a',
    '#6bfd69',
    '#6cfd68',
    '#6efd67',
    '#6ffd66',
    '#71fd65',
    '#72fd64',
    '#73fd63',
    '#75fd62',
    '#76fd61',
    '#78fd60',
    '#79fd5f',
    '#7bfd5e',
    '#7cfd5d',
    '#7efd5c',
    '#7ffd5c',
    '#81fd5b',
    '#82fc5a',
    '#84fc59',
    '#85fc58',
    '#87fc57',
    '#88fc56',
    '#8afc55',
    '#8cfb55',
    '#8dfb54',
    '#8ffb53',
    '#90fb52',
    '#92fb51',
    '#93fa51',
    '#95fa50',
    '#96fa4f',
    '#98f94e',
    '#99f94d',
    '#9bf94d',
    '#9df84c',
    '#9ef84b',
    '#a0f84a',
    '#a1f74a',
    '#a3f749',
    '#a4f748',
    '#a6f648',
    '#a7f647',
    '#a9f546',
    '#aaf546',
    '#acf445',
    '#adf444',
    '#aff344',
    '#b0f343',
    '#b2f242',
    '#b3f242',
    '#b5f141',
    '#b6f140',
    '#b8f040',
    '#b9f03f',
    '#bbef3f',
    '#bcef3e',
    '#beee3d',
    '#bfed3d',
    '#c1ed3c',
    '#c2ec3c',
    '#c4eb3b',
    '#c5eb3b',
    '#c6ea3a',
    '#c8e93a',
    '#c9e939',
    '#cbe839',
    '#cce738',
    '#cde638',
    '#cfe637',
    '#d0e537',
    '#d1e436',
    '#d3e336',
    '#d4e335',
    '#d5e235',
    '#d7e134',
    '#d8e034',
    '#d9df33',
    '#dadf33',
    '#dcde33',
    '#dddd32',
    '#dedc32',
    '#dfdb31',
    '#e0da31',
    '#e2d931',
    '#e3d830',
    '#e4d730',
    '#e5d72f',
    '#e6d62f',
    '#e7d52f',
    '#e8d42e',
    '#e9d32e',
    '#ead22e',
    '#ebd12d',
    '#ecd02d',
    '#edcf2d',
    '#eece2c',
    '#efcd2c',
    '#f0cc2c',
    '#f1cb2b',
    '#f2c92b',
    '#f3c82b',
    '#f4c72a',
    '#f5c62a',
    '#f6c52a',
    '#f6c429',
    '#f7c329',
    '#f8c229',
    '#f9c128',
    '#fac028',
    '#fabe28',
    '#fbbd28',
    '#fcbc27',
    '#fcbb27',
    '#fdba27',
    '#feb927',
    '#feb726',
    '#ffb626',
    '#ffb526',
    '#ffb426',
    '#ffb325',
    '#ffb125',
    '#ffb025',
    '#ffaf25',
    '#ffae24',
    '#ffac24',
    '#ffab24',
    '#ffaa24',
    '#ffa923',
    '#ffa723',
    '#ffa623',
    '#ffa523',
    '#ffa322',
    '#ffa222',
    '#ffa122',
    '#ffa022',
    '#ff9e22',
    '#ff9d21',
    '#ff9c21',
    '#ff9a21',
    '#ff9921',
    '#ff9820',
    '#ff9620',
    '#ff9520',
    '#ff9420',
    '#ff9220',
    '#ff911f',
    '#ff901f',
    '#ff8e1f',
    '#ff8d1f',
    '#ff8b1e',
    '#ff8a1e',
    '#ff891e',
    '#ff871e',
    '#ff861e',
    '#ff851d',
    '#ff831d',
    '#ff821d'
];


class Settings {

    BLIND_MODE_SETTING_ID = 'blindMode';
    CARD_COUNT_SETTING_ID = 'cardCount';
    DARK_MODE_SETTING_ID = 'darkMode';
    CARD_LETTER_LABEL_SETTING_ID = 'cardLabel';
    DEFAULT_BLIND_MODE = false;
    DEFAULT_CARD_COUNT = 8;
    DEFAULT_DARK_MODE = false;
    DEFAULT_CARD_LETTER_LABEL = false;
    DEFAULT_SETTINGS = [this.DEFAULT_BLIND_MODE, this.DEFAULT_CARD_COUNT, this.DEFAULT_DARK_MODE, this.DEFAULT_LETTER_CARD_LABEL];
    SETTING_IDS = [this.BLIND_MODE_SETTING_ID, this.CARD_COUNT_SETTING_ID, this.DARK_MODE_SETTING_ID, this.CARD_LETTER_LABEL_SETTING_ID];

    constructor() {
        // Initialize a local storage reference for saving settings
        this.localStorage = window.localStorage;
        // Initialize a settings object with our setting values
        this.settings = {};
        // Each entry in settings will include value and a function for updating the value
        this.SETTING_IDS.forEach((settingId, idx) => {
            this.settings[settingId] = {
                value: this.retrieveSetting(settingId) ?? this.DEFAULT_SETTINGS[idx],
                update: (value) => {
                    this.settings[settingId].value = value;
                    this.localStorage.setItem(settingId, value);
                }
            };
        });
    }

    getSetting(settingId) {
        return this.settings[settingId].value;
    }

    retrieveSetting(settingId) {
        return this.localStorage.getItem(settingId);
    }

    saveSetting(settingId, value) {
        this.settings[settingId].update(value);
    }
}


class Timer {

    DEFAULT_TIMER_VALUE = '00:00:00.00';

    constructor() {
        this.timerElement = document.getElementById('timer');
    }

    padTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    resetTimer() {
        clearInterval(this.interval);
        this.updateTimerElement(this.DEFAULT_TIMER_VALUE);
        this.elapsedTime = 0;
        this.interval = undefined;
    }

    startTimer() {
        this.startTime = Date.now() - this.elapsedTime;
        this.interval = setInterval(() =>[
            this.elapsedTime = Date.now() - this.startTime,
            this.updateTimerElement(this.timeToString(this.elapsedTime))
        ], 10);
    }

    stopTimer() {
        clearInterval(this.interval);
        this.interval = undefined;
    }

    timeToString(time) {
        const hours = time / 3600000;
        const totalHours = Math.floor(hours);
        const minutes = (hours - totalHours) * 60;
        const totalMinutes = Math.floor(minutes);
        const seconds = (minutes - totalMinutes) * 60;
        const totalSeconds = Math.floor(seconds);
        const ms = (seconds - totalSeconds) * 100;
        const totalMs = Math.floor(ms);
        return `${this.padTime(totalHours)}:${this.padTime(totalMinutes)}:${this.padTime(totalSeconds)}.${this.padTime(totalMs)}`;
    }

    updateTimerElement(timeString) {
        this.timerElement.textContent = timeString;
    }
}


class App {

    constructor() {
        // Initialize the settings
        this.settings = new Settings();
        // Initialize the timer object
        this.timer = new Timer();
        // Initialize the references to page elements
        this.containerElement = document.getElementById('container');
        this.tableElement = document.getElementById('table');
        this.settingsElement = document.getElementById('settings');
        this.moveCounterElement = document.getElementById('move-counter');
        this.resetButtonElement = document.getElementById('reset-btn');
        this.shuffleButtonElement = document.getElementById('shuffle-btn');
        this.submitButtonElement = document.getElementById('submit-btn');
        this.leftHandElement = document.getElementById('left-hand');
        this.rightHandElement = document.getElementById('right-hand');
        this.settingsButtonElement = document.getElementById('settings-btn');
        this.settingsModalElement = document.getElementById('settings-modal');
        this.settingsCloseButtonElement = document.getElementById('close-settings-btn');
        this.modalOverlayElement = document.getElementById('overlay');
        this.cardCountInputElement = document.getElementById('card-count');
        this.darkModeInputElement = document.getElementById('dark-mode');
        this.blindModeInputElement = document.getElementById('blind-mode');
        this.letterLabelsInputElement = document.getElementById('letter-labels');
        this.optimalMovesElement = document.getElementById('optimal-moves');
        this.colorVariables = document.querySelector(':root');
        // Initialize internal state variables
        this.settingsModalOpen = false;
        this.blinded = false;
        this.totalMoves = 0;
        this.cardElements = [];
        // Add event listeners for elements
        this.settingsButtonElement.onclick = () => this.toggleSettingsMenu();
        this.settingsCloseButtonElement.onclick = () => this.toggleSettingsMenu();
        this.modalOverlayElement.onclick = () => this.toggleSettingsMenu();
        this.darkModeInputElement.onchange = () => this.updateDarkMode();
        this.blindModeInputElement.onchange = () => this.updateBlindMode();
        this.letterLabelsInputElement.onchange = () => this.updateLetterLabels();
        this.cardCountInputElement.onchange = () => this.updateCardCount();
        this.resetButtonElement.onclick = () => this.setInitialGameState();
        this.shuffleButtonElement.onclick = () => this.shuffleCards();
        this.submitButtonElement.onclick = () => this.submitSolution();
        // Initialize the page state
        this.cardCountInputElement.value = this.settings.getSetting(this.settings.CARD_COUNT_SETTING_ID);
        this.darkModeInputElement.checked = this.settings.getSetting(this.settings.DARK_MODE_SETTING_ID) === 'true';
        this.updateDarkMode();
        this.letterLabelsInputElement.checked = this.settings.getSetting(this.settings.CARD_LETTER_LABEL_SETTING_ID) === 'true';
        this.updateLetterLabels();
        this.blindModeInputElement.checked = this.settings.getSetting(this.settings.BLIND_MODE_SETTING_ID) === 'true';
        // This will also set the initial game state for the proper mode
        this.updateBlindMode();
    }


    createCardElements() {
        // Clear the table and card elements array
        this.tableElement.innerHTML = '';
        this.cardElements.length = 0;
        // Retrieve our card count setting and create the card elements
        const cardCount = this.settings.getSetting(this.settings.CARD_COUNT_SETTING_ID);
        for(let i = 1; i <= cardCount; i++) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.addEventListener('click', () => this.swapCards(i));
            this.tableElement.appendChild(cardElement);
            this.cardElements.push(cardElement);
        }
    }

    setInitialCardState() {
        const letterLabels = this.settings.getSetting(this.settings.CARD_LETTER_LABEL_SETTING_ID);
        // Loop through setting card colors and text while removing buffer-card class
        for(let i = 0; i < this.cardElements.length; i++) {
            const colorIndex = Math.floor((i / this.cardElements.length) * (colorCodes.length - 1));
            this.cardElements[i].style.backgroundColor = colorCodes[colorIndex];
            this.cardElements[i].textContent = letterLabels ? String.fromCharCode('A'.charCodeAt(0) + i) : `${i + 1}`;
            this.cardElements[i].identifier = `${i + 1}`;
            this.cardElements[i].classList.remove('buffer-card');
        }
        // Update the left and right hands to their initial state
        this.rightHandElement.classList.remove('buffer-card');
        this.leftHandElement.classList.add('buffer-card');
        this.leftHandElement.classList.remove('hidden');
        this.rightHandElement.classList.add('hidden');
        this.leftHandElement.style.background = '';
        this.leftHandElement.textContent = '★';
        this.leftHandElement.identifier = '★';
        this.rightHandElement.textContent = '';
        this.rightHandElement.identifier = '';
    }

    setInitialGameState() {
        // Create the card elements for the game
        this.createCardElements();
        this.setInitialCardState();
        // Set the shuffle and submit buttons to the correct state
        this.shuffleButtonElement.classList.remove('hidden');
        this.submitButtonElement.classList.add('hidden');
        // Populate variables for game state
        this.totalMoves = 0;
        this.blinded = false;
        this.disableOptimalMoveDisplay();
        // Reset the move counter and timer
        this.moveCounterElement.textContent = this.totalMoves;
        this.timer.resetTimer();
    }

    toggleSettingsMenu() {
        this.settingsModalElement.classList.toggle('hidden');
        this.modalOverlayElement.classList.toggle('hidden');
        this.settingsModalOpen = !this.settingsModalOpen;
    }

    toggleBlindModeSubmitButton() {
        this.submitButtonElement.classList.toggle('hidden');
        this.shuffleButtonElement.classList.toggle('hidden');
    }

    updateDarkMode() {
        // Update the darkmode setting
        const darkMode = this.darkModeInputElement.checked;
        this.settings.saveSetting(this.settings.DARK_MODE_SETTING_ID, darkMode);
        // Update the color variables for the game
        if(darkMode) {
            this.colorVariables.style.setProperty('--primary', '#333333');
            this.colorVariables.style.setProperty('--secondary', '#faf8f6');
        } else {
            this.colorVariables.style.setProperty('--primary', '#faf8f6');
            this.colorVariables.style.setProperty('--secondary', '#333333');
        }
    }

    verifySolution() {
        return this.cardElements.every((card, idx) => card.identifier === `${idx + 1}`);
    }

    submitSolution() {
        if(this.timer.interval && this.verifySolution()) {
            this.setInitialCardState();
            this.toggleBlindModeSubmitButton();
            this.enableOptimalMovesDisplay();
            this.timer.stopTimer();
        }
    }

    enableOptimalMovesDisplay() {
        // This has the assumption that the timer is not stopped before enabling the display
        if(this.timer.interval) {
            // Remove previously used classes
            this.optimalMovesElement.classList.remove('hidden');
            this.optimalMovesElement.classList.remove('optimal');
            this.optimalMovesElement.classList.remove('non-optimal');
            // Set the display text with the proper color
            if(this.totalMoves === this.optimalMoves) {
                this.optimalMovesElement.textContent = 'Optimal solution!';
                this.optimalMovesElement.classList.add('optimal');
            } else {
                this.optimalMovesElement.textContent = `${this.totalMoves - this.optimalMoves} moves from optimal solution!`;
                this.optimalMovesElement.classList.add('non-optimal');
            }
        }
    }

    disableOptimalMoveDisplay() {
        this.optimalMovesElement.classList.add('hidden');
    }

    enableBlindMode() {
        // Loop through removing card text, background colors, and buffer classes
        for(let i = 0; i < this.cardElements.length; i++) {
            this.cardElements[i].textContent = '';
            this.cardElements[i].style.backgroundColor = 'var(--primary)';
            this.cardElements[i].classList.remove('buffer-card');
        }
        // Update the left and right hands to a blind state
        this.leftHandElement.textContent = '';
        this.leftHandElement.style.backgroundColor = 'var(--primary)';
        this.rightHandElement.textContent = '';
        this.rightHandElement.style.backgroundColor = 'var(--primary)';
        // Toggle the submission button and set the blinded state
        this.toggleBlindModeSubmitButton();
        this.blinded = true;
    }

    updateBlindMode() {
        this.blindMode = this.blindModeInputElement.checked;
        this.settings.saveSetting(this.settings.BLIND_MODE_SETTING_ID, this.blindMode);
        this.setInitialGameState();
    }

    updateCardCount() {
        // Read in card count from input
        const cardCountInputValue = Number(this.cardCountInputElement.value);
        // If not a number or outside of the range [3, 50] set as error, otherwise save the setting
        if(Number.isNaN(cardCountInputValue) || cardCountInputValue < 3 || cardCountInputValue > 50) {
            this.cardCountInputElement.value = this.settings.getSetting(this.settings.CARD_COUNT_SETTING_ID);
            this.cardCountInputElement.classList.add('error');
        } else {
            this.settings.saveSetting(this.settings.CARD_COUNT_SETTING_ID, cardCountInputValue);
            this.cardCountInputElement.classList.remove('error');
            this.setInitialGameState();
        }
    }

    updateLetterLabels() {
        // Retrieve the input value and save it into page settings
        const letterLabelsInputValue = this.letterLabelsInputElement.checked;
        this.settings.saveSetting(this.settings.CARD_LETTER_LABEL_SETTING_ID, letterLabelsInputValue);
        // Initialize the game state for updated settings
        this.setInitialGameState();
    }

    swapCards(cardToSwap) {
        // Get reference to the elements we will be swapping between
        const cardInLeftHand = this.leftHandElement.identifier ? true : false;
        const handPickingUp = cardInLeftHand ? this.rightHandElement : this.leftHandElement;
        const handPuttingDown = cardInLeftHand ? this.leftHandElement : this.rightHandElement;
        const selectedCard = this.cardElements[cardToSwap - 1];
        // Swap the card information between the 3 elements
        handPickingUp.textContent = selectedCard.textContent;
        handPickingUp.identifier = selectedCard.identifier;
        handPickingUp.style.backgroundColor = selectedCard.style.backgroundColor;
        selectedCard.textContent = handPuttingDown.textContent;
        selectedCard.identifier = handPuttingDown.identifier;
        selectedCard.style.backgroundColor = handPuttingDown.style.backgroundColor;
        handPuttingDown.textContent = '';
        handPuttingDown.identifier = '';
        handPuttingDown.style.backgroundColor = '';
        // Swap buffer-card class if we have moved the buffer card
        if(handPickingUp.classList.contains('buffer-card') 
            || selectedCard.classList.contains('buffer-card')) {
            handPickingUp.classList.toggle('buffer-card');
            selectedCard.classList.toggle('buffer-card');
        }
        if(handPuttingDown.classList.contains('buffer-card')) {
            handPuttingDown.classList.toggle('buffer-card');
            selectedCard.classList.toggle('buffer-card');
        }
        // Swap the left and right hand visibility
        this.leftHandElement.classList.toggle('hidden');
        this.rightHandElement.classList.toggle('hidden');
        // Increment the total moves used
        this.totalMoves += 1;
        this.moveCounterElement.textContent = this.totalMoves;
        // If we just started blind mode, update the board state
        if(this.blindMode && !this.blinded) this.enableBlindMode();
        // If we finished a regular game, stop the timer
        if(!this.blindMode && this.verifySolution()) {
            this.enableOptimalMovesDisplay();
            this.timer.stopTimer();
        }
    }

    shuffleCards() {
        // Set the game to a fresh state
        this.setInitialGameState();
        // Read in the total cards we are shuffling
        const cardCount = this.settings.getSetting(this.settings.CARD_COUNT_SETTING_ID);
        // Shuffle the cards where each permutation is equally likely
        for(let i = 0; i < cardCount; i++) {
            const randomIndex = Math.floor(Math.random() * (cardCount - i)) + i;
            const randomCard = this.cardElements[randomIndex];
            const swapCard = this.cardElements[i];
            const cards = [randomCard, swapCard];
            [cards[0].textContent, cards[1].textContent] = [cards[1].textContent, cards[0].textContent];
            [cards[0].style.backgroundColor, cards[1].style.backgroundColor] = [cards[1].style.backgroundColor, cards[0].style.backgroundColor];
            [cards[0].identifier, cards[1].identifier] = [cards[1].identifier, cards[0].identifier];
        }
        // Calculate the optimal solution move count for this shuffle
        let permutationCycles = 0, misplacedCards = 0;
        const visited = new Array(cardCount).fill(false);
        for(let i = 0; i < cardCount; i++) {
            // If the card is misplaced, increment the total misplaced cards
            if(this.cardElements[i].identifier !== `${i + 1}`) {
                let currentValue = Number(this.cardElements[i].identifier) - 1;
                misplacedCards += 1;
                // If we have a new cycle, trace it until we have completed it
                if(!visited[currentValue]) {
                    while(!visited[currentValue]){
                        visited[currentValue] = true;
                        currentValue = Number(this.cardElements[currentValue].identifier) - 1;
                    }
                    permutationCycles += 1;
                }
            }
        }
        // Store the optimal move count for this hand
        this.optimalMoves = misplacedCards + permutationCycles;
        // Start the timer for the game
        this.timer.startTimer();
    }
}

const app = new App();