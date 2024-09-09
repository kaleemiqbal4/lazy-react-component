import React, { PropsWithChildren } from "react";
import Layout from "../components/Layout";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<PropsWithChildren<LayoutWrapperProps>> = ({
  children,
}) => <Layout>{children}</Layout>;

export default LayoutWrapper;
