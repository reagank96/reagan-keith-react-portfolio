import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: []
    };

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    this.handleFormSubmuissionError = this.handleFormSubmuissionError.bind(this);
  }

  handleSuccessfulFormSubmission(portfolioItem) {
    // TODO
    // update the portfolioItems state
    // and add the portfolioItem to the list
  }


  handleFormSubmuissionError(error) {
    console.log("handleFormSubmissionError error", error);
  }

  getPortfolioItems() {
    axios
      .get("https://reagankeith.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        console.log("error in getPortfolioItems", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleFormSubmuissionError={this.handleFormSubmuissionError}
          />
        </div>

        <div className="right-column">
          <PortfolioSidebarList data={this.state.portfolioItems}/>
        </div>
      </div>
    );
  }
}