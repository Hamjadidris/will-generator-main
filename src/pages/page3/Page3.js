import React from "react";
import "./page3.css";
import { useState, useEffect } from "react";
import Download from "../../Components/will/Download";
import Will from "../../Components/will/Will";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Page3 = (props) => {
  const [loading, setLoading] = useState(false);
  const { values } = props;
  useEffect(() => {
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {
            loading ?
            (
                <div className='loader'>

                    <ClimbingBoxLoader
                    color={'#dda15e'}
                    loading={loading}
                    size={20}
                  />
                  <h3>Generating your will</h3>
                </div>
            )
            :
            <Will
              name = {values.name}
              exeName = {values.exeName}
              altName = {values.altName}
              gauName = {values.gauName}
              assets1 = {values.assets1}
              beniry1Name = {values.beniry1Name}
              beniry1Pert = {values.beniry1Pert}
              assets2 = {values.assets2}
              beniry1bName = {values.beniry1bName}
              beniry1bPert = {values.beniry1bPert}
              assets3 = {values.assets3}
              beniry1cName = {values.beniry1cName}
              beniry1cPert = {values.beniry1cPert}
              assets4 = {values.assets4}
              beniry1dName = {values.beniry1dName}
              beniry1dPert = {values.beniry1dPert}
            />
                
        }
    </div>
  );
};

export default Page3;
