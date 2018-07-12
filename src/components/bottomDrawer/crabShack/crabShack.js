import React, {Component} from 'react';
import './crabShack.css';
import { Tabs, Tab } from '@material-ui/core';
import { TabContainer } from '../../../helpers';

class CrabShack extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { value } = this.state;

    return (
      <div className="crabShack">
        <div className="drawerSubHead">Hours</div>

        <Tabs value={value} 
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary">
          <Tab label="Saturday - July 14th" />
          <Tab label="Sunday - July 15th" />
        </Tabs>
        
        {value === 0 && <TabContainer>11:00am - 9:00pm</TabContainer>}
        {value === 1 && <TabContainer>11:00am - 8:00pm</TabContainer>}

        Back by popular demand, we are featuring the Trident Seafoods Crab Legs and have added more seafood offerings this year!<br /><br />
        On Saturday and Sunday, we’ll be serving up some of Trident’s finest Alaskan King crab legs, butter and cocktail sauce for $15. Enjoy your crab legs in the comfort of the Crab Lounge.<br /><br />
        Penn Cove Mussels steamed in a wine butter broth and barbequed oysters will be on the menu this year. We are offering a generous serving for $15 that you can enjoy in the Crab Lounge<br /><br />

        <div className="draweSubHead">TOKEN PURCHASE</div>
        Tokens are available only at the Information Booth: Salmon, Crab, mussels, bbq oysters and Salmon Token Sales Stations located at 22nd Ave NW and NW Market Street (next to Starbucks). We have a limited quantity of these tasty seafood offerings, so buy your tokens early!
        PURCHASE TOKENS FIRST THEN PICK UP (Crab Legs – Steamed Mussels – BBQ Oysters) ON THE SOUTH SIDE OF MARKET STREET ON 22nd AVE NW (In front of Vera’s Restaurant and across from Bergen Place Park)

      </div>
    );
  }
}

export default CrabShack;