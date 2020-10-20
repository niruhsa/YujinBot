export default class Database {
    

    public getConfig() {
        return new Promise(async (resolve: any) => {
            const sql = [ `SELECT * FROM config`, [] ];
        });
    }

    public getTrackedYouTubeChannels() {
        return new Promise(async (resolve: any) => {
            const sql = [ `SELECT * FROM yt_channels`, [] ]
        });
    }

}