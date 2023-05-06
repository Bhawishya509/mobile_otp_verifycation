import React from "react";
import hmcs from "./Home.module.css";
import Checking from "./Checking";
const Home = () => {
    const image: any = new URL("../../../public/image/undraw_Content_team_re_6rlg.png", import.meta.url)
    
    
  return (
    <>
      <main className={hmcs.main_block}>
        <blockquote className={hmcs.pic_login_block}>
                  <section className={hmcs.section1}>
                      
                    <img src={image} alt="" srcSet="" className={hmcs.section1_image} />
          </section>

                  <section className={hmcs.section2}>
                    
                    <Checking/>
                   </section>
        </blockquote>
      </main>
    </>
  );
};

export default Home;
