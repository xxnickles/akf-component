import {TestComponent} from "./component";

// By doing this, I am creating a public api that allow the creation
// of instances of my component in a controlled manear
export function component(targetId: string) {
    return new TestComponent(targetId);
}
