import React, { FC } from 'react';
import './MyButton.css';
interface MyButtonProps {
    color: string;
    big?: boolean;
    props?: any;
    children?: React.ReactNode;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
