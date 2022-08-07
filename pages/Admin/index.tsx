import { getSession } from "next-auth/react";
// import { signOut } from 'next-auth/react'
import { withAuthSync } from "../../utils/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import { Tab } from "@headlessui/react";
import Table from "../../components/Table";
import { Fragment } from "react";

const Dashboard = ({ orders, accepted, mail }: any) => {
  const [orderList, setOrderList] = useState(orders);
  const [acc, setAccepted] = useState(accepted);
  const [emails, setEmail] = useState(mail);
  const [offer, setOffer] = useState("");

  const [tmpOrderList, setTmpOrderList] = useState([]);
  const [MasterChecked, setMasterChecked] = useState(false);
  const [selectedList, setSelectedList]: any = useState([]);

  function onMasterCheck(e: any) {
    let tempList = emails;
    // Check/ UnCheck All Items
    tempList.map((user: any) => (user.selected = e.target.checked));

    //Update State
    setMasterChecked(e.target.checked);
    // setOrderList(tempList)
    setSelectedList(emails.filter((e: any) => e.selected));
  }
  function onItemCheck(e: any, item: any) {
    let tempList = emails;
    tempList.map((user: any) => {
      if (user._id === item._id) {
        user.selected = e.target.checked;
      }
      return user;
    });
    //To Control Master Checkbox State
    const totalItems = emails.length;
    const totalCheckedItems = tempList.filter((e: any) => e.selected).length;

    // Update State
    setMasterChecked(totalItems === totalCheckedItems);
    setTmpOrderList(tempList);
    setSelectedList(emails.filter((e: any) => e.selected));
  }

  return (
    <div className=" mx-auto max-w-max px-10 py-20">
      <div className="">
        <h2 className="py-10 text-center">Admin Dashboard</h2>

        {/* <button onClick={() => signOut()}>Sign Out</button> */}
      </div>
    </div>
  );
};

// export const getServerSideProps = async (ctx: any) => {
//   const orderRes = await axios.get("http://localhost:3000/api/orders");
//   const mailRes = await axios.get("http://localhost:3000/api/offerGuide");
//   let request = orderRes.data.filter((item: any) => item.status === 0);
//   let acc = orderRes.data.filter((item: any) => item.status !== 0);
//   let mails = mailRes.data;
//   return {
//     props: {
//       orders: request,
//       accepted: acc,
//       mail: mails,
//     },
//   };
// };

export default withAuthSync(Dashboard);
