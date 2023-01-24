import { ThemeConfig } from 'tailwindcss/types/config';

declare type StyleSheet = Record<string, string | number>;
interface Config {
    theme: ThemeConfig;
}
declare function createTw(config?: Config): (input: string) => StyleSheet;

export { createTw as default };
