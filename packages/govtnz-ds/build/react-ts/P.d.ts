import React from "react";
declare type Props = {
    styleSize: "large" | "medium" | "small" | "x-small";
    children?: React.ReactNode;
};
declare const P: ({ styleSize, children }: Props) => JSX.Element;
export default P;
