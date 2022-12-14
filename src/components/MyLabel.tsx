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
    /**
    * Version del boton.
    */
    color: 'primary'|'secondary'|'tertiary';
    /**
    * Define si el boton debe capitalizar sus caracteres.
    */
    allCaps?: boolean;
    /**
    * Define si el boton debe capitalizar sus caracteres.
    */
    backgroundColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color   = 'primary',
    label   = 'No Label',
    size    = 'normal',
    backgroundColor = 'transparent',
}: MyLabelProps) => {
  return (
    <span
      style={{ backgroundColor }}
      className={`label ${size} text-${color}`}
    >
        {allCaps ? label.toUpperCase() : label}
    </span>
  )
}

export default MyLabel;
