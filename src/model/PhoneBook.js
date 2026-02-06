import PhoneBookEntry from "./PhoneBookEntry";

class PhoneBook {
    constructor() {
        // Loads entries from localStorage when a new PhoneBook is created
        this.entries = this.loadFromLocalStorage();
    }

   // Adds a new entry to the phone book and persists the updated list to localStorage
    add(entry) {
        this.entries.push(entry);
        this.saveToLocalStorage();
    }
    // Uses indexOf to find the entry reference in the array.
    delete(entry) {
        this.entries.splice(this.entries.indexOf(entry), 1);
        this.saveToLocalStorage();
    }

    /**
     * Saves the current list of phone book entries to localStorage.
     * Converts the entries array into a JSON string before storing.
     */

    saveToLocalStorage() {
        localStorage.setItem('phonebook-data', JSON.stringify(this.entries));
    }

    loadFromLocalStorage() {
        const json = localStorage.getItem('phonebook-data');
        // If nothing is found in localStorage, return an empty array
        if (json === null) return [];
        // Parse the JSON string into a JavaScript array of objects
        const jsonParsed = JSON.parse(json);
        // If the parsed array is empty, return an empty array
        if (jsonParsed.length === 0) return [];
        // Initialize an empty array to hold PhoneBookEntry instances
        let entries = [];
        // Loop through each plain object and convert it back into a PhoneBookEntry instance
        for (let i = 0; i < jsonParsed.length; i++) {
            entries.push(PhoneBookEntry.fromJSON(jsonParsed[i]));
        }
        return entries;
    }
}

export default PhoneBook;
