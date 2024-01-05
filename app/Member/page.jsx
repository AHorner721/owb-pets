import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import UploadForm from "../(components)/UploadForm";
import styles from "./upload.module.css";

// how to protect a server side page on app
const Member = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }

  return (
    <div className={styles.container}>
      <h1>Upload Photos</h1>
      <div className={styles.uploadform}>
        <UploadForm />
      </div>
    </div>
  );
};

export default Member;
