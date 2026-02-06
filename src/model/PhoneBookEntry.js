class PhoneBookEntry {
    // Generates a random string to use as a unique ID for the entry
    constructor(name, phone) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.phone = phone;
    }
    
    // Static method to create a PhoneBookEntry instance from a plain object (e.g., after JSON.parse)
    static fromJSON(json) {
        let entry = new PhoneBookEntry();
        entry.id = json.id;
        entry.name = json.name;
        entry.phone = json.phone;
        return entry;
    }
}

export default PhoneBookEntry;
