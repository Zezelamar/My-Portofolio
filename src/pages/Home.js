import React from 'react'

import { GitHub, Email, LinkedIn } from '@material-ui/icons';
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Zeze Deyoko</h2>
        <div className="prompt"> 
          <p> Passionate Data Analyst and Data Scientist with a strong background in data manipulation, analysis, and visualization </p>
          <a href='https://linkedin.com/in/zeze-deyoko-zz77270827'><LinkedIn /></a>
          <a href="https://github.com/Zezelamar"><GitHub /></a>
          <a href="mailto:zezelamar7@gmail.com"><Email /></a>
        </div>

      </div>
      <div className="skills">
        <h1>
          Skills
        </h1>
        <ol className="list">
          <li className="item">
            <h2> Data Analysis</h2>
            <span>
            Data Cleaning, Data Collect, Data Normalisation, Statistical algorithms, Analysis tools (Excel, Power Query ...)
            </span>
          </li>
          <li className="item">
            <h2> Data Visualization</h2>
            <span>
            Tableau, Power BI, Matplotlib, Seaburn
            </span>
          </li>
          <li className="item">
            <h2> Machine Learning</h2>
            <span>
            Classification, Regression, Neural Network 
            </span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>
              Python, JavaScript, Java, SQL, C, C++
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home