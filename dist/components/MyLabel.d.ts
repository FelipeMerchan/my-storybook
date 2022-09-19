/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Texto que se va a mostrar en la etiqueta.
    */
    label: string;
    /**
    * Tamaño por defecto del label.
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Version del boton.
    */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
    * Define si el boton debe capitalizar sus caracteres.
    */
    allCaps?: boolean;
    /**
    * Define si el boton debe capitalizar sus caracteres.
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, backgroundColor, }: MyLabelProps) => JSX.Element;
