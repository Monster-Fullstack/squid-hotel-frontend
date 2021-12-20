import React from "react";
import Grid from "../Design/Grid/Grid";
import WideSection from "../Design/Section/WideSection";
import SubscriptionCard from "../Design/SubscriptionCard/SubscriptionCard";
import classes from "./Subscription.module.scss";

const Subscription = () => {
  return (
    <WideSection
      backgroundImg={{ backgroundImage: "url('appImages/subs.jpg')" }}
      className={classes.parent}
    >
      <Grid>
        <div className={classes.content_parent}>
          <h3>Our Services</h3>
          <p>
            dskfl;dsj;skfsdjfsophjpojvlcjposjdfjfskfsdjfsophjpojvlcjposjdfjfskfsdjfsophjpojvlcjposjdfjfskfsdjfsophjpojvlcjposjdfjf'jdf;ksldsjpobv;kj
          </p>
        </div>
        <div className={classes.subscription_parent}>
          <Grid justifyContent="space-between">
            <SubscriptionCard name="Basic" price="10" isMainButton={false} />
            <SubscriptionCard name="Premium" price="20" isMainButton={true} />
          </Grid>
        </div>
      </Grid>
    </WideSection>
  );
};

export default Subscription;
