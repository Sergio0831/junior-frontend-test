import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";
import classes from "./Dropdown.module.scss";
import { getCurrenciesQuery } from "../../queries/queries";
import { setCurrency } from "../../features/currencySlice";
import { connect } from "react-redux";
import DropdownHeader from "./DropdownHeader";
import DropdownList from "./DropdownList";

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isListOpen: false
    };
  }

  close = () => {
    this.setState({
      isListOpen: false
    });
  };

  componentDidUpdate() {
    const { isListOpen } = this.state;

    setTimeout(() => {
      if (isListOpen) {
        window.addEventListener("click", this.close);
      } else {
        window.removeEventListener("click", this.close);
      }
    }, 0);
  }

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen
    }));
  };

  selectItem = (currency) => {
    this.setState(() => ({
      isListOpen: false
    }));
    this.props.setCurrency(currency);
  };

  render() {
    const { isListOpen } = this.state;
    const { currency } = this.props.currency;

    return (
      <>
        <Query query={getCurrenciesQuery}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error: ${error}`;
            if (data)
              return (
                <div className={classes.dropdown}>
                  <DropdownHeader
                    isListOpen={isListOpen}
                    toggleList={this.toggleList}
                    currency={currency}
                  />
                  {isListOpen && (
                    <DropdownList
                      currencies={data.currencies}
                      selectItem={this.selectItem}
                    />
                  )}
                </div>
              );
          }}
        </Query>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrency: (currency) => dispatch(setCurrency(currency))
  };
};

const mapStateToProps = (state) => {
  return {
    currency: state.currency
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
