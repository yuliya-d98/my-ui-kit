import { FC } from 'react';
import './MyInput.css';
interface MyInputProps {
    big?: boolean;
    placeholder: string;
    label?: string;
}
declare const MyInput: FC<MyInputProps>;
export default MyInput;
