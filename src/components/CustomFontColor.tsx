import './mylabel.css';

export interface CustomFontColorProps {
    /**
    * Color personalizado de la fuente.
    */
    fontColor?: string;
    /**
    * Tamaño por defecto del texto.
    */
    size?: 'normal'|'h1'|'h2'|'h3';
}

export const CustomFontColor = ({ fontColor, size }: CustomFontColorProps) => {
  return (
    <span
        className={`label ${size}`}
        style={{ color: fontColor }}
    >
        Custom Font Color
    </span>
  )
}
