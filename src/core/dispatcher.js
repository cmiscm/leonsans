export class Dispatcher {
    constructor() {
        this.handlers_ = {
            update: {
                listeners: []
            }
        };
    }

    on(event, callback) {
        if (typeof callback !== 'function') {
            console.error(`The listener callback must be a function, the given type is ${typeof callback}`);
            return false;
        }

        if (typeof event !== 'string') {
            console.error(`The event name must be a string, the given type is ${typeof event}`);
            return false;
        }

        if (this.handlers_[event] === undefined) {
            this.handlers_[event] = {
                listeners: []
            };
        }

        this.handlers_[event].listeners.push(callback);
    }

    off(event, callback) {
        if (this.handlers_[event] === undefined) {
            console.error(`This event: ${event} does not exist`);
            return false;
        }

        this.handlers_[event].listeners = this.handlers_[event].listeners.filter(listener => {
            return listener.toString() !== callback.toString();
        });
    }

    dispatch(event, data) {
        this.handlers_[event].listeners.forEach((listener) => {
            listener(data);
        });
    }
}