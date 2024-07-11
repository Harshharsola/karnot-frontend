import React from "react";
import AcceptedL2 from "./accpetedL2";
import Reverted from "./reverted";

function Status({ status }: { status: string }) {
  return (
    <>
      {status === "ACCEPTED_ON_L2" && <AcceptedL2 />}
      {status === "REVERTED" && <Reverted />}
    </>
  );
}

export default Status;
