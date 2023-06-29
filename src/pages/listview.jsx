import Layout from "../components/Dashboard/Layout/index";
import Sprint from "../components/common/Sprint/Sprint";
import { ActiveButtonsContext } from "../App";
import { useContext, useEffect } from "react";

const listview = () => {
  const {setActiveListViewBtn } = useContext(ActiveButtonsContext);
  useEffect(() => {
    setActiveListViewBtn(true);
  }, []);
  return (
    <Layout>
      <div className="w-full">
        <Sprint sprintNumber={"اول"} />
      </div>
      <div className={"absolute bottom-[30px] left-[30px]"}>
        {/* <Button
          className=" bg-[#208D8E] text-[14px] font-[500] text-white hover:bg-[#016869] py-2 px-4"
          icon="add-box"
        >
          تسک جدید
        </Button> */}
      </div>
    </Layout>
  );
};

export default listview;
