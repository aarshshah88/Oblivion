/**
 * Created by Josh on 2/17/17.
 * File which implements Errors
 * All Errors follow an interface
 */

export namespace Errors {
    //interface to structure Errors
    interface Error {
        type():string;
        message():string;
    }

    export class NameError implements Error {

        public name:string;

        constructor(name:string) {
            this.name = name;
        }

        type(): string {
            return "NameError";
        }

        message(): string {
            return `Name ${this.name} not defined`;
        }
    }

    export class IndexError implements Error {

        public index:string;

        constructor(index:string) {
            this.index = index;
        }

        type(): string {
            return "IndexError";
        }

        message(): string {
            return `Index ${this.index} not defined on list.`;
        }
    }
}
