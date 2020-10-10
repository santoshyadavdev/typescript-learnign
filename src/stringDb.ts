type State = {
    [key: string] : string
}

class StringDatabase {
    state: State = {};

    get(key: string) : string | null {
        return key in this.state ? this.state[key] : null
    }

    set(key: string , value: string) : void {
        this.state[key] = value;
    }

    static from(state: State) {
        const db = new StringDatabase();
        // tslint:disable-next-line: forin
        for(const key in state) {
            db.set(key,state[key])
        }
        return db;
    }
}