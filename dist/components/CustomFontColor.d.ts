/// <reference types="react" />
import './mylabel.css';
export interface CustomFontColorProps {
    /**
    * Color personalizado de la fuente.
    */
    fontColor?: string;
    /**
    * Tamaño por defecto del texto.
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
}
export declare const CustomFontColor: ({ fontColor, size }: CustomFontColorProps) => JSX.Element;
