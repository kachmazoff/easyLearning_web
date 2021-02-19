import React from "react";
import { useSelector } from "react-redux";
import { Space } from "antd";
import { BlockWrapper } from "@/components/BlockWrapper";
import { CreateCollectionModule } from "@/modules/CreateCollectionModule";
import { CollectionsListModule } from "@/modules/CollectionsListModule";
import { getIsAuthenticated } from "@/modules/AuthModule";
import { ThreeColumnsLayout } from "./components";

export const CollectionsPage = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <ThreeColumnsLayout>
      {isAuthenticated && (
        <BlockWrapper>
          <Space>
            <CreateCollectionModule />
          </Space>
        </BlockWrapper>
      )}
      <BlockWrapper>
        <CollectionsListModule />
      </BlockWrapper>
    </ThreeColumnsLayout>
  );
};
