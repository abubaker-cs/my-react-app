import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import Header from "../components/header"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"
import Wave from "../components/wave"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Header />

    <div className="Hero">

      <div className="HeroGroup">
        <h1>Learn to<br /> Design and Code React apps.</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Link to the video</Link>

        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>

        {/* SVG Shape */}
        <Wave />

      </div>{/* ./HeroGroup */}

    </div>{/* ./Hero */}


    <div className="Cards">

      <h2>11 courses, more coming</h2>

      <div className="CardGroup">
        {/* Placeholder */}
        <Card
          title="Design System"
          text="10 sections"
          image={require('../images/wallpaper.jpg')} />

        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')} />

        <Card
          title="Sound Design"
          text="5 sections"
          image={require('../images/wallpaper.jpg')} />

        <Card
          title="ARKit 2"
          text="10 sections"
          image={require('../images/wallpaper.jpg')} />

        <Card
          title="SwiftUI 2"
          text="8 sections"
          image={require('../images/wallpaper.jpg')} />
      </div>

    </div>
    

    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />

  </Layout>
)

export default IndexPage