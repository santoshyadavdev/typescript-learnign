class NewSet {
    has(valus: number ) : boolean {
        return true;
    }

    add(value: number) : this {
        return this;
    }
}

// tslint:disable-next-line: max-classes-per-file
class MutableSet extends Set {
    delete(vale: number) : boolean {
        return true;
    }
}
