import React, {FC} from 'react';
import './MyInput.css'

interface MyInputProps {
    big?: boolean;
    placeholder: string;
    label?: string;
}

const MyInput: FC<MyInputProps> = ({big, label, placeholder, ...props}) => {
    const rootClasses = ["my-input"];
    if (big) {
        rootClasses.push("big-input")
    }

    return (
        <div>
            <label>
                {label}
                <input className={rootClasses.join(' ')} placeholder={placeholder} {...props} />
            </label>
        </div>
    );
};

export default MyInput;