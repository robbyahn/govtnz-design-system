import React from "react";
declare type Props = {
    id?: string;
    hintId?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    name: string;
    value?: string;
    checked?: boolean;
    onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
    ref?: React.RefObject<HTMLInputElement>;
};
declare const Checkbox: ({ id, hintId, disabled, readOnly, autoFocus, name, value, checked, onChange, ref }: Props) => JSX.Element;
export default Checkbox;
