'use client'

import { theme } from "antd";

export const Content = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
    return (
        <div
            style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
        >
            {children}
        </div>
    )
}