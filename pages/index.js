import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    async function get() {
      const res = await fetch("/api/hello");
      const data2 = await res.json();

      setdata(data2.formats[0].url);
    }
    get();
  }, []);
  return (
    <div className={styles.container}>
      {data ? (
        <>
          <video src={data} controls></video>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
}
