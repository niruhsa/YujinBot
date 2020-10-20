import Database from '../database';
const discord = require('discord.js');

export default class Discord {

    private client = new discord.Client();
    private db: Database = new Database();
    
    constructor() {
        this.client.on('ready', () => console.log(`[ OK ] Logged in as: ${this.client.user.tag}`));
    }

    private listen() {
        this.client.on('message', (msg: any) => {
            
        });
    }
}