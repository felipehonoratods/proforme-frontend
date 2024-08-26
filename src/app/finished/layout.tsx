'use client'

import { Layout } from "antd";
import React from "react";
import { SideBar } from "../layout/components/SideBar";
import { Content as ContentDefault } from "../layout/components/Content";

const { Content, Sider } = Layout;

export default function FinishedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <Layout>
            <Sider
                style={{ backgroundColor: '#3f6083' }}
                breakpoint="lg"
                collapsedWidth="0"
            >
                <SideBar />
            </Sider>
            <Layout>
                <Content style={{ margin: '24px 16px 0', height: '97.5vh' }}>
                    <ContentDefault>
                        {children}
                    </ContentDefault>
                </Content>
            </Layout>
        </Layout>
    </section>
}