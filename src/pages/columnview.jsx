import Layout from '../components/Dashboard/Layout/index'
import ColumnView from '../components/Dashboard/Task/ColumnView/ColumnShowLayout'
import { ActiveButtonsContext } from "../App";
import React, { useContext, useEffect } from "react";

const columnview = () => {
    const { setActiveColumnViewBtn } = useContext(ActiveButtonsContext);
  useEffect(() => {
    setActiveColumnViewBtn(true);
  }, []);
    return <Layout>
        <ColumnView/>
    </Layout>
}

export default columnview;