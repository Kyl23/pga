import { ReactNode } from 'react';

export type StyleType = {
    width?: string;
    height?: string;
    isRight?: boolean;
};

type NavButtonType = {
    Component: ReactNode;
    url: string;
    styles?: StyleType;
};

export interface NavBarProps {
    navBarProps: NavButtonType[];
}
