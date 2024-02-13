import styles from "../styles/home.module.scss";

import { useEffect } from "react";
import { gsap } from "gsap";
import useLocalStorage from "use-local-storage";
import { route } from 'preact-router';
import { useNavigate } from "react-router";
import video from "../assets/video/bongocat.mp4";

const Home = () => {
  const navigate = useNavigate()

  const [siteVisited, setSiteVisited] = useLocalStorage("siteVisited", false, {
    syncData: true,
  });

  useEffect(() => {
    if (!siteVisited) {
      gsap.fromTo(
        "#loading-alert",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          delay: 6,
          duration: 0.6,
          ease: "back",
        }
      );

      gsap.fromTo(
        "#cat-video",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          delay: 7.5,
          duration: 0.4,
          ease: "back",
        }
      );

      gsap.fromTo(
        "#generate-button",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          delay: 8,
          duration: 0.4,
          ease: "back",
        }
      );
      setSiteVisited(true);
    }
  }, []);

  return (
    <>
      <main className={styles.container}>
        <p id={"loading-alert"} className={styles.mainLoadingAlert}>
          LOADING...
        </p>

        <video
          id={"cat-video"}
          className={styles.video}
          controls={false}
          preload={"auto"}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source src={video} type="video/mp4" />
        </video>

        <button
          id={"generate-button"}
          className={styles.mainButton}
          onClick={()=>navigate("/generate")}
        >
          create your catto
        </button>
      </main>
    </>
  );
};

export default Home;
