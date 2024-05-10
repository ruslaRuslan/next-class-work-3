import { Button, IconButton } from "@mui/material";
import styles from "./index.module.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const AboutPage = () => {
  return (
    <>
      <div>AboutPage</div>
      <IconButton>
      <AccessAlarmIcon />
      </IconButton>
      <Button className={styles.btn} variant="outlined">
        bura klikle
      </Button>
      <Button variant="outlined">bura klikle</Button>
    </>
  );
};

export default AboutPage;
