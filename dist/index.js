"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushEnvCore {
    constructor(name) {
        this.name = name;
    }
    process() {
        console.log(`Now yes! The name is ${this.name}`);
    }
}
exports.default = PushEnvCore;
