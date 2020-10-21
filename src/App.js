import React, { Component } from "react";
import Body from "./components/Body/Body";
import ExamAce from "./components/ExamAce/ExamAce";
import ExploreSubjects from "./components/ExploreSubjects/ExploreSubjects";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import FreeSolution from "./components/Solution/FreeSolution";
import StudyMaterial from "./components/StudyMaterial/StudyMaterial";
import Testimonials from "./components/Testimonials/Testimonials";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Slider />
        <StudyMaterial />
        <ExamAce />
        <ExploreSubjects />
        <FreeSolution />
        <Testimonials />
      </div>
    );
  }
}
