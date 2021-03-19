import './input.scss';

interface InputProps {
    onChange: (value: string) => void;
    name?: string;
    placeHolder?: string;
    value: string;
    disabled?: boolean;
}

export default function Input({
    onChange,
    name,
    placeHolder,
    value,
    disabled,
}: InputProps): JSX.Element {
    
    function handleOnChange(inputValue: string ) {
        onChange(inputValue);
    }

    return (
        <div className="input_container">
            <input
                name={name ? name : undefined}
                value={value}
                type="text"
                onChange={(e) => handleOnChange(e.target.value)}
                maxLength={80}
                placeholder={placeHolder ? placeHolder: undefined}
                disabled={disabled ? disabled : undefined}
            />
        </div>
    )
}