
import React , {useEffect} from "react";
import { GitHub, Email, LinkedIn } from '@material-ui/icons';
import '../styles/Home.css'
import AOS from "aos"
import "aos/dist/aos.css"
import $ from 'jquery'
import 'animate.css'
import { Textillate } from "textillate-react";
import {createStyles, makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    refresh:{
      animation: "$up 2s 2"
    },
    rotateIcon: {
      animation: "$spin 2s linear "
    },
    "@keyframes spin": {
      "0%": {
        transform: "rotate(360deg)"
      },
      "100%": {
        transform: "rotate(0deg)"
      }
    },
    "@keyframes up":{
      "0%": {
        transform:"scale(2,2)"
      }
    }
  })
);


function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const classes = useStyles();

  return (
    <div className="home">
      <div className="about">
        <h2 className="animate__animated animate__flash animate__repeat-2	2 animate__slower"> Hi, My name is 
        <span style={{color:'black'}}><Textillate option={
          {
            in:{effect:'fadeInRight',sequence:true},
            out:{effect:'bounceOutUp',reverse:true},
            loop:true
          }
        }
        > Zeze Deyoko</Textillate></span>
        </h2>
        <div className="prompt"> 
          <p> <Textillate option={
            {
              in:{effect:'flash',sequence:true, delay:50},
              out:{effect:'flash', reverse:true}
            }
          }>
            Passionate Data Analyst and Data Scientist with a strong background in data manipulation, analysis, and visualization
          </Textillate>
           </p>
          <a href='https://linkedin.com/in/zeze-deyoko-zz77270827'><LinkedIn className={classes.refresh}/></a>
          <a href="https://github.com/Zezelamar"><GitHub className={classes.refresh}/></a>
          <a href="mailto:zezelamar7@gmail.com"><Email className={classes.refresh}/></a>
        </div>

      </div>
      <div data-aos="flip-left" className="skills">
        <h1><Textillate>
        Skills
        </Textillate>
          
        </h1>
        <ol className="list">
          <li className="item">
            <h2 data-aos="zoom-in-down" data-aos-duration="2000"> Data Analysis</h2>
            <span data-aos="zoom-out-down" data-aos-duration="3000">
            Data Cleaning, Data Collect, Data Normalisation, Statistical algorithms, Analysis tools (Excel, Power Query ...)
            </span>
          </li>
          <li className="item">
            <h2 data-aos="zoom-in-up" data-aos-duration="2000"> Data Visualization</h2>
            <span data-aos="zoom-out-up" data-aos-duration="3000">
            Tableau, Power BI, Matplotlib, Seaburn
            </span>
          </li>
          <li className="item">
            <h2 data-aos="zoom-in-left" data-aos-duration="2000"> Machine Learning</h2>
            <span data-aos="zoom-out-left" data-aos-duration="3000">
            Classification, Regression, Neural Network 
            </span>
          </li>
          <li className="item">
            <h2 data-aos="zoom-in-right" data-aos-duration="2000"> Languages</h2>
            <span data-aos="zoom-out-right" data-aos-duration="3000">
              Python, JavaScript, Java, SQL, C, C++
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home