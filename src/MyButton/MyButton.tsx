import React, {FC} from 'react';
import './MyButton.css'

interface MyButtonProps {
    color: string;
    big?: boolean;
    props?: any;
    children?: React.ReactNode;
}
const MyButton: FC<MyButtonProps> = ({children, color,big, props}) => {
    const rootClasses = ["my-button"];
    if (big) {
        rootClasses.push("big-button")
    }
    return (
        <button {...props} className={rootClasses.join(' ')} style={{color}}>
            {children}
        </button>
    );
};

export default MyButton;