declare type StyleSheet = Record<string, string | number>;
interface Config {
    theme: {
        [key: string]: any,
    };
}
declare function createTw(config?: Config): (input: string) => StyleSheet;

export { createTw as default };
