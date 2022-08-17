import './mylabel.css';

export interface MyLabelProps {
    /**
    * Texto que se va a mostrar en la etiqueta.
    */
    label: string;
    /**
    * Tamaño por defecto del label.
    */
    size: 'normal'|'h1'|'h2'|'h3';
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal'
}: MyLabelProps) => {
  return (
    <span className={`${size}`}>{label}</span>
  )
}
