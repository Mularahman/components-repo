import { type VariantProps } from 'class-variance-authority';
import React from 'react';
import "../libs/style.css";
type LabelProps = {
    required?: boolean;
};
declare const Label: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-label").LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string> & LabelProps & React.RefAttributes<HTMLLabelElement>>;
export { Label };
