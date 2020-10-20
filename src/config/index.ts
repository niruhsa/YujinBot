import Database from "../database";

export default class Config {

    private db: Database = new Database();

    constructor() { this.loadConfig(); }

    private loadConfig() { }

    public getDeletedMessagesChannel() {
        const config = this.db.getConfig();
    }
}